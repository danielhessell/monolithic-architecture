import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductRepository } from "../repository/product.repository";
import { AddProduct } from "../usecase/add-product/add-product";
import { CheckStock } from "../usecase/check-stock/check-stock";

export class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();
    const addProduct = new AddProduct(productRepository);
    const checkStock = new CheckStock(productRepository);
    const productFacade = new ProductAdmFacade({
      addProduct,
      checkStockProduct: checkStock
    });

    return productFacade;
  }
}
