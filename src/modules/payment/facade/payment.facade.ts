import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";
import { PaymentFacadeInterface, ProcessPaymentFacadeInputDto, ProcessPaymentFacadeOutputDto } from "./payment.facade.interface";

export interface UseCasesProps {
  processPayment: UseCaseInterface;
}

export class PaymentFacade implements PaymentFacadeInterface {
  private _processPayment: UseCaseInterface;

  constructor(useCaseProps: UseCasesProps) {
    this._processPayment = useCaseProps.processPayment;
  }

  process(input: ProcessPaymentFacadeInputDto): Promise<ProcessPaymentFacadeOutputDto> {
    return this._processPayment.execute(input);
  }
}
