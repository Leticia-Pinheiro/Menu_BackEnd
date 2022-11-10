import { Request, Response } from "express"
import * as revenueService from "../services/revenueService"

export async function createRevenue(req: Request, res: Response){
    const revenue = req.body

    await revenueService.createRevenue(revenue)

    res.send("Revenue created successfully").status(201)
}

export async function getRevenues(req: Request, res: Response){
    const revenuesData = await revenueService.getRevenues()

    res.send(revenuesData).status(201)
}