import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";
import { AddClientFacadeInputDto, ClientAdmFacadeInterface, FindClientFacadeInputDto, FindClientFacadeOutputDto } from "./client-adm.facade.interface";

export interface UseCaseProps {
  addClient: UseCaseInterface;
  findClient: UseCaseInterface;
}

export class ClientAdmFacade implements ClientAdmFacadeInterface {
  private _addClient: UseCaseInterface;
  private _findClient: UseCaseInterface;

  constructor(usecaseProps: UseCaseProps) {
    this._addClient = usecaseProps.addClient;
    this._findClient = usecaseProps.findClient;
  }

  addClient(input: AddClientFacadeInputDto): Promise<void> {
    return this._addClient.execute(input);
  }

  findClient(input: FindClientFacadeInputDto): Promise<FindClientFacadeOutputDto> {
    return this._findClient.execute(input);
  }
}
