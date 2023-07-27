import { Request, Response } from "express";
import { CloseTapService } from "../../services/dispenser/CloseTapService";

class CloseTapController{
    async handle(req: Request, res: Response){
        const dispenser_id = req.body.id as string

        const closeTap = new CloseTapService()

        const dispenser = await closeTap.execute(dispenser_id)

        return res.json(dispenser)

    }
}

export { CloseTapController }