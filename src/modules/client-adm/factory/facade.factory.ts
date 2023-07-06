import { ClientAdmFacade } from "../facade/client-adm.facade";
import { ClientRepository } from "../repository/client.repository";
import { AddClient } from "../usecase/add-client/add-client";
import { FindClient } from "../usecase/find-client/find-client";

export class ClientAdmFacadeFactory {
  static create() {
    const clientRepository = new ClientRepository();
    const addClient = new AddClient(clientRepository);
    const findClient = new FindClient(clientRepository);
    const clientFacade = new ClientAdmFacade({
      addClient,
      findClient
    });

    return clientFacade;
  }
}
