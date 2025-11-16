import { FastifyRequest, FastifyReply } from 'fastify'
import { createOrder } from 'src/composition/container.js'

export const OrdersController = {
    async create(req: FastifyRequest, reply: FastifyReply) {
        const { orderId, customerId } = req.body as any
        const out = await createOrder.execute({ orderId, customerId})
        reply.code(201).send(out)
    }

    async delete(req: FastifyRequest, reply: FastifyReply) {
        // To be implemented
    }
}