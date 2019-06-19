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
import { FormsModule,ReactiveFormsModule    } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ModCreateLectureComponent } from './mod-create-lecture/mod-create-lecture.component';
import { UpdateComponent } from './mod-create-lecture/update/update.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import {MatRadioModule} from '@angular/material/radio';
import { ModBankingComponent } from './mod-banking/mod-banking.component'; 
const modRoutes: Routes = [
  {
    path: '', component: ModTemplateComponent, children: [
      { path: '', component: ModPageComponent },
      { path: 'home', component: ModPageComponent },
      { path: 'about', component: ModDetailComponent },
      { path: 'mycourse', component: ModCourseComponent },
      { path: 'history', component: ModHistoryComponent },
      { path: 'create', component: ModCreateComponent },
      { path: 'bank', component: ModBankingComponent },
      { path: 'home/create', component: ModCreateComponent },
      { path: 'lecture/:id/:mangKhoaHoc', component: ModCreateLectureComponent },
      { path: 'lecture/:id/:mangKhoaHoc/update', component: UpdateComponent }
    ]
  },




]
@NgModule({
  declarations: [ModPageComponent, ModTemplateComponent, ModHeaderComponent, ModDetailComponent, ModCourseComponent, ModHistoryComponent, ModCreateComponent, ModCreateLectureComponent, UpdateComponent, ModBankingComponent],
  imports: [
    CommonModule, RouterModule.forChild(modRoutes), NgxPaginationModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), MatInputModule, MatFormFieldModule, MatStepperModule, FormsModule,ReactiveFormsModule, MatButtonModule, MatSelectModule,MatRadioModule
  ]
})

export class ModModule { }
