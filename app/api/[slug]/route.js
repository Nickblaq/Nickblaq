import { queryBuilder } from "@/utils/planetscale";


export async function POST(req, res) {

    try {
       const slugQ = req.query?.slug 
       const slugP = req.params?.slug
       const slug = slugQ !== '' | undefined ?  slugQ : slugP
       console.log('Q,P,S' ,slugQ,slugP, slug)
       if (!slug) {
        console.log('slug not found')
        return res.status(400).json({ message: 'Slug is required'})
       } 

       const data = await queryBuilder
       .selectFrom('views')
      .where('slug', '=', slug)
      .select(['count'])
      .execute();

      const views = !data.length ? 0 : Number(data[0].count);

      await queryBuilder
      .insertInto('views')
        .values({ slug, count: 1 })
        .onDuplicateKeyUpdate({ count: views + 1 })
        .execute();

        return res.status(200).json({
            total: views + 1
        })
    } catch (error) {
        console.log('could not post views')
        return res.status(500).json({ message: 'Error. Post view failed'})
    }
}


export async function GET(req, res) {
     try {
        const slug = req.query?.slug 
        if (!slug) {
         console.log('slug not found')
         return res.status(400).json({ message: 'Slug is required'})
        } 
 
        const data = await queryBuilder
        .selectFrom('views')
       .where('slug', '=', slug)
       .select(['count'])
       .execute();
 
       const views = !data.length ? 0 : Number(data[0].count);
       return res.status(200).json({ total: views });
     } catch (error) {
        console.log('could not get views')
        return res.status(500).json({ message: 'Error. Get views failed'})
     }
}