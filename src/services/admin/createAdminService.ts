import prismaClient from "../../../prisma";
import { hash } from "bcryptjs"

interface AdminRequest{
    name: string;
    email: string;
    password: string;
}
class CreateAdminService{
    async execute( { name, email, password}: AdminRequest){
        
        //Check if admin inserted email
        if(!email || !password){
            throw new Error("Missing information")
        }

        //Check if email is already registered
        const userAlreadyExists = await prismaClient.admin.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)

        const admin = await prismaClient.admin.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return admin
    }
}

export { CreateAdminService }