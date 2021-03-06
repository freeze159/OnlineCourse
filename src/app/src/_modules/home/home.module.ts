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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CourseWatchComponent } from './course-watch/course-watch.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LearnNowComponent } from './learn-now/learn-now.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CheckOwnGuard } from '../../_core/guard/check-own.guard';
import { SearchResultComponent } from './search-result/search-result.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatStepperModule } from '@angular/material/stepper';
import { CourseInterestComponent } from './course-interest/course-interest.component';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'ng4-social-login';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { CheckCartGuard } from '../../_core/guard/check-cart.guard';
const config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('973343754841-e19qfr604imr2ibkp6ao92h68tdo5f5g.apps.googleusercontent.com')
  }
],false)
const homeRoutes: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'cart', component: CartComponent,canActivate:[CheckCartGuard] },
      { path: 'tro-thanh-giang-vien', component: BecomeInstructorComponent },
      { path: 'chitietkhoahoc/:id/:mangKHid', component: CourseDetailComponent },
      { path: 'user/:id', component: UserPageComponent },
      { path: 'danhmuckhoahoc', component: CourseViewComponent },
      { path: 'khoa-hoc-noi-bat', component: CourseViewComponent },
      { path: 'tag/:ten/:idTheLoai/:idMang', component: CourseViewComponent },
      { path: 'ket-qua/:keyword', component: SearchResultComponent },
      { path: 'kichhoat', component: EnterCodeComponent },
      
    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'learn-continue/:id/:mangKHid', component: CourseWatchComponent, canActivate: [CheckOwnGuard] },
  { path: 'reset-password', component: ForgotPassComponent },


]
@NgModule({
  declarations: [HomeTemplateComponent, LoginComponent, SignUpComponent, HomePageComponent,
    CartComponent, BecomeInstructorComponent, CourseListComponent, CourseDetailComponent,
    HeaderComponent, FooterComponent, CourseWatchComponent, UserPageComponent, LearnNowComponent,ForgotPassComponent, CourseViewComponent, SearchResultComponent, EnterCodeComponent, CourseInterestComponent, ForgotPassComponent],
  imports: [
    CommonModule, MDBBootstrapModule.forRoot(), FormsModule,
    NavbarModule, WavesModule, ButtonsModule, MatSidenavModule, MatCheckboxModule, MatButtonModule, HttpClientModule,
    RouterModule.forChild(homeRoutes), NgxPaginationModule, MatStepperModule,SocialLoginModule
  ],
  providers: [
    {provide:AuthServiceConfig,useFactory:provideConfig}
  ]
})
export class HomeModule { }
export function provideConfig(){
  return config;
}
