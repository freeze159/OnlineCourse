import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
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
  constructor(private userS: UserService, private chRef: ChangeDetectorRef) { }
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
              'Đã xóa!',
              'Giảng viên đã được xóa',
              'success'
            ).then(res => {
              let indexDel = this.danhSachGiangVien.findIndex(x => x.id == id);
              this.danhSachGiangVien.splice(indexDel, 1);
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

}
