import prismaClient from "../../../prisma";

interface SingleRegisterRequest{
    dispenser_id: string,
    service_id: string
}
class DeleteSingleRegisterService{
    async execute({ dispenser_id, service_id }: SingleRegisterRequest){
        return await this.deleteSingleRegister({dispenser_id, service_id})
    }

    private async deleteSingleRegister({ dispenser_id, service_id }: SingleRegisterRequest){
        return await prismaClient.serviceRegister.deleteMany({
            where:{
                id: service_id,
                dispenser_id: dispenser_id
            }
        })
    }
}

export { DeleteSingleRegisterService }