import { Request, Response } from "express";
import { AuthAdminService } from "../../services/admin/AuthAdminService";

class AuthAdminController{
    async handle(req: Request, res: Response){
        const { email, password} = req.body

        const authAdmin = new AuthAdminService()

        const auth = authAdmin.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export {AuthAdminController}