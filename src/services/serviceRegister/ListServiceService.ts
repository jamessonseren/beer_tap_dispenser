import prismaClient from "../../../prisma";

class ListServiceService{
    async execute(dispenser_id: string){
        
        const services = await prismaClient.serviceRegister.findMany({
            where:{
                dispenser_id: dispenser_id
            }     
        })

        return services
    }
}

export {ListServiceService}