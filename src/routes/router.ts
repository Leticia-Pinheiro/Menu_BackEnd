import { Router } from "express"
import revenuesRouter from "./revenuesRouter"


const router = Router()
router.use(revenuesRouter)

export default router