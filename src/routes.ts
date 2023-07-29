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
import { DeleteAllRegistersPerDispenserController } from "./controllers/serviceRegister/DeleteAllRegistersPerDispenserController"
import { DeleteSingleRegisterController } from "./controllers/serviceRegister/DeleteSingleRegisterController"
import { GenerateReportController } from "./controllers/report/GenerateReportController"
import { ResetDispensersTotalAmountController } from "./controllers/dispenser/ResetDispensersTotalAmountController"

const router = Router()

// Admin Routes
router.post('/admin', new CreateAdminController().handle)
router.post('/login', new AuthAdminController().handle)
router.get('/admin', isAuthenticated, new DetailAdminController().handle)
router.put('/admin', isAuthenticated, new UpdateAdminController().handle)
router.delete('/admin', isAuthenticated, new DeleteAdminController().handle)

// Dispensers Routes
router.post('/create-dispenser', isAuthenticated, new CreateDispenserController().handle)
router.get('/dispenser', isAuthenticated, new ListDispenserController().handle)
router.put('/close-tap', new CloseTapController().handle)
router.put('/open-tap', new OpenTapController().handle)
router.put('/dispenser', isAuthenticated, new UpdateDispenserController().handle)
router.delete('/dispenser', isAuthenticated, new DeleteDispenserController().handle)
router.put('/reset-revenue', isAuthenticated, new ResetDispensersTotalAmountController().handle)

//Service Dispenser
router.get('/services', isAuthenticated, new ListServiceController().handle)
router.delete('/dispensers-service', isAuthenticated, new DeleteAllRegistersPerDispenserController().handle)
router.delete('/single-service/:service_id', isAuthenticated, new DeleteSingleRegisterController().handle)


//report
router.get('/report', isAuthenticated, new GenerateReportController().handle)


export { router }