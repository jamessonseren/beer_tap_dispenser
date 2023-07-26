import { Request, Response } from "express";
import { CreateDispenserService } from "../../services/dispenser/CreateDispenserService";

class CreateDispenserController{
    async handle(req: Request, res: Response){

        const { name, flow_rate } = req.body

        const admin_id = req.admin_id

        const createDispenser = new CreateDispenserService()

        const dispenser = await createDispenser.execute({ name, flow_rate, admin_id })

        return res.json(dispenser)
    }
}

export {CreateDispenserController}