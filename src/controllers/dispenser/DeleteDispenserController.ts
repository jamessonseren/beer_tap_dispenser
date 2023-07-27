import { Request, Response } from "express";
import { DeleteDispenserService } from "../../services/dispenser/DeleteDispenserService";

class DeleteDispenserController{
    async handle(req: Request, res: Response){
        const dispenser_id = req.query.dispenser_id as string

        const deleteDispenser = new DeleteDispenserService()

        const dispenser = await deleteDispenser.execute(dispenser_id)


        return res.json({message: `${dispenser.name} delete successfully`})
    }
}

export { DeleteDispenserController }