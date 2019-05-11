import { Component, OnInit, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {

  constructor(private khoaHocService:KhoaHocService) { }
  @ViewChild('frmCode') frmCode:NgForm
  ngOnInit() {
    
    // this.khoaHocService.KichHoat().subscribe((res.))

    
  }
  submitCode(value:any){
    const data = {
      code:value.Code
    };
    
    this.khoaHocService.KichHoat(data).subscribe((res:any)=>{
      if(typeof res=='object'){
        Swal.fire('Thông báo','Bạn đã mỡ thành công khóa học',"success");
        localStorage.clear();
        window.location.href='/login';
      }
      else{
        Swal.fire('Error','Mã khóa học sai',"error");
      }
    })
  }

}
