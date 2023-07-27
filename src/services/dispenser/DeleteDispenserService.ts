import prismaClient from "../../../prisma";

class DeleteDispenserService{
    async execute(dispenser_id: string){
        return await this.deleteDispenser(dispenser_id)
    }

    private async deleteDispenser(dispenser_id: string){
        return await prismaClient.dispensers.delete({
            where:{
                id: dispenser_id
            }
        })
    }
}

export { DeleteDispenserService }