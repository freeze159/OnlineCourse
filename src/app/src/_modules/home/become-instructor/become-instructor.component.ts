import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-become-instructor',
  templateUrl: './become-instructor.component.html',
  styleUrls: ['./become-instructor.component.css']
})
export class BecomeInstructorComponent implements OnInit {

  constructor(private userS:UserService,private route:Router) { }
  isLinear
  isTeacher:boolean = false;
  ngOnInit() {
    this.userS.LayChiTietGiangVien().subscribe(res =>{
      console.log(res)
      if(typeof res == 'object'){
        this.isTeacher = true;
      }
    })
    
  }
  upgrade(){
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Tóm tắt',
        text: 'Tóm tắt thông tin của bạn',
        input:'textarea',
        inputValidator:(value) =>{
          if(!value){
            return 'Bạn cần phải viết điều gì đó'
          }
          if(value.length<10){
            return 'Nội dung phải hơn 10 ký tự'
          }
        }
      },
      {
        title: 'Tên Giảng Viên',
        text: 'Điền tên bạn',
        inputValidator:(value) =>{
          if(!value){
            return 'Bạn cần phải viết tên bạn'
          }
          if(value.length<5){
            return 'Nội dung phải hơn 5 ký tự'
          }
          if(value.length>100){
            return 'Nội dung quá dài'
          }
        }
      },
    ]).then((result) => {
      if (result.value) {
        let thongTin = {
          TomTat:result.value[0],
          TenGiangVien:result.value[1]
        }
        this.userS.TroThanhGiangVien(thongTin).subscribe((res:any)=>{
          const userInfo = JSON.parse(localStorage.getItem('userLogin'));
          let userInfoNew = userInfo;
          if(typeof res =='object'){
            let userInfoNew = userInfo;
            userInfoNew.data.level_id = '2';
            localStorage.setItem('userLogin',JSON.stringify(userInfoNew));
            Swal.fire({
              title: 'Mọi thứ đã xong!',          
              confirmButtonText: 'Bắt đầu đăng bài giảng của bạn!'
            }).then((res)=>{
              this.route.navigateByUrl('/instructor');
            })
          }
          else{
            
            Swal.fire({
              type:"error",
              title: res,          
              
            })
          }
        })

        
      }
    })
  }

}
