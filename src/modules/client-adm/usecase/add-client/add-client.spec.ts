import { AddClient } from "./add-client";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn()
  };
};

describe("Add client usecase unit test", () => {
  it("should add a client", async () => {
    const repository = MockRepository();
    const usecase = new AddClient(repository);

    const input = {
      name: "Client 1",
      email: "client@example.com",
      address: "Address 1"
    };

    const result = await usecase.execute(input);

    expect(repository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toBe(input.name);
    expect(result.email).toBe(input.email);
    expect(result.address).toBe(input.address);
  });
});
