import { Request, Response } from "express";
import { ListDispenserService } from "../../services/dispenser/ListDispenserService";

class ListDispenserController{
    async handle(req: Request, res: Response){
        const admin_id = req.admin_id

        const listDispenser = new ListDispenserService()

        const dispensers = await listDispenser.execute(admin_id)

        return res.json(dispensers)
    }
}

export { ListDispenserController }