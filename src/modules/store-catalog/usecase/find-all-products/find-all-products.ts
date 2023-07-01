import { UseCaseInterface } from "../../../@shared/usecase/usecase.interface";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindAllProductOutputDto } from "./find-all-products.dto";

export class FindAllProducts implements UseCaseInterface {
  constructor(private _productRepository: ProductGateway) { }

  async execute(): Promise<FindAllProductOutputDto> {
    const products = await this._productRepository.findAll();
    return {
      products: products.map(product => ({
        id: product.id.id,
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice
      }))
    };
  }
}
