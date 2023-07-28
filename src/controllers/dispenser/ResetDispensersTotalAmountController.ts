import { Request, Response } from "express";
import { ResetDispensersTotalAmountServices } from "../../services/dispenser/ResetDispensersTotalAmountServices";

class ResetDispensersTotalAmountController{
    async handle(req: Request, res: Response){
        const admin_id = req.admin_id

        const resetRevenue = new ResetDispensersTotalAmountServices()

        await resetRevenue.execute(admin_id)

        return res.json({message: "Revenues reseted successfully"})
    }
}

export { ResetDispensersTotalAmountController }