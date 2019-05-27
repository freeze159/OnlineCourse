import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-become-instructor',
  templateUrl: './become-instructor.component.html',
  styleUrls: ['./become-instructor.component.css']
})
export class BecomeInstructorComponent implements OnInit {

  constructor(private userS:UserService) { }
  isLinear
  isTeacher:boolean =false;
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
        input:'text',
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
          if(typeof res =='object'){
            
            Swal.fire({
              title: 'Mọi thứ đã xong!',          
              confirmButtonText: 'Bắt đầu đăng bài giảng của bạn!'
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
