import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {

  constructor(private userService:UserService) { }
  @ViewChild('frmDangKy') frmDangKy: NgForm;
  ngOnInit() {
  }
  DangKy(info: any) {
    info.HinhAnh = '';
    
    let str=info.NgaySinh.split("-").reverse().join("-");  
    
    info.NgaySinh=str;
    console.log(info.NgaySinh)
    this.userService.DangKy(info).subscribe(
      res => {
        Swal.fire('Thành Công','Email xác nhận đã được gửi','success');
        window.location.href='/';
      },
      err =>{
        Swal.fire('Thất bại',err.error.errors.email[0],'error');
        
      } 
      
      
      
    )
  }
  kiemTraMatKhau(reMatKhau: string, matKhau: string): boolean {
    console.log(reMatKhau  +   matKhau)
    if (reMatKhau !== matKhau) {

      // tạo ra 1 lỗi cho form
      this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': true });
      return true;
    }
    console.log(this.frmDangKy.errors);
    this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': false });
    return false;
  }

}
