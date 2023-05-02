import { queryBuilder } from "@/utils/planetscale"
import { NextResponse } from "next/server"

export async function POST () {
    const db = queryBuilder
    try {
       const data = await db
  .insertInto('person')
  .values([
    {
      first_name: 'Bob',
      last_name: 'Dylan',
      age: 5,
    },
    {
      first_name: 'Jimi',
      last_name: 'Hendrix',
      age: 5,
    }
  ])
  .execute()
        return NextResponse.json({mesaage: "Hello world", data})
    } catch (error) {
        return NextResponse.json({mesaage: "Failed"})
    }
}

