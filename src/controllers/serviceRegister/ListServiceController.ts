import { Request, Response } from "express";
import { ListServiceService } from "../../services/serviceRegister/ListServiceService";

class ListServiceController{
    async handle(req: Request, res: Response){
        const dispenser_id = req.query.dispenser_id as string

        const listService = new ListServiceService()

        const services = await listService.execute(dispenser_id)

        return res.json(services)

    }
}

export {ListServiceController}