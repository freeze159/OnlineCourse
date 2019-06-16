import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-instructor',
  templateUrl: './admin-instructor.component.html',
  styleUrls: ['./admin-instructor.component.css']
})
export class AdminInstructorComponent implements OnInit {
  danhSachGiangVien: any;
  dataTable: any;
  SoLuongHocVien: any;
  SoLuongKhoaHoc: any;
  iđUpdate: any;
  constructor(private userS: UserService, private chRef: ChangeDetectorRef,private route:Router) { }
  hinhAnh
  ten
  tomTat
  thongTinUser
  flag = false;
  ngOnInit() {
    this.userS.LayDanhSachGiangVien().subscribe((res: any) => {
      
      this.danhSachGiangVien = res.data;
      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  update(thongTin) {
    if (thongTin.TenGiangVien == '') {
      thongTin.TenGiangVien = this.ten;
    }
    if (thongTin.TomTat == '') {
      thongTin.TomTat = this.tomTat;
    }
    this.userS.UpdateGiangVien(this.iđUpdate, thongTin).subscribe(res => {
      Swal.fire('Thành Công', res.data, 'success');
      this.flag = false;
    });
  }
  getDataUpdate(id) {
    this.flag = true;
    this.iđUpdate = id;
    this.userS.LayChiTietGiangVien1(id).subscribe((res: any) => {
      this.ten = res.data.TenGiangVien;
      this.tomTat = res.data.TomTat;
    })
  }
  modal(id) {
    this.userS.LayChiTietGiangVien1(id).subscribe((res: any) => {
      this.thongTinUser = res.data
      this.hinhAnh = this.thongTinUser.HinhAnh;
      this.ten = this.thongTinUser.TenGiangVien;
      this.tomTat = this.thongTinUser.TomTat;
      this.SoLuongHocVien = this.thongTinUser.SoLuongHocVien;
      this.SoLuongKhoaHoc = this.thongTinUser.SoLuongKhoaHoc;

    })
  }
  delGiangVien(id) {

    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: "Không thể khôi phục khi đã xóa!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa ngay'
    }).then(res => {
      if (res.value) {


        this.userS.DelGiangVien(id).subscribe((res: any) => {
          if (typeof res == 'object') {
            Swal.fire(
              'Đã thành công!',
              res.data,
              'success'
            ).then(res => {
              this.userS.LayDanhSachGiangVien().subscribe((res: any) => {
      
                this.danhSachGiangVien = res.data;
                
                this.chRef.detectChanges();
                const table: any = $('table');
                this.dataTable = table.DataTable();
              })
            })
          }
          else{
            Swal.fire(
              'Không xóa được',
              res,
              'warning'
            )
          }

        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }
  xetTrangThai(state:string){
    if(state =='Hết hiệu lực'){
      return true;
    }
    else{
      return false;
    }

  }
  activeGiangVien(id){
    Swal.fire({
      title: 'Bạn chắc chắn chứ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có,nâng cấp'
    }).then(res => {
      if (res.value) {
        this.userS.UpGiangVien(id).subscribe((res: any) => {
          if(typeof res=='object'){
            Swal.fire(
              'Thành công!',
              res.data,
              'success'
            ).then(res => {
              this.userS.LayDanhSachGiangVien().subscribe((res: any) => {
      
                this.danhSachGiangVien = res.data;
                
                this.chRef.detectChanges();
                const table: any = $('table');
                this.dataTable = table.DataTable();
              })
            })
  
          }
          else {
            Swal.fire('Thất bại',res,'error');
          }
          
        }, err => { Swal.fire('Thất bại', err, 'error') })
      }

    })
  }

}
