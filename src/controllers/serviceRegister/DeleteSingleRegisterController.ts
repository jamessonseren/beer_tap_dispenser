import { Request, Response } from "express";
import { DeleteSingleRegisterService } from "../../services/serviceRegister/DeleteSingleRegisterService";

class DeleteSingleRegisterController{
    async handle(req: Request, res: Response){

        const dispenser_id = req.query.dispenser_id as string

        const service_id = req.params.service_id as string

        const deleteSingleRegister = new DeleteSingleRegisterService()

        await deleteSingleRegister.execute({dispenser_id, service_id})

        return res.json({message: "Register delete successfully"})
    }
}

export { DeleteSingleRegisterController }