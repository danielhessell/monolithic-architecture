import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Product } from "../domain/product.entity";
import { ProductGateway } from "../gateway/product.gateway";
import { ProductModel } from "./product.model";

export class ProductRepository implements ProductGateway {
  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();

    return products.map(({ dataValues: product }) => new Product({
      id: new Id(product.id),
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice
    }));
  }

  async find(id: string): Promise<Product> {
    const { dataValues: product } = await ProductModel.findOne({ where: { id } });

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return new Product({
      id: new Id(product.id),
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    });
  }
}
