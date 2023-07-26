import { Router, Request, Response } from "express"
import { CreateAdminController } from "./controllers/admin/createAdminController"
import { AuthAdminController } from "./controllers/admin/AuthAdminController"
import { DetailAdminController } from "./controllers/admin/DetailAdminController"

import { isAuthenticated } from "./middlewares/isAuthenticated"

import { CreateDispenserController } from "./controllers/dispenser/CreateDispenserController"
const router = Router()

// Admin Routes
router.post('/admin', new CreateAdminController().handle)

router.post('/session', new AuthAdminController().handle)

router.get('/me', isAuthenticated, new DetailAdminController().handle)

// Dispensers Routes
router.post('/create-dispenser', isAuthenticated, new CreateDispenserController().handle)

export { router }