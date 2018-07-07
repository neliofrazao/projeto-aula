import { ListarBandasModule } from './listar-bandas.module';

describe('ListarBandasModule', () => {
  let listarBandasModule: ListarBandasModule;

  beforeEach(() => {
    listarBandasModule = new ListarBandasModule();
  });

  it('should create an instance', () => {
    expect(listarBandasModule).toBeTruthy();
  });
});
