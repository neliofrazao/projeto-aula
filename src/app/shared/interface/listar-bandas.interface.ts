import { ListarMembers } from './listar-members.interface';

export interface ListarBandas {
  id: number;
  name: string;
  category: number;
  members: Array<ListarMembers>;
  info: string;
}
