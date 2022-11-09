import * as revenueRepository from "../repositories/revenueRepository"
import { revenues } from "@prisma/client"

export async function createRevenue(
    revenue : revenues
){    
    await revenueRepository.createRevenue(revenue)
}

export async function getRevenues(){
    const revenuesData = await revenueRepository.getRevenues()
    return revenuesData
}
