import prisma from "../database/database"
import { revenues } from "@prisma/client"

export async function createRevenue(
    revenue: revenues
){
    await prisma.revenues.create({data: revenue})
}

export async function getRevenues(){
    const revenuesData = await prisma.revenues.findMany()

    return revenuesData
}