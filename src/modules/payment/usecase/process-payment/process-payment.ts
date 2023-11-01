import { ProcessPaymentInputDto, ProcessPaymentOutputDto } from "./process-payment.dto";
import { TransactionGateway } from "../../gateway/transaction.gateway";
import { Transaction } from "../../domain/transaction";

export class ProcessPayment {
  constructor(private transactionRepository: TransactionGateway) { }

  async execute(input: ProcessPaymentInputDto): Promise<ProcessPaymentOutputDto> {
    const transaction = new Transaction({
      orderId: input.orderId,
      amount: input.amount,
    });

    transaction.process();

    await this.transactionRepository.save(transaction);

    return {
      transactionId: transaction.id.id,
      orderId: transaction.orderId,
      amount: transaction.amount,
      status: transaction.status,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }
}
