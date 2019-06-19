import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-khoahoc',
  templateUrl: './admin-khoahoc.component.html',
  styleUrls: ['./admin-khoahoc.component.css']
})
export class AdminKhoahocComponent implements OnInit {
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
    this.flag = false;
    if (thongTin.TenKH == '') {
      thongTin.TenKH = this.name;
    }
    if (thongTin.MangKH_id == '') {
      thongTin.MangKH_id = this.idMangUpdate;
      return;
    }
    if (thongTin.TomTat == '') {
      thongTin.TomTat = this.short;
    }
    if (thongTin.GiaTien == '') {
      thongTin.GiaTien = this.price;
    }
    if (thongTin.GiamGia == '') {
      thongTin.GiamGia = this.giam
    }
    this.khoaHocS.UpdateKhoaHoc(this.idKhoaHocUpdate, this.idMangUpdate, thongTin).subscribe((res: any) => {
      if(typeof res =='object'){
        Swal.fire('Thành công', 'Cập nhật khóa học thành công', 'success').then((res)=>{
          this.khoaHocS.LayDanhSachKhoaHoc(this.idMang).subscribe((res: any) => {
            this.danhSachKhoaHoc = res.data;
          })
        });
      }
      else{
        Swal.fire('Thất bại', res, 'error');
      }
      
    }, err => {
      Swal.fire('Thất bại', 'Cập nhật khóa học thất bại', 'error');
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

    this.fileData = <File>event.target.files[0];
    let formData = new FormData();

    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.khoaHocS.UpdateKhoaHocImage(this.idMangUpdate, this.idKhoaHocUpdate, formData).subscribe((res: any) => {
      this.hinhAnh = res.data.HinhAnh;


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
