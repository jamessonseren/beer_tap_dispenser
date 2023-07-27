import { Request, Response } from "express";
import { UpdateAdminService } from "../../services/admin/UpdateAdminService";

class UpdateAdminController{
    async handle(req: Request, res: Response){
        const admin_id = req.admin_id

        const { name, email } = req.body

        const updateAdmin = new UpdateAdminService()

        const admin = await updateAdmin.execute({admin_id, name, email})

        return res.json(admin)
    }
}

export { UpdateAdminController }