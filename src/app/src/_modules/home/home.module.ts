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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { CourseDetailGuestComponent } from './course-detail-guest/course-detail-guest.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CourseWatchComponent } from './course-watch/course-watch.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'cart', component: CartComponent },
      { path: 'instructor', component: BecomeInstructorComponent },
      { path: 'chitietkhoahoc/:id/:mangKHid', component: CourseDetailComponent },
      { path: 'chitietkhoahoc/guest/:id', component: CourseDetailGuestComponent }

    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'watch', component: CourseWatchComponent }



]
@NgModule({
  declarations: [HomeTemplateComponent, LoginComponent, SignUpComponent, HomePageComponent,
    CartComponent, BecomeInstructorComponent, CourseListComponent, CourseDetailComponent,
     CourseDetailGuestComponent, HeaderComponent, FooterComponent, CourseWatchComponent],
  imports: [
    CommonModule, RouterModule.forChild(homeRoutes), MDBBootstrapModule.forRoot(), FormsModule,
    NavbarModule, WavesModule, ButtonsModule, MatSidenavModule, MatCheckboxModule, MatButtonModule
  ]
})
export class HomeModule { }
