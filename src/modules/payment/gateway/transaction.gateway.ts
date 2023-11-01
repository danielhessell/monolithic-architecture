import { Transaction } from "../domain/transaction";

export interface TransactionGateway {
  save(input: Transaction): Promise<Transaction>;
}
