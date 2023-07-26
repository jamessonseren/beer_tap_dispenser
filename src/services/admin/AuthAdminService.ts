import prismaClient from "../../../prisma";
import { compare } from 'bcryptjs'

interface AuthRequest{
    email: string,
    password: string
}

class AuthAdminService{
    async execute( { email, password }: AuthRequest){

        //check if email exists
        const admin = await prismaClient.admin.findFirst({
            where:{
                email: email
            }
        })

        if(!admin){
            throw new Error("User/password incorrect")
        }

        //check if password is correct
        const passwordMatch = await compare(password, admin.password)
        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        return email

        
    }
}

export { AuthAdminService }