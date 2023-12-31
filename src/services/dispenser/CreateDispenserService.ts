import prismaClient from "../../../prisma";

interface DispenserRequest{
    name: string,
    flow_rate: number,
    admin_id: string,
    beverage_price: number
}
class CreateDispenserService{
    async execute({ name, flow_rate, admin_id, beverage_price }: DispenserRequest){
        if(!name){
            throw new Error("Dispenser name missing!")
        }
        if(!flow_rate){
            throw new Error("Dispenser flow rate missing!")
        }
    
        const dispenser = await prismaClient.dispensers.create({
            data:{
                name: name,
                flow_rate: flow_rate,
                admin_id: admin_id,
                status: false,
                total_amount: 0,
                beverage_price: beverage_price 
            }
        })
        
        return dispenser
    }
}

export { CreateDispenserService }