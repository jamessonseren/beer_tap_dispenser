import prismaClient from "../../../prisma";

class CloseTapService{
   
    async execute(dispenser_id: string){
       const checkTap = await this.checkTapOpen(dispenser_id)

       if(!checkTap){
        throw new Error("Tap is already closed!")
       }

       return await this.closeTap(dispenser_id)
    }

    private async checkTapOpen(dispenser_id: string){
        return await prismaClient.dispensers.findFirst({
            where:{
                id: dispenser_id,
                status: true
            }
        })

    }

    private async closeTap(dispenser_id: string){

        return await prismaClient.dispensers.update({
            where:{
                id: dispenser_id
            },
            data:{
                status: false
            }
        })
        // const findService = await prismaClient.serviceRegister.findFirst({
        //     where:{
        //         id: dispenser_id,
        //         beer_served: 0,
        //         amount_charged: 0
        //     }
        // })


        // if(findService){
            
            // const stopService = await prismaClient.serviceRegister.update({
            //     where:{
            //         id: findService.id
            //     },
            //     data:{
            //         end_time: end_time,
            //         beer_served: 2,
            //         amount_charged: 5
            //     }
            // })

            // return stopService
        // }
    }

}

export { CloseTapService }