import { Request, Response } from "express";
import { OpenTapService } from "../../services/dispenser/OpenTapService";

class OpenTapController{
    async handle(req: Request, res: Response){

        const dispenser_id = req.body.id as string

        const openTap = new OpenTapService()

        const dispenser = await openTap.execute(dispenser_id)

        return res.json(dispenser)
    }
}

export {OpenTapController}