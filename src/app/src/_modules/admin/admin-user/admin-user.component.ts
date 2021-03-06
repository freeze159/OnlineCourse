import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/src/_core/models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  @ViewChild('frmUpdate') frmUpdate: NgForm;
  @ViewChild('NgaySinh') dateB: ElementRef;
  fileData: File = null;
  checkedButton = false;
  checkPass: any = "";
  idUser: number;
  selectedFile: File;
  hinhAnh: string;
  ten: string;
  birth: string;
  phone: string;
  email: string;
  thongTinUser: User;
  bill: Object
  //
  flag = false;
  danhSachUser: any;
  dataTable: any;
  constructor(private userS: UserService, private chRef: ChangeDetectorRef,private route:Router) { }

  ngOnInit() {

    this.userS.LayDanhSachUser().subscribe((res: any) => {
      this.danhSachUser = res.data;
      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  getDataUpdate(id) {
    this.userS.XemChiTietUser(id).subscribe((res: any) => {

      this.thongTinUser = res.data;
      this.hinhAnh = this.thongTinUser.HinhAnh;
      this.ten = this.thongTinUser.name;
      this.birth = this.thongTinUser.NgaySinh;
      this.phone = this.thongTinUser.SoDienThoai;
      this.email = this.thongTinUser.email;
      this.idUser = id;
      console.log(this.birth)
    })
    this.flag = true;
    setTimeout(() => {
      let checkbox: any = document.getElementById('CheckPassword');
      checkbox.checked = false;
      
    }, 600);



  }
  modal(id) {
    this.userS.XemChiTietUser(id).subscribe((res: any) => {

      this.thongTinUser = res.data;
      this.hinhAnh = this.thongTinUser.HinhAnh;
      this.ten = this.thongTinUser.name;
      this.birth = this.thongTinUser.NgaySinh;
      this.phone = this.thongTinUser.SoDienThoai;
      this.email = this.thongTinUser.email;
      this.idUser = id;
    })
  }
  update(thongtin: any) {
    if (this.checkedButton == false) {
      // console.log(thongtin)
      if (thongtin.name == '') {
        thongtin.name = this.ten
      }
      if (thongtin.NgaySinh == '') {
        thongtin.NgaySinh = this.birth;
      }
      if (thongtin.SoDienThoai == '') {
        thongtin.SoDienThoai = this.phone;
      }
      let thongTinUpdate = {
        "name": thongtin.name,
        "NgaySinh": thongtin.NgaySinh,
        "SoDienThoai": thongtin.SoDienThoai,

      }
      this.userS.Update(this.idUser, thongTinUpdate).subscribe((res: any) => {
        if (typeof res == 'object') {
          Swal.fire('Success', 'Bạn đã cập nhật thành công', "success")
            .then(res => {
              this.flag = false;

            })
        }
        else {
          Swal.fire('Error', res, 'error')
        }


      })
    }
    if (this.checkedButton == true) {
      if (thongtin.name == '') {
        thongtin.name = this.ten
      }
      if (thongtin.NgaySinh == '') {
        thongtin.NgaySinh = this.birth;
      }
      if (thongtin.SoDienThoai == '') {
        thongtin.SoDienThoai = this.phone;
      }
      if (thongtin.PasswordMoiNhapLai != thongtin.PasswordMoi) {
        Swal.fire('Lỗi', 'Mật khẩu mới không trùng khớp', "error");
      }
      else {
        let thongTinUpdate = {
          "name": thongtin.name,
          "NgaySinh": thongtin.NgaySinh,
          "SoDienThoai": thongtin.SoDienThoai,
          "CheckPassword": "on",
          "PasswordMoi": thongtin.PasswordMoi,
          "PasswordMoiNhapLai": thongtin.PasswordMoiNhapLai
        }
        this.userS.Update(this.idUser, thongTinUpdate).subscribe((res: any) => {
          Swal.fire('Success', 'Bạn đã cập nhật thành công', "success")
            .then(res => {
              this.flag = false;
              
            })

        })
      }

    }

  }
  upGiangVien(id:number){
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
                this.route.navigateByUrl('admin/giang-vien');
            })
  
          }
          else {
            Swal.fire('Thất bại',res,'error');
            console.log(res)
          }
          
        }, err => {console.log(err); Swal.fire('Thất bại', err, 'error') })
      }

    })
  }

  checkUpdatePass() {
    let checkbox: any = document.getElementById('CheckPassword');

    this.checkedButton = checkbox.checked;

  }
  onFileChange(event) {
    const preload: any = $('#preloader');
    let preloaDiv = document.getElementById("preloader");
    preloaDiv.style.display = 'block';
    this.fileData = <File>event.target.files[0];
    let formData = new FormData()
    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.userS.UpdateImage(this.idUser, formData).subscribe((res: any) => {
      this.hinhAnh = res.data
      preload.fadeOut('slow')
    })
  }
  kiemTraMatKhau(rePass: string, passNew: string): boolean {
    console.log(rePass + passNew)
    if (rePass !== passNew) {

      // tạo ra 1 lỗi cho form
      this.frmUpdate.control.setErrors({ 'loiNhapLaiMatKhau': true });
      return true;
    }
    // console.log(this.frmUpdate.errors);
    this.frmUpdate.control.setErrors({ 'loiNhapLaiMatKhau': false });
    return false;
  }
  delUser(id) {

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
        let indexDel = this.danhSachUser.findIndex(x => x.id == id);

        this.danhSachUser.splice(indexDel, 1);

        this.userS.DelUser(id).subscribe((res: any) => {

          Swal.fire(
            'Đã xóa!',
            'User đã được xóa',
            'success'
          ).then(res => {

          })

        }, err => { Swal.fire('Thất bại', err, 'error') })
      }

    })
  }

}
