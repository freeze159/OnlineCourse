import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('frmDangNhap') frmDn: NgForm
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  // thongtin: any = {
  //   email: "admin@gmail.com",
  //   password: "123456"
  // }
  DangNhap(thongtin: any) {
    // console.log(this.thongtin);
    console.log(thongtin);
    this.userService.DangNhap(thongtin).subscribe(data => {
      if (typeof data == 'object') {
        const userLogin = JSON.stringify(data);
        localStorage.setItem('userLogin', userLogin);
        window.location.href='/';
      }
      else {
        alert(data);
      }
    })
  }
}
