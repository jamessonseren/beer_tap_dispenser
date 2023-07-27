import prismaClient from "../../../prisma";

class DeleteAllRegistersPerDispenserService{
    async execute(dispenser_id: string){
        return await this.deleteRegisters(dispenser_id)
    }

    private async deleteRegisters(dispenser_id: string){
        return await prismaClient.serviceRegister.deleteMany({
            where:{
                dispenser_id: dispenser_id
            }
        })
    }
}

export { DeleteAllRegistersPerDispenserService }