import { Sequelize } from "sequelize-typescript";
import { ClientAdmFacadeFactory } from "../factory/facade.factory";
import { ClientModel } from "../repository/client.model";

describe("Product adm facade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true }
    });

    sequelize.addModels([ClientModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a client", async () => {
    const clientFacade = ClientAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Client 1",
      email: "client1@example.com",
      address: "Address 1"
    };

    await clientFacade.addClient(input);

    const { dataValues: client } = await ClientModel.findOne({ where: { id: "1" } });

    expect(client).toBeDefined();
    expect(client.id).toBe(input.id);
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });

  it("should find a client", async () => {
    const clientFacade = ClientAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Client 1",
      email: "client1@example.com",
      address: "Address 1"
    };

    await clientFacade.addClient(input);

    const result = await clientFacade.findClient({ id: "1" });

    expect(result).toBeDefined();
    expect(result.id).toBe(input.id);
    expect(result.name).toBe(input.name);
    expect(result.email).toBe(input.email);
    expect(result.address).toBe(input.address);
  });
});
