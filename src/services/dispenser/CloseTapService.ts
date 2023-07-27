import prismaClient from "../../../prisma";

interface CloseTapRequest{
    dispenser_id: string,
    service_id: string
}
class CloseTapService{
   
    async execute({ dispenser_id, service_id}: CloseTapRequest){
       const checkTap = await this.checkTapClosed(dispenser_id)

       if(checkTap){
        throw new Error("Tap is already closed!")
       }

       const closeTap = await this.closeTap(dispenser_id)

       if(closeTap){
        return await this.registarCloseTapData({dispenser_id, service_id})
       }
       
    }

    private async checkTapClosed(dispenser_id: string){
        return await prismaClient.dispensers.findFirst({
            where:{
                id: dispenser_id,
                status: false
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
    }

    private async registarCloseTapData({ dispenser_id, service_id}){
        const end_time = new Date()

        const getServiceOpen = await this.findServiceOpened(service_id)

        const getDispenser = await this.findDispenser(dispenser_id)

        const calculateTimeInSeconds = (end_time.getTime() - getServiceOpen.start_time.getTime()) / 1000

        const calculateBeerServed = (getDispenser.flow_rate * calculateTimeInSeconds)

        return await prismaClient.serviceRegister.update({
            where:{
                id: service_id,
                dispenser_id: dispenser_id
            },
            data:{
                end_time: end_time,
                beer_served: Number(calculateBeerServed.toFixed(2)),
                amount_charged: 6.8
            }
          });

          
    }
   
    private async findServiceOpened(service_id: string){
        const serviceOpen = await prismaClient.serviceRegister.findFirst({
            where:{
                id: service_id
            }
        })

        return serviceOpen
    }

    private async findDispenser(dispenser_id:string){
        return await prismaClient.dispensers.findFirst({
            where:{
                id: dispenser_id
            }
        })

    }

}

export { CloseTapService }