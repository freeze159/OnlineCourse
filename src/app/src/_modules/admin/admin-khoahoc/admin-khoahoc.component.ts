import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-khoahoc',
  templateUrl: './admin-khoahoc.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./admin-khoahoc.component.css']
})
export class AdminKhoahocComponent implements OnInit {
  KhoaHocUpdateForm = new FormGroup({
    MangKH_id: new FormControl(''),
    TenKH: new FormControl(''),
    GiaTien: new FormControl(''),
    GiamGia: new FormControl(''),
    lydo: new FormControl(''),
    ketqua: new FormControl(''),

  })
  name: any;
  short: any;
  price: any;
  giam: any;
  idMangUpdate: any;
  idKhoaHocUpdate: any;
  fileData: File;
  hinhAnh:string;
  constructor(private khoaHocS: KhoaHocService, private atv: ActivatedRoute,private route:Router) { }
  danhSachTheLoai: any;
  danhSachMang: any;
  danhSachMangSecond:any
  danhSachKhoaHoc: any;
  idTheLoai: number;
  idMang: number;
  tenTheLoai: string;
  tenMang: string;
  flag = false;
  flagButton = false;
  ngOnInit() {
    this.khoaHocS.LayTheLoaiKhoaHoc().subscribe((res: any) => {
      this.danhSachTheLoai = res.data;
    })
    this.atv.params.subscribe((res: any) => {
      this.idTheLoai = res.id;
      this.idMang = res.idMang;
      if (typeof this.idTheLoai !== 'undefined') {
        this.flagButton=true;
        this.khoaHocS.LayChiTietMangKhoaHoc(this.idTheLoai, this.idMang).subscribe((res: any) => {
          this.tenMang = res.data.TenMangKH;
          this.tenTheLoai = res.data.TheLoaiKH;
        })
        this.khoaHocS.LayDanhSachKhoaHoc(this.idMang).subscribe((res: any) => {
          this.danhSachKhoaHoc = res.data;
        })
        
      }

    })
  }
  updateTriggered(idmang, idKH) {
    this.flag = true;

    this.khoaHocS.LayChiTietKhoaHoc(idmang, idKH).subscribe((res: any) => {
      this.name = res.data.TenKH;
      this.short = res.data.TomTat;
      this.price = res.data.GiaTien;
      this.giam = res.data.GiamGia;
      this.tenMang = res.data.MangKH;
      this.idMangUpdate = idmang;
      this.idKhoaHocUpdate = idKH;
      this.hinhAnh = res.data.HinhAnh;
    })
  }
  update(thongTin: any) {
    let lydo = document.getElementById('h2lyDo').outerHTML.replace(/id="h2lyDo" /g, "");
    let ketqua = document.getElementById('h2ketQua').outerHTML.replace(/id="h2ketQua" /g, "");
    let tomTat = lydo + '\r\n' + this.KhoaHocUpdateForm.value.lydo + ketqua + '\r\n' + this.KhoaHocUpdateForm.value.ketqua;
    this.khoaHocS.LayChiTietKhoaHoc(this.idMangUpdate, this.idKhoaHocUpdate).subscribe((res: any) => {
      let ketqua = res.data;
      if (this.KhoaHocUpdateForm.value.TenKH == '') {
        this.KhoaHocUpdateForm.value.TenKH = ketqua.TenKH;
      }
      if (this.KhoaHocUpdateForm.value.MangKH_id == '') {
        this.KhoaHocUpdateForm.value.MangKH_id = ketqua.TenKH;
      }
      if (tomTat == '') {
        tomTat = ketqua.TomTat;
      }
      if (this.KhoaHocUpdateForm.value.GiaTien == '') {
        this.KhoaHocUpdateForm.value.GiaTien = ketqua.GiaTien;
      }
      if (this.KhoaHocUpdateForm.value.GiamGia == '') {
        this.KhoaHocUpdateForm.value.GiamGia = 0
      }
      let thongTinUpdate = {
        TenKH: this.KhoaHocUpdateForm.value.TenKH,
        MangKH_id: this.KhoaHocUpdateForm.value.MangKH_id,
        GiaTien: this.KhoaHocUpdateForm.value.GiaTien,
        GiamGia: this.KhoaHocUpdateForm.value.GiamGia,
        TomTat: tomTat
      }
      this.khoaHocS.UpdateKhoaHoc(this.idKhoaHocUpdate, this.idMangUpdate, thongTinUpdate).subscribe((res: any) => {
        Swal.fire('Thành công', 'Cập nhật khóa học thành công', 'success').then(res => {
          this.route.navigateByUrl(`/instructor/lecture/${this.idKhoaHocUpdate}/${thongTin.MangKH_id}`);

        });
      }, err => {
        Swal.fire('Thất bại', err, 'error');
      })
    })
  }
  onSelect(event) {
    this.idTheLoai = event;
    this.khoaHocS.LayMangKhoaHoc(this.idTheLoai).subscribe((res: any) => {
      this.danhSachMang = res.data;
    })
  }
  onSelectTheLoai(event) {
    this.khoaHocS.LayMangKhoaHoc(event).subscribe((res: any) => {
      this.danhSachMangSecond = res.data;
    })
  }
  onSelectMang(event) {
    this.idMang = event;
    if (this.idMang != 0) {
      this.khoaHocS.LayChiTietMangKhoaHoc(this.idTheLoai, this.idMang).subscribe((res: any) => {
        this.tenMang = res.data.TenMangKH;
        this.tenTheLoai = res.data.TheLoaiKH;
      })
      this.khoaHocS.LayDanhSachKhoaHoc(this.idMang).subscribe((res: any) => {
        this.danhSachKhoaHoc = res.data;
      })
    }

  }
  onFileChange(event) {
    const preload: any = $('#preloader');
    let preloaDiv = document.getElementById("preloader");
    preloaDiv.style.display = 'block';
    this.fileData = <File>event.target.files[0];
    let formData = new FormData();

    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.khoaHocS.UpdateKhoaHocImage(this.idMangUpdate, this.idKhoaHocUpdate, formData).subscribe((res: any) => {
      this.hinhAnh = res.data.HinhAnh;
      preload.fadeOut('slow');

      // }, err => {
      //   Swal.fire('Error', 'Bạn cần điền tên và tóm tắt khóa học', 'error');
      //
    }
    )


  }
  xemRate(id){
    this.route.navigateByUrl(`admin/khoa-hoc/nhan-xet/${id}`);
  }
  delele(id) {
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
        
        this.khoaHocS.XoaKhoaHoc(id,this.idMang).subscribe((res: any) => {
          
          Swal.fire(
            'Đã xóa!',
            'Khóa học đã được xóa',
            'success'
          ).then(res => {
            let indexDel = this.danhSachKhoaHoc.findIndex(khoaHoc =>khoaHoc.id == id)
            this.danhSachKhoaHoc.splice(indexDel,1);
          })

        }, err => {
           Swal.fire('Thất bại', 'Lỗi', 'error') 
          })
      }

    })
  }
}
