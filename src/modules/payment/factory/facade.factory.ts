import { PaymentFacade } from "../facade/payment.facade";
import { TransactionRepository } from "../repository/transaction.repository";
import { ProcessPayment } from "../usecase/process-payment/process-payment";

export class PaymentFacadeFactory {
  static create() {
    const transactionRepository = new TransactionRepository();
    const processPayment = new ProcessPayment(transactionRepository);
    const paymentFacade = new PaymentFacade({
      processPayment
    });

    return paymentFacade;
  }
}
