import { cache } from "react";
import { queryBuilder } from "@/utils/planetscale";


export const getBlogViews = cache(async () => {
    try {
        const data = await queryBuilder
        .selectFrom('views')
        .select(['count'])
        .execute()

        return data.reduce((acc, curr) => acc + Number(curr.count), 0)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
})