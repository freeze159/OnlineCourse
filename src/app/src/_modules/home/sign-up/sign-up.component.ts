import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService,private route:Router) { }
  @ViewChild('frmDangKy') frmDangKy: NgForm;
  ngOnInit() {
  }
  DangKy(info: any) {
    info.HinhAnh = '';
    // console.log(info.NgaySinh);
    // let str=info.NgaySinh.split("-").reverse().join("-");  
    // console.log(str)
    // info.NgaySinh=str;
    
    this.userService.DangKy(info).subscribe(res => {
        Swal.fire('Thành Công','Email xác nhận đã được gửi','success');
        this.route.navigateByUrl('/');
      },err =>{
        Swal.fire('Thất bại',err.error.errors.email[0],'error');
      })
  }
  kiemTraMatKhau(reMatKhau: string, matKhau: string): boolean {
    if (reMatKhau !== matKhau) {

      // tạo ra 1 lỗi cho form
      this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': true });
      return true;
    }
    this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': false });
    return false;
  }
}
