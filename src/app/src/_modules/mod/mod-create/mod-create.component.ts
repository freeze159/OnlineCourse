import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mod-create',
  templateUrl: './mod-create.component.html',
  styleUrls: ['./mod-create.component.css']
})
export class ModCreateComponent implements OnInit {
  @ViewChild('frmName') frmName: NgForm
  @ViewChild('step1') step1: ElementRef
  name: string = ''
  summary: String = '';
  price: number = 0;
  idMangKhoaHoc = 1;
  idKhoaHocVuaThem: number;
  fileData: File = null;
  hinhAnh: any;
  constructor(private khoahocService: KhoaHocService) { }
  danhSachTheLoai: any;
  danhSachMangKhoaHoc: any;
  thongTinBody: any;
  ngOnInit() {
    this.khoahocService.LayTheLoaiKhoaHoc().subscribe(res => {
      this.danhSachTheLoai = res.data;
    })
  }
  getName(thongTin: any) {
    this.name = thongTin.name;
    this.summary = thongTin.short;
    this.price = thongTin.price;
    console.log(thongTin)
  }
  onSelect(theLoaiId) {
    this.khoahocService.LayMangKhoaHoc(theLoaiId).subscribe((res: any) => {
      this.danhSachMangKhoaHoc = res.data;
    })
  }
  getTheLoai(thongTin) {
    this.idMangKhoaHoc = thongTin.nhomKH;
    this.thongTinBody = {
      'TenKH': this.name,
      'TomTat': this.summary,
      'GiaTien': this.price
    }


  }
  onFileChange(event) {
    this.khoahocService.ThemKhoaHoc(this.idMangKhoaHoc, this.thongTinBody).subscribe((res: any) => {
      console.log(res.data)
      this.idKhoaHocVuaThem = res.data.id;
      this.fileData = <File>event.target.files[0];
      let formData = new FormData();
      
      formData.set('HinhAnh', this.fileData, this.fileData.name);
      this.khoahocService.UpdateKhoaHocImage(this.idMangKhoaHoc, this.idKhoaHocVuaThem, formData).subscribe((res: any) => {
        this.hinhAnh = res.data;
      })
      
    }, err => {
      Swal.fire('Error', 'Bạn cần điền tên và tóm tắt khóa học', 'error');
    })

  }
  finish() {
    Swal.fire('Hoàn tất', 'Bạn đã tạo khóa học thành công hãy tạo bài giảng cho khóa học', 'success').then(res => {
      window.location.href = `/instructor/lecture/${this.idKhoaHocVuaThem}/${this.idMangKhoaHoc}`;
    })
  }
}
