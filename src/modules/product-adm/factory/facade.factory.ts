import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductRepository } from "../repository/product.repository";
import { AddProduct } from "../usecase/add-product/add-product";

export class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();
    const addProduct = new AddProduct(productRepository);
    const productFacade = new ProductAdmFacade({
      addProduct,
      checkStockProduct: undefined
    });

    return productFacade;
  }
}
