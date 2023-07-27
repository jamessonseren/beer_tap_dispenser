import { Request, Response } from "express";
import { DeleteAllRegistersPerDispenserService } from "../../services/serviceRegister/DeleteAllRegistersPerDispenserService";

class DeleteAllRegistersPerDispenserController{
    async handle(req: Request, res: Response){

        const dispenser_id = req.query.dispenser_id as string

        const deleteRegisters = new DeleteAllRegistersPerDispenserService()

        await deleteRegisters.execute(dispenser_id)

        return res.json({message: "Registers delete successfully"})
    }
}

export { DeleteAllRegistersPerDispenserController }