import prismaClient from "../../../prisma";


class OpenTapService{
    async execute(dispenser_id: string){

            const checkTap = await this.checkTapOpen(dispenser_id)

            if(checkTap){
                throw new Error("Tap is already open")
            }
            
            const openTap = await this.openTap(dispenser_id)
            
            if(openTap){
                return await this.registerOpenTapData(dispenser_id)
            }

    }
    private async checkTapOpen(dispenser_id: string){
        return await prismaClient.dispensers.findFirst({
            where:{
                id: dispenser_id,
                status: true
            }
        })

    }

    private async openTap(dispenser_id: string){

        return await prismaClient.dispensers.update({
            where:{
                id: dispenser_id
            },
            data:{
                status: true
            }
        })
    }

    private async registerOpenTapData(dispenser_id: string){
        const start_time = new Date();

        return await prismaClient.serviceRegister.create({
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
      
    }
}

export { OpenTapService }