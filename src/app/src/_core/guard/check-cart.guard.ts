import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckCartGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(sessionStorage.getItem('cart')){
      return true;
    }
    else {
      Swal.fire({
        type:'warning',
        showCancelButton:true,
        title:'Bạn chưa chọn khóa học',
        confirmButtonText:'Xem thêm khóa học',
        confirmButtonColor:'green'
      }).then((res)=>{
        if(res.value){
          this.route.navigateByUrl('/khoa-hoc-noi-bat');
        }
      });
      return false
    }
  }
}
