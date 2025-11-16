import { Order } from "src/domain/entities/Order.js";
import type { OrderReposiory } from "../ports/OrderRepository.js";

export type CreateOrderInput = { orderId: string, customerId: string }
export type CreateOrderOutput = { orderId: string }


export class CreateOrder {

    constructor(private readonly repo: OrderReposiory) {}

    async execute({ orderId, customerId }: CreateOrderInput): Promise<CreateOrderOutput> {
        const exits = await this.repo.findBy(orderId)
        if(exits) throw new Error("Order already exists")
        const order = new Order(orderId, customerId)
        await this.repo.save(order)
        return { orderId: orderId.id}
    }


}