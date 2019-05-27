import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModTemplateComponent } from './mod-template/mod-template.component';
import { ModPageComponent } from './mod-page/mod-page.component';
import { ModHeaderComponent } from './mod-header/mod-header.component';
import { ModDetailComponent } from './mod-detail/mod-detail.component';
import { ModCourseComponent } from './mod-course/mod-course.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModHistoryComponent } from './mod-history/mod-history.component';
import { ModCreateComponent } from './mod-create/mod-create.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

const modRoutes: Routes = [
  {
    path: '', component: ModTemplateComponent, children: [
      { path: '', component: ModPageComponent },
      { path: 'home', component: ModPageComponent },
      { path: 'about', component: ModDetailComponent },
      { path: 'mycourse', component: ModCourseComponent },
      { path: 'history', component: ModHistoryComponent },
      { path: 'create', component: ModCreateComponent },
      { path: 'home/create', component: ModCreateComponent }
    ]
  },




]
@NgModule({
  declarations: [ModPageComponent, ModTemplateComponent, ModHeaderComponent, ModDetailComponent, ModCourseComponent, ModHistoryComponent, ModCreateComponent],
  imports: [
    CommonModule, RouterModule.forChild(modRoutes), NgxPaginationModule, MatInputModule, MatFormFieldModule, MatStepperModule, FormsModule, MatButtonModule, MatSelectModule
  ]
})

export class ModModule { }
