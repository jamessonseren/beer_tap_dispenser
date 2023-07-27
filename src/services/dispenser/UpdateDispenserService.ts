import prismaClient from "../../../prisma";

interface UpdateDispenserRequest{
    dispenser_id: string,
    name: string,
    flow_rate: number,
    beverage_price: number,
    total_amount: number

}

class UpdateDispenserService{
    async execute( {dispenser_id, name, flow_rate, beverage_price, total_amount }: UpdateDispenserRequest ){
        return await this.updateDispenser({dispenser_id, name, flow_rate, beverage_price, total_amount})
    }

    private async updateDispenser({dispenser_id, name, flow_rate, beverage_price, total_amount }: UpdateDispenserRequest){
        return await prismaClient.dispensers.update({
            where:{
                id: dispenser_id
            },
            data:{
                name,
                flow_rate,
                beverage_price,
                total_amount

            }
        })
    }
}

export { UpdateDispenserService }