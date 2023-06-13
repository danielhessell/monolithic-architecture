import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";
import {
  AddProductFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
  ProductAdmFacadeInterface
} from "./product-adm.facade.interface";

export interface UseCasesProps {
  addProduct: UseCaseInterface;
  checkStockProduct: UseCaseInterface;
}

export class ProductAdmFacade implements ProductAdmFacadeInterface {
  private _addProduct: UseCaseInterface;
  private _checkStock: UseCaseInterface;

  constructor(useCaseProps: UseCasesProps) {
    this._addProduct = useCaseProps.addProduct;
    this._checkStock = useCaseProps.checkStockProduct;
  }

  addProduct(input: AddProductFacadeInputDto): Promise<void> {
    return this._addProduct.execute(input);
  }

  checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
    return this._checkStock.execute(input);
  }
}
