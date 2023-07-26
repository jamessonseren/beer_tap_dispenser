import prismaClient from "../../../prisma";


class OpenTapService{
    async execute(dispenser_id: string){

        const openTap = await prismaClient.dispensers.update({
            where:{
                id: dispenser_id
            },
            data:{
                status: true
            }
        })

        if(openTap){
           await this.startService(dispenser_id)
        }
        
        return openTap

    }

    private async startService(dispenser_id: string){

        const start_time = new Date()

        const openTap = await prismaClient.serviceRegister.create({
            data: {
                dispenser: {
                  connect: {
                    id: dispenser_id,
                  },
                },
                start_time: start_time,
                end_time: start_time,
                beer_served: 0,
                amount_charged: 0,
              },
            });
    

        return openTap

    }
}

export { OpenTapService }