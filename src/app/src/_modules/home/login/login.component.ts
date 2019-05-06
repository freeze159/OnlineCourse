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
    // console.log(thongtin);
    this.userService.DangNhap(thongtin).subscribe((data:any) => {
      if (typeof data == 'object') {
        const userLogin = JSON.stringify(data);
        const apiToken = JSON.stringify(data.data.api_token);
        localStorage.setItem('userLogin', userLogin);
        
        localStorage.setItem('tokenbearer',apiToken);
        const token = localStorage.getItem('tokenbearer'); 
        // console.log(JSON.parse(token));
        
        this.userService.KhoaHocCuaToi().subscribe((res:any)=>{
          console.log(res.data);
          const ownCouse = JSON.stringify(res.data)
          localStorage.setItem('ownCourse',ownCouse);
          window.location.href='/';
        })
      }
      else {
        alert(data);
      }
    })
    
    
    
  }
}
