import { StoreCatalogFacade } from "../facade/store-catalog.facade";
import { ProductRepository } from "../repository/product.repository";
import { FindAllProducts } from "../usecase/find-all-products/find-all-products";
import { FindProduct } from "../usecase/find-product/find-product";

export class StoreCatalogFacadeFactory {
  static create(): StoreCatalogFacade {
    const productRepository = new ProductRepository();
    const findProduct = new FindProduct(productRepository);
    const findAllProducts = new FindAllProducts(productRepository);
    const storeCatalogFacade = new StoreCatalogFacade({
      findProduct,
      findAllProducts
    });

    return storeCatalogFacade;
  }
}
