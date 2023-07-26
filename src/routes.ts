import { Router, Request, Response } from "express"
import { CreateAdminController } from "./controllers/admin/createAdminController"
import { AuthAdminController } from "./controllers/admin/AuthAdminController"

const router = Router()

// Admin Routes
router.post('/admin', new CreateAdminController().handle)

router.post('/session', new AuthAdminController().handle)

export { router }