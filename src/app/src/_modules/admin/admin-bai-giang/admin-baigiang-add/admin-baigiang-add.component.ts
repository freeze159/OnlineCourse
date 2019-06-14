import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-baigiang-add',
  templateUrl: './admin-baigiang-add.component.html',
  styleUrls: ['./admin-baigiang-add.component.css']
})
export class AdminBaigiangAddComponent implements OnInit {

  BaiGiangForm: FormGroup
  name: string;
  constructor(private atv: ActivatedRoute, private khoahocS: KhoaHocService, private fb: FormBuilder) { }
  courseId: number;
  short: string;
  p = 1;
  hinhAnh: string;
  danhSachThem: any;
  courseGroupId: number;
  courseList: any;
  soBaiGiang: Array<any>;
  AllBaiGiang = [];
  submitted = false;
  confirmNum: boolean = false;
  failInput: boolean = true;
  danhSachMangKhoaHoc: any;
  danhSachTheLoai: any;
  price: number;
  giam: number;
  tenMangKH; string
  fileData: File;
  ngOnInit() {
  }
  frmAdd(soLuongBaiGiang) {

    this.soBaiGiang = Array(soLuongBaiGiang.soLuong).fill({ 'baigiang': 'tenBaiGiang' });
    this.AllBaiGiang = this.soBaiGiang;
    this.confirmNum = true;
    this.createform();
  }
  onSelect(theLoaiId) {
    this.khoahocS.LayMangKhoaHoc(theLoaiId).subscribe((res: any) => {
      this.danhSachMangKhoaHoc = res.data;
    })
  }
  createform() {
    let arr = [];
    for (let i = 0; i < this.AllBaiGiang.length; i++) {
      arr.push(this.BuildFormDynamic(this.AllBaiGiang[i]))
    }
    this.BaiGiangForm = this.fb.group({
      data: this.fb.array(arr)
    })
  }
  BuildFormDynamic(BaiGiangData): FormGroup {
    return this.fb.group({
      TenBaiGiang: [''],
      MoTa: [''],
      EmbededURL: ['']
    })
  }
  SaveData() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.BaiGiangForm.invalid) {
      Swal.fire('Thất bại', 'Chưa nhập đủ thông tin', 'error');
      return;

    }
    else {
      for (let item of this.BaiGiangForm.value.data) {
        item.TenBaiGiang = item.TenBaiGiang.trim();
        item.MoTa = item.MoTa.trim();
        item.EmbededURL = item.EmbededURL.trim();
        if (item.TenBaiGiang == '') {
          Swal.fire('Lỗi', 'Không được bỏ trống tên bài giảng', 'error');
          return;

        }
        if (item.MoTa == '') {
          Swal.fire('Lỗi', 'Không được bỏ trống mô tả', 'error');
          return;

        }
        if (item.EmbededURL == '') {

          Swal.fire('Lỗi', 'Không được bỏ trống đường dẫn ', 'error');
          return;

        }

      }
      console.log(this.BaiGiangForm.value)
      if (this.failInput) {
        this.danhSachThem = this.BaiGiangForm.value;
        this.khoahocS.ThemBaiGiang(this.courseId, this.danhSachThem).subscribe((res: any) => {
          if (typeof res == 'object') {
            Swal.fire('Thành công', 'Thêm Bài Giảng thành công', 'success')
            this.BaiGiangForm.reset();
          }
        })
      }


    }
  }
}
