import { BandaDetalheModule } from './banda-detalhe.module';

describe('BandaDetalheModule', () => {
  let bandaDetalheModule: BandaDetalheModule;

  beforeEach(() => {
    bandaDetalheModule = new BandaDetalheModule();
  });

  it('should create an instance', () => {
    expect(bandaDetalheModule).toBeTruthy();
  });
});
