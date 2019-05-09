import { Component, OnInit, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { NgForm } from '@angular/forms';

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
    console.log(value.Code);
  }

}
