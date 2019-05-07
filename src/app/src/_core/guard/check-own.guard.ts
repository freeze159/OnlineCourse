import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CheckOwnGuard implements CanActivate {
  constructor(private Routes: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
  ) {
    let id = route.params.id;
    let mangKHid =  route.params.mangKHid;
    console.log(route.params);
    const myCourse = JSON.parse(localStorage.getItem('ownCourse'));
    if(myCourse){
      let course = myCourse.find(course => course.id == id);
      if (course) {       
        return true;
      }
      else {
        this.Routes.navigateByUrl('/chitietkhoahoc/'+id+'/'+mangKHid);
        return true;
      }
    }
    else{
      this.Routes.navigateByUrl('/chitietkhoahoc/'+id+'/'+mangKHid);
    }
    

  }
}