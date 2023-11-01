import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { Transaction } from "../../domain/transaction";
import { ProcessPayment } from "./process-payment";

const transaction = new Transaction({
  id: new Id("1"),
  orderId: "1",
  amount: 99,
});

const MockRepository = () => {
  return {
    save: jest.fn().mockReturnValue(Promise.resolve(transaction)),
  };
};

describe("Process payment usecase unit test", () => {
  it("should approve a transaction", async () => {
    const paymentRepository = MockRepository();

    const usecase = new ProcessPayment(paymentRepository);
    const input = {
      orderId: "1",
      amount: 100,
    };

    const result = await usecase.execute(input);

    expect(result.transactionId).toBeDefined();
    expect(paymentRepository.save).toHaveBeenCalled();
    expect(result.status).toBe("approved");
    expect(result.amount).toBe(100);
    expect(result.orderId).toBe("1");
  });

  it("should decline a transaction", async () => {
    const paymentRepository = MockRepository();

    const usecase = new ProcessPayment(paymentRepository);
    const input = {
      orderId: "1",
      amount: 99,
    };

    const result = await usecase.execute(input);

    expect(result.transactionId).toBeDefined();
    expect(paymentRepository.save).toHaveBeenCalled();
    expect(result.status).toBe("declined");
    expect(result.amount).toBe(99);
    expect(result.orderId).toBe("1");
  });
});
