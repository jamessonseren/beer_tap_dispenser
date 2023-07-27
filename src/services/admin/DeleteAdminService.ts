import prismaClient from "../../../prisma";

class DeleteAdminService{
    async execute(admin_id: string){
        return await this.deleteAdmin(admin_id)
    }

    private async deleteAdmin(admin_id: string){
        return await prismaClient.admin.delete({
            where:{
                id: admin_id
            }
        })
    }
}

export { DeleteAdminService }