import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './src/_modules/home/home.module';
import { AdminModule } from './src/_modules/admin/admin.module';
import { ModModule } from './src/_modules/mod/mod.module';
import { HttpClientModule } from '@angular/common/http';




const appRoute:Routes = [
  {path:'home',loadChildren:() => HomeModule},
  {path:'admin',loadChildren:() => AdminModule},
  {path:'mod',loadChildren:()=>ModModule},
  {path:'',loadChildren:()=>HomeModule},
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
