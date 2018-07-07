import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticaRota implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean> | boolean {
    alert('Você não tem acesso a essa funcionalide');

    console.log('Você não tem acesso a essa Funcionalidade');
    this.verificarAcesso();
    return false;
  }

  private verificarAcesso() {
    this.router.navigate(['/bandas']);
  }

}
