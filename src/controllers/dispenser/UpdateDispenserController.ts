import { Request, Response } from "express";
import { UpdateDispenserService } from "../../services/dispenser/UpdateDispenserService";

class UpdateDispenserController{
    async handle(req: Request, res: Response){

        const { name, flow_rate, beverage_price, total_amount } = req.body

        const dispenser_id = req.query.dispenser_id as string

        const UpdateDispenser = new UpdateDispenserService()

        const dispenser = await UpdateDispenser.execute({dispenser_id, name, flow_rate, beverage_price, total_amount})

        return res.json(dispenser)
    }
}

export { UpdateDispenserController }