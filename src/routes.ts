import { Router } from "express"
import { CreateAdminController } from "./controllers/admin/createAdminController"
import { AuthAdminController } from "./controllers/admin/AuthAdminController"
import { DetailAdminController } from "./controllers/admin/DetailAdminController"
import { UpdateAdminController } from "./controllers/admin/UpdateAdminController"
import { DeleteAdminController } from "./controllers/admin/DeleteAdminController"

import { isAuthenticated } from "./middlewares/isAuthenticated"

import { CreateDispenserController } from "./controllers/dispenser/CreateDispenserController"
import { OpenTapController } from "./controllers/dispenser/OpenTapController"
import { ListDispenserController } from "./controllers/dispenser/ListDispenserController"
import { CloseTapController } from "./controllers/dispenser/CloseTapController"

import { ListServiceController } from "./controllers/serviceRegister/ListServiceController"
import { UpdateDispenserController } from "./controllers/dispenser/UpdateDispenserController"
import { DeleteDispenserController } from "./controllers/dispenser/DeleteDispenserController"

const router = Router()

// Admin Routes
router.post('/admin', new CreateAdminController().handle)
router.post('/session', new AuthAdminController().handle)
router.get('/me', isAuthenticated, new DetailAdminController().handle)
router.put('/admin', isAuthenticated, new UpdateAdminController().handle)
router.delete('/admin', isAuthenticated, new DeleteAdminController().handle)

// Dispensers Routes
router.post('/create-dispenser', isAuthenticated, new CreateDispenserController().handle)
router.get('/dispenser', isAuthenticated, new ListDispenserController().handle)
router.put('/close-tap', new CloseTapController().handle)
router.put('/open-tap', new OpenTapController().handle)
router.put('/dispenser', isAuthenticated, new UpdateDispenserController().handle)
router.delete('/dispenser', isAuthenticated, new DeleteDispenserController().handle)

//Service Dispenser
router.get('/services', isAuthenticated, new ListServiceController().handle)

export { router }