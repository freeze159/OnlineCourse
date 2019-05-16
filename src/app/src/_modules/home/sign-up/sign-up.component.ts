import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/src/_core/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService) { }
  @ViewChild('frmDangKy') frmDangKy:NgForm;
  ngOnInit() {
  }
  DangKy(info:any){
    
    console.log(info);
    info.HinhAnh ='';
    this.userService.DangKy(info).subscribe(data=>{

      console.log(data);
      window.location.href='/';
    })
  }
}
