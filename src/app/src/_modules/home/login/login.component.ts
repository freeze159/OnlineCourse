import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService, SocialUser, GoogleLoginProvider } from 'ng4-social-login'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('frmDangNhap') frmDn: NgForm
  public user: any = SocialUser;
  constructor(private userService: UserService, private socialAuthService: AuthService, private route: Router) { }
  ngOnInit() {
  }

  DangNhap(thongtin: any) {

    this.userService.DangNhap(thongtin).subscribe((data: any) => {
      if (typeof data == 'object') {
        const userLogin = JSON.stringify(data);
        const apiToken = JSON.stringify(data.data.api_token);
        localStorage.setItem('userLogin', userLogin);
        const userLv = data.data.level_id;
        localStorage.setItem('tokenbearer', apiToken);
        const token = localStorage.getItem('tokenbearer');
        this.userService.KhoaHocCuaToi().subscribe((res: any) => {
          const ownCouse = JSON.stringify(res.data)
          localStorage.setItem('ownCourse', ownCouse);
          Swal.fire('Thành công', 'Bạn đã đăng nhập thành công', "success").then(res => {

            if(userLv == 1){
              this.route.navigateByUrl('/admin');
            }
            if(userLv == 2){
              this.route.navigateByUrl('/instructor');
            }
            if(userLv == 3){
              this.route.navigateByUrl('/');
            }
            
           
          })
        });


      }
      else {
        Swal.fire('Thất bại', data, "error");
      }
    })

  }
  logGoogle(event) {


    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;      
      let dataSend = {
        name: this.user.name,
        email: this.user.email,
        HinhAnh: this.user.photoUrl,
        provider:this.user.provider,
        provider_id:this.user.id
      }
      this.userService.LoginGoogle(dataSend).subscribe((data:any)=>{
        if (typeof data == 'object') {
          const userLogin = JSON.stringify(data);
          const apiToken = JSON.stringify(data.data.api_token);
          localStorage.setItem('userLogin', userLogin);
          
          localStorage.setItem('tokenbearer', apiToken);
          const token = localStorage.getItem('tokenbearer');
          this.userService.KhoaHocCuaToi().subscribe((res: any) => {
            const ownCouse = JSON.stringify(res.data)
            localStorage.setItem('ownCourse', ownCouse);
            Swal.fire('Thành công', 'Bạn đã đăng nhập thành công', "success").then(res => {
  
              this.route.navigateByUrl('/');
            })
          });
  
  
        }
        else {
          Swal.fire('Thất bại', data, "error");
        }
      })
    }).catch(err => {
    })




  }
}
