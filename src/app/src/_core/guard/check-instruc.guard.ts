import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInstrucGuard implements CanActivate {
  constructor(private Routes: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userLogin')
    ) {
      let data = JSON.parse(localStorage.getItem('userLogin'));
      if (data.data.level_id == '2' || data.data.level_id == '1') {
        return true;
      }
      else {
        this.Routes.navigateByUrl('notfound')
      }
    }
    else {
      this.Routes.navigateByUrl('notfound')

    }
    return true;

  }
}
