import type { Order } from "src/domain/entities/Order.js"

export interface OrderReposiory {
    findBy(id: string): Promise<Order | null>
    save(order: Order): Promise<void>
}
