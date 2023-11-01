import { Sequelize } from "sequelize-typescript";
import { TransactionModel } from "../repository/transaction.model";
import { PaymentFacadeFactory } from "../factory/facade.factory";

describe("Payment facade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true }
    });

    sequelize.addModels([TransactionModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should process a payment", async () => {
    const input = {
      orderId: "1",
      amount: 100,
    };

    const paymentFacade = PaymentFacadeFactory.create();
    const result = await paymentFacade.process(input);

    expect(result.transactionId).toBeDefined();
    expect(result.status).toBe("approved");
    expect(result.amount).toBe(100);
    expect(result.orderId).toBe("1");
  });
});
