import { Request, Response } from 'express'
import { CreateAdminService } from '../../services/admin/createAdminService'
class CreateAdminController{
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body

        const createAdmin = new CreateAdminService()

        const admin = await createAdmin.execute({
            name,
            email,
            password
        })

        return res.json(admin)
    }
}

export{ CreateAdminController }