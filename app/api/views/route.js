import { queryBuilder } from "@/utils/planetscale";


export default async function GET(res) {
    try {
        const data = await queryBuilder
        .selectFrom('views')
        .select(['slug', 'count'])
        .execute()

        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}