import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private userS:UserService) { }

  ngOnInit() {
  }
  reset(thongTin){
    this.userS.ResetPass(thongTin.email).subscribe(res=>{
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success');

      }
      else{
        Swal.fire('Thất bại',res,'error');
      }
      
    })
  }
}
