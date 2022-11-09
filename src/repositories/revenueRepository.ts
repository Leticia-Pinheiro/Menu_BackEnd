import prisma from "../database/database"

export async function createRevenue(
    revenue: string
){
    await prisma.revenues.create({data: {revenue}})
}

export async function getRevenues(){
    const revenuesData = await prisma.revenues.findMany()

    return revenuesData
}