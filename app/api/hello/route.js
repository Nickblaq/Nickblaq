import { queryBuilder } from "@/utils/planetscale"
import {NextRequest, NextResponse } from "next/server"

export async function POST () {
    const db = queryBuilder
    try {
       const data = await db
  .insertInto('person')
  .values([
    {
      name: 'Bob'
    },
    {
        name: 'Jimi'
    }
  ])
  .execute()
        return NextResponse.json({mesaage: "Hello world", data})
    } catch (error) {
        return NextResponse.json({mesaage: "Failed"})
    }
}

