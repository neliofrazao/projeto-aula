import { TestBed, inject } from '@angular/core/testing';

import { ListarBandasService } from './listar-bandas.service';

describe('ListarBandasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarBandasService]
    });
  });

  it('should be created', inject([ListarBandasService], (service: ListarBandasService) => {
    expect(service).toBeTruthy();
  }));
});
