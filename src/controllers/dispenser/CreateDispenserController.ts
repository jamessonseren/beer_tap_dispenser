import { Request, Response } from "express";
import { CreateDispenserService } from "../../services/dispenser/CreateDispenserService";

class CreateDispenserController{
    async handle(req: Request, res: Response){

        const { name, flow_rate, beverage_price } = req.body

        const admin_id = req.admin_id

        const createDispenser = new CreateDispenserService()

        const dispenser = await createDispenser.execute({ name, flow_rate, admin_id, beverage_price })

        return res.json(dispenser)
    }
}

export {CreateDispenserController}