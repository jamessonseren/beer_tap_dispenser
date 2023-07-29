import { Request, Response } from "express";
import { DeleteAdminService } from "../../services/admin/DeleteAdminService";

class DeleteAdminController{
    async handle(req: Request, res: Response){
        const admin_id = req.admin_id

        const deleteAdmin = new DeleteAdminService()

        const admin = await deleteAdmin.execute(admin_id)

        return res.json({message:`${admin.name} deleted successfully`})
    }
}

export { DeleteAdminController }