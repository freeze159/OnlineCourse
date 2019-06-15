import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod-detail',
  templateUrl: './mod-detail.component.html',
  styleUrls: ['./mod-detail.component.css']
})
export class ModDetailComponent implements OnInit {

  constructor(private userService: UserService,private khoaHocService:KhoaHocService,private route:Router) { }
  p:number=1;
  idGiangVien: number;
  thongTin: any;
  hinhAnh: string;
  soLuongHocVien: number = 0;
  soLuongKhoaHoc: number = 0;
  tenGiangVien: string;
  tomTat: string;
  myCourse:any;
  ngOnInit() {
    this.thongTin = JSON.parse(localStorage.getItem('gv_log'));
    this.idGiangVien=this.thongTin.id;
    this.hinhAnh = this.thongTin.HinhAnh;
    this.soLuongHocVien = this.thongTin.SoLuongHocVien;
    this.soLuongKhoaHoc = this.thongTin.SoLuongKhoaHoc;
    this.tenGiangVien = this.thongTin.TenGiangVien;
    this.tomTat = this.thongTin.TomTat;
    // Lay khoa hoc cho duyte
    
  }
  update(thongTin:any){
    if(thongTin.TenGiangVien == ''){
      thongTin.TenGiangVien = this.tenGiangVien;
    }
    if(thongTin.TomTat == ''){
      thongTin.TomTat = this.tomTat;
    }
    let thongTinUpdate ={
      'TenGiangVien':thongTin.TenGiangVien,
      'TomTat':thongTin.TomTat
    }
    this.userService.UpdateGiangVien(this.idGiangVien,thongTinUpdate).subscribe((res:any)=>{
      Swal.fire('Thành Công',res.data,'success').then(res => {this.route.navigateByUrl('/instructor/about')});
      
    })
  }
  choDuyet(){
    this.khoaHocService.LayKhoaHocChoDuyet(this.idGiangVien).subscribe((res:any)=>{
        this.myCourse = res.data;
    })
  }
}
