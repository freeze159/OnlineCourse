import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './src/_modules/home/home.module';
import { AdminModule } from './src/_modules/admin/admin.module';
import { ModModule } from './src/_modules/mod/mod.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';
import { CheckAdminGuard } from './src/_core/guard/check-admin.guard';
import { NotfoundComponent } from './src/_modules/notfound/notfound.component';
import { CheckInstrucGuard } from './src/_core/guard/check-instruc.guard';

const appRoute:Routes = [
  {path:'',loadChildren:()=>HomeModule},
  {path:'home',loadChildren:() => HomeModule},
  {path:'admin',loadChildren:() => AdminModule,canActivate: [CheckAdminGuard]},
  {path:'instructor',loadChildren:()=>ModModule,canActivate: [CheckInstrucGuard]},
  {path:'notfound',component:NotfoundComponent},
  {path:'**',component:NotfoundComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute,{scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule, MatCheckboxModule, MatButtonModule
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

