import { Router } from "express"
import * as revenueController from "../controllers/revenueController"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import revenueSchema from "../schemas/revenueSchema"

const authRouter = Router()

authRouter.post(
	"/revenue",	
	ValidateSchema(revenueSchema),
	revenueController.createRevenue
)

authRouter.get(
	"/revenues",	
	revenueController.getRevenues
)

export default authRouter