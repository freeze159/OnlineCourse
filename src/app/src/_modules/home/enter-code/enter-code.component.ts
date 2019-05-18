import { Component, OnInit, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/src/_core/services/user.service';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {
  flagLoggin:boolean=true
  constructor(private khoaHocService:KhoaHocService,private userService:UserService) { }
  @ViewChild('frmCode') frmCode:NgForm
  ngOnInit() {
    if(localStorage.getItem('userLogin')){
      this.flagLoggin=false;
    }
    // this.khoaHocService.KichHoat().subscribe((res.))

    
  }
  submitCode(value:any){
    const data = {
      code:value.Code
    };
    
    this.khoaHocService.KichHoat(data).subscribe((res:any)=>{
      if(typeof res=='object'){
        Swal.fire('Thông báo','Bạn đã mỡ thành công khóa học',"success");
        const token = localStorage.getItem('tokenbearer'); 
        this.userService.KhoaHocCuaToi().subscribe((res:any)=>{
          const ownCouse = JSON.stringify(res.data)
          localStorage.setItem('ownCourse',ownCouse);
          window.location.href='/';
        })
      }
      else{
        Swal.fire('Error','Mã khóa học sai',"error");
      }
    })
  }

}
