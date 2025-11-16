import { InMemoryOrderRepository } from "src/infraestructure/persistence/InMemoryOrderRepository.js";
import { CreateOrder } from "src/application/use-cases/CreateOrderUseCase.js";

const repo = new InMemoryOrderRepository()
export const createOrder = new CreateOrder(repo);