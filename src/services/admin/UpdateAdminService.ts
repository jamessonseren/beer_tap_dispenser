import prismaClient from "../../../prisma";

interface AdminRequest{
    admin_id: string
    name: string
    email: string
    
}
class UpdateAdminService{
    async execute( {admin_id, name, email }: AdminRequest ){
        return await this.updateAdmin({admin_id, name, email})
    }

    private async updateAdmin({admin_id, name, email }: AdminRequest){
        return await prismaClient.admin.update({
            where:{
                id: admin_id
            },
            data:{
                name,
                email
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
    }
}

export { UpdateAdminService }