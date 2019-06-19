import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { KhoaHocService } from '../services/khoa-hoc.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOwnGuard implements CanActivate {
  constructor(private Routes: Router, private userS: KhoaHocService) { }
  flagGiangVien:boolean=false;
  canActivate(
    route: ActivatedRouteSnapshot,
  ) {
    let id = route.params.id;
    let mangKHid = route.params.mangKHid;
    const thongTinUser = JSON.parse(localStorage.getItem('userLogin'));
    if(thongTinUser){
      if (thongTinUser.data.level_id == 2) {
        let courseHt = JSON.parse(localStorage.getItem('ownCourse'));
        let modCourse = JSON.parse(localStorage.getItem('modCourse'))
        if (courseHt) {
          let checkCourse = courseHt.find(course => course.id == id)
          if (checkCourse) {
            this.flagGiangVien =true;
            return true;
          }
        }
        else {
          this.Routes.navigateByUrl('/chitietkhoahoc/' + id + '/' + mangKHid);
        }
        // check courseGv
        if(this.flagGiangVien==false){
          if (modCourse) {
          
            let checkCourseGv = modCourse.find(course => course.id == id)
            if (checkCourseGv) {
              
              return true;
            }
            else {
              this.Routes.navigateByUrl('/chitietkhoahoc/' + id + '/' + mangKHid);
            }
          }
          else {
            this.Routes.navigateByUrl('/chitietkhoahoc/' + id + '/' + mangKHid);
          }
        }
        
  
  
      }
      else if (thongTinUser.data.level_id == 3) {
        const myCourse = JSON.parse(localStorage.getItem('ownCourse'));
        if (myCourse) {
          let course = myCourse.find(course => course.id == id);
          if (course) {
            return true;
          }
          else {
            this.Routes.navigateByUrl('/chitietkhoahoc/' + id + '/' + mangKHid);
          }
        }
        else {
          this.Routes.navigateByUrl('/chitietkhoahoc/' + id + '/' + mangKHid);
  
  
        }
      }
    }
    else {
      Swal.fire({
        type:'question',
        title:'Bạn chưa đăng nhập',
        confirmButtonText:'Đăng nhập ngay',
        showCancelButton:true,

      }).then((res)=>{
        if(res.value){
          this.Routes.navigateByUrl('/login');
        }
      })
    }
    

  }
}
