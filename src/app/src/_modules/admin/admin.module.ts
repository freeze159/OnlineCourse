import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminTheLoaiComponent } from './admin-the-loai/admin-the-loai.component';
import { AdminMangKhoahocComponent } from './admin-mang-khoahoc/admin-mang-khoahoc.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule    } from '@angular/forms';
import { AdminCodeComponent } from './admin-code/admin-code.component';
import { AdminCodeAddComponent } from './admin-code/admin-code-add/admin-code-add.component';
import { AdminMangThemComponent } from './admin-mang-khoahoc/admin-mang-them/admin-mang-them.component';
import { AdminTheloaiAddComponent } from './admin-the-loai/admin-theloai-add/admin-theloai-add.component';
import { AdminKhoahocComponent } from './admin-khoahoc/admin-khoahoc.component';
import { AdminKhoahocAddComponent } from './admin-khoahoc/admin-khoahoc-add/admin-khoahoc-add.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AdminDuyetComponent } from './admin-duyet/admin-duyet.component';
import { AdminBaiGiangComponent } from './admin-bai-giang/admin-bai-giang.component';
import { AdminBaigiangAddComponent } from './admin-bai-giang/admin-baigiang-add/admin-baigiang-add.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminInstructorComponent } from './admin-instructor/admin-instructor.component';
import { AdminUserAddComponent } from './admin-user/admin-user-add/admin-user-add.component';
import { AdminInstructorAddComponent } from './admin-instructor/admin-instructor-add/admin-instructor-add.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminTemplateComponent, children: [
      {path: 'the-loai', component: AdminTheLoaiComponent},
      {path: 'the-loai-add', component: AdminTheloaiAddComponent},
      {path: 'the-loai/:id/nhom-khoa-hoc', component: AdminMangKhoahocComponent},
      {path: 'mang-khoa-hoc', component: AdminMangKhoahocComponent},
      {path: 'the-loai/:id/nhom-khoa-hoc/:idMang/khoa-hoc', component: AdminKhoahocComponent},
      {path: 'mang-khoa-hoc/:idMang/khoa-hoc', component: AdminKhoahocComponent},
      {path: 'mang-khoa-hoc-add', component: AdminMangThemComponent},
      {path: 'code', component: AdminCodeComponent},
      {path: 'code-add', component: AdminCodeAddComponent,},
      {path: 'khoa-hoc', component: AdminKhoahocComponent},
      {path: 'khoa-hoc-add', component:AdminKhoahocAddComponent},
      {path: 'bai-giang', component:AdminBaiGiangComponent},
      // {path: 'bai-giang-add', component:AdminBaigiangAddComponent},
      {path: 'the-loai/:id/nhom-khoa-hoc/:idMang/khoa-hoc/:idKhoaHoc/bai-giang', component: AdminBaiGiangComponent},

      {path: 'duyet-khoa-hoc', component:AdminDuyetComponent},
      {path: 'nguoi-dung', component:AdminUserComponent},
      {path: 'nguoi-dung-them', component:AdminUserAddComponent},
      {path: 'giang-vien', component:AdminInstructorComponent},
      {path: 'giang-vien-them', component:AdminInstructorAddComponent},
      {path: '', component: AdminDashboardComponent},
    ]
    
  },
]
@NgModule({
  
  declarations: [AdminTemplateComponent,AdminTheLoaiComponent,AdminUserAddComponent,AdminInstructorAddComponent,AdminMangKhoahocComponent, AdminCodeComponent, AdminCodeAddComponent, AdminMangThemComponent, AdminTheloaiAddComponent, AdminKhoahocComponent,AdminKhoahocAddComponent, AdminDuyetComponent, AdminBaiGiangComponent, AdminBaigiangAddComponent, AdminUserComponent, AdminInstructorComponent, AdminDashboardComponent],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(adminRoutes),MatStepperModule,MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule,MatSelectModule
  ]
})
export class AdminModule { }
