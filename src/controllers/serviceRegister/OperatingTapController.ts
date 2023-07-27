import { Request, Response } from "express";
import { OperatingTapService } from "../../services/serviceRegister/OperatingTapService";

class OperatingTapController{
    async handle(req: Request, res: Response){

        const dispenser_id = req.body.id as string

        const OperatingTap = new OperatingTapService()

        const dispenser = await OperatingTap.execute(dispenser_id)

        return res.json(dispenser)
    }
}

export {OperatingTapController}