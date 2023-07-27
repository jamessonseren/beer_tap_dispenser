import prismaClient from "../../../prisma";


class OperatingTapService{
    async execute(dispenser_id: string){

            const checkTap = await prismaClient.dispensers.findFirst({
                where:{
                    id: dispenser_id,
                    status: false
                }
            })

            if(!checkTap){
                throw new Error("Tap is already open")
            }
            
            const openTap = await prismaClient.dispensers.update({
                where:{
                    id: dispenser_id
                },
                data:{
                    status: true
                }
            })
    
            if(openTap){
               await this.openTap(dispenser_id)
            }
            
            return openTap
        

    }

    private async openTap(dispenser_id: string){

        const start_time = new Date()

        const startService = await prismaClient.serviceRegister.create({
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
    

        return startService

    }

    private async closeTap(){
        const end_time = new Date()

        const findService = await prismaClient.serviceRegister.findFirst({
            where:{
                beer_served: 0,
                amount_charged: 0
            }
        })

        if(findService){
            const stopService = await prismaClient.serviceRegister.update({
                where:{
                    id: findService.id
                },
                data:{
                    end_time: end_time,
                    beer_served: 2,
                    amount_charged: 5
                }
            })

            return stopService
        }
    }
}

export { OperatingTapService }