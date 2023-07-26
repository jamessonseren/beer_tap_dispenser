import prismaClient from "../../../prisma";


class ListDispenserService{
    async execute(admin_id: string){

        const dispensers = await prismaClient.dispensers.findMany({
            where:{
                admin_id: admin_id
            }
        })

        return dispensers
    }
}

export { ListDispenserService }