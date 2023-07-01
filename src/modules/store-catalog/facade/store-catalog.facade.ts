import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";
import { FindAllProducts } from "../usecase/find-all-products/find-all-products";
import { FindProduct } from "../usecase/find-product/find-product";
import { FindAllStoreCatalogFacadeOutputDto, FindStoreCatalogFacadeInputDto, FindStoreCatalogFacadeOutputDto, StoreCatalogFacadeInterface } from "./store-catalog.facade.interface";

export interface UseCaseProps {
  findProduct: FindProduct;
  findAllProducts: FindAllProducts;
}

export class StoreCatalogFacade implements StoreCatalogFacadeInterface {
  private _findProduct: UseCaseInterface;
  private _findAllProducts: UseCaseInterface;

  constructor(useCaseProps: UseCaseProps) {
    this._findProduct = useCaseProps.findProduct;
    this._findAllProducts = useCaseProps.findAllProducts;
  }

  find(input: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
    return this._findProduct.execute(input);
  }

  findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
    return this._findAllProducts.execute();
  }
}
