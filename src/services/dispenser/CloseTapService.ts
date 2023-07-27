import prismaClient from "../../../prisma";


class CloseTapService{
   
    async execute( dispenser_id: string){
       const checkTap = await this.checkTapClosed(dispenser_id)

       if(checkTap){
        throw new Error("Tap is already closed!")
       }

       return await this.closeTap(dispenser_id)   
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
        const end_time = new Date()

        await this.registerCloseTapData(dispenser_id, end_time)

        return await prismaClient.dispensers.update({
            where:{
                id: dispenser_id
            },
            data:{
                status: false
            }
        })

    }

    private async registerCloseTapData(dispenser_id: string, end_time: Date){

        const getServiceOpen = await this.findServiceOpened(dispenser_id)

        const getDispenser = await this.findDispenser(dispenser_id)

        const calculatedTime = await this.calculateTimeInSeconds(end_time, getServiceOpen.start_time)

        const calculateBeerServed = await this.calculateBeerServed(getDispenser.flow_rate, calculatedTime)

        const calculateAmountCharged = await this.calculateAmountCharged(getDispenser.beverage_price, calculateBeerServed)

        return await prismaClient.serviceRegister.update({
            where:{
                id: getServiceOpen.id,
                dispenser_id: dispenser_id
            },
            data:{
                end_time: end_time,
                beer_served: +calculateBeerServed.toFixed(2),
                amount_charged: +calculateAmountCharged.toFixed(2)
            }
          });

          
    }

    private async calculateAmountCharged(beverage_price: number, beer_served: number){
        return beverage_price * beer_served
    }


    private async calculateTimeInSeconds(end_time: Date, start_time: Date){
        return (end_time.getTime() - start_time.getTime()) / 1000
    }

    private async calculateBeerServed(flow_rate: number, calculatedTime: number){
        return flow_rate * calculatedTime
    }
   
    private async findServiceOpened(dispenser_id: string){
        const serviceOpen = await prismaClient.serviceRegister.findFirst({
            where:{
                dispenser_id: dispenser_id,
                beer_served: 0,
                amount_charged: 0
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