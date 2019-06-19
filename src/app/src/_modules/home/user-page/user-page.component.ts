import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/src/_core/models/user';
import Swal from 'sweetalert2';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @ViewChild('frmUpdate') frmUpdate: NgForm;
  fileData: File = null;
  checkedButton = false;
  checkPass: any = "";
  idUser: number;
  selectedFile: File;
  myCourse:any;
  hinhAnh: string;
  ten: string;
  birth: string;
  phone: string;
  email: string;
  p=1;
  thongTinUser: User;
  bill:Object;
  constructor(private userService: UserService, private atvRoute: ActivatedRoute,private khoaHocService:KhoaHocService) {}
  
  ngOnInit() {
    let checkbox: any = document.getElementById('CheckPassword');
    checkbox.checked = false;
    this.atvRoute.params.subscribe(res => {
      let id = res;
      this.idUser = id.id;
      this.userService.XemChiTietUser(id.id).subscribe((res: any) => {
        this.thongTinUser = res.data;
        this.hinhAnh = this.thongTinUser.HinhAnh;
        this.ten = this.thongTinUser.name;
        this.birth = this.thongTinUser.NgaySinh;
        this.phone = this.thongTinUser.SoDienThoai;
        this.email = this.thongTinUser.email;
      });
    })
    this.myCourse = JSON.parse(localStorage.getItem('ownCourse'));
    
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
      this.userService.Update(this.idUser, thongTinUpdate).subscribe((res: any) => {
        Swal.fire('Success', 'Bạn đã cập nhật thành công', "success")
          .then(res => {
            let thongTinNew = JSON.parse(localStorage.getItem('userLogin'));
            thongTinNew.data.name = thongTinUpdate.name;
            thongTinNew.data.NgaySinh = thongTinUpdate.NgaySinh;
            thongTinNew.data.SoDienThoai = thongTinUpdate.SoDienThoai;
            thongTinNew.data.HinhAnh = this.hinhAnh;
            localStorage.setItem('userLogin', JSON.stringify(thongTinNew));
            window.location.href = window.location.href;
          })

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
          "PasswordHienTai": thongtin.PasswordHienTai,
          "PasswordMoi": thongtin.PasswordMoi,
          "PasswordMoiNhapLai": thongtin.PasswordMoiNhapLai
        }
        this.userService.Update(this.idUser, thongTinUpdate).subscribe((res: any) => {
          Swal.fire('Success', 'Bạn đã cập nhật thành công', "success")
            .then(res => {
              let thongTinNew = JSON.parse(localStorage.getItem('userLogin'));
              thongTinNew.data.name = thongTinUpdate.name;
              thongTinNew.data.NgaySinh = thongTinUpdate.NgaySinh;
              thongTinNew.data.SoDienThoai = thongTinUpdate.SoDienThoai;
              thongTinNew.data.HinhAnh = this.hinhAnh;
              localStorage.setItem('userLogin', JSON.stringify(thongTinNew));
              window.location.href = window.location.href;
            })

        })
      }



    }
    console.log(thongtin);

  }
  checkUpdatePass() {
    let checkbox: any = document.getElementById('CheckPassword');

    this.checkedButton = checkbox.checked;

  }
  onFileChange(event) {
    this.fileData = <File>event.target.files[0];
    let formData = new FormData()
    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.userService.UpdateImage(this.idUser, formData).subscribe((res: any) => {
      this.hinhAnh = res.data
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
  
  lichSu(){
    this.userService.LichSuThanhToan().subscribe((res:any)=>{
       this.bill = res.data;
    })
  }
}
