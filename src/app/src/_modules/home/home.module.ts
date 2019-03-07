import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { BecomeInstructorComponent } from './become-instructor/become-instructor.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CourseComponent } from './course-list/course/course.component';


const homeRoutes:Routes=[
  {
    path:'',component:HomeTemplateComponent,children:[
      {path:'',component:HomePageComponent},
      {path:'cart',component:CartComponent},
      {path:'instructor',component:BecomeInstructorComponent},

    ]
  }
]
@NgModule({
  declarations: [HomeTemplateComponent, LoginComponent, SignUpComponent, HomePageComponent, CartComponent, BecomeInstructorComponent, CourseListComponent, CourseDetailComponent, CourseComponent,],
  imports: [
    CommonModule,RouterModule.forChild(homeRoutes),OwlModule
  ]
})
export class HomeModule { }
