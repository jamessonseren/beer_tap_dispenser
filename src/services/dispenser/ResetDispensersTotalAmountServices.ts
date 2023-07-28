import prismaClient from "../../../prisma";

class ResetDispensersTotalAmountServices{
    async execute(admin_id: string){

        // const dispensers = await this.getAdminDispensers(admin_id)
        
        return await this.resetRevenues(admin_id)


    }

    // private async getAdminDispensers(admin_id: string){
    //     return await prismaClient.dispensers.findMany({
    //         where:{
    //             admin_id: admin_id
    //         }
    //     })
    // }

    private async resetRevenues(admin_id: string){
        return await prismaClient.dispensers.updateMany({
            where:{
                admin_id: admin_id
            },
            data:{
                total_amount: 0
            }
        })
    }
}

export { ResetDispensersTotalAmountServices }
