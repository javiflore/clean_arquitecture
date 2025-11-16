import type { Order } from "src/domain/entities/Order.js"
import type { OrderRepository } from "@domain/repositories/OrderRepository.js"

export class InMemoryOrderRepository implements OrderRepository {

    private store = new Map<string, Order>()
    async findById(id: string) { return this.store.get(id) ?? null }
    async save(order: Order) { this.store.set(order.id, order) }
}