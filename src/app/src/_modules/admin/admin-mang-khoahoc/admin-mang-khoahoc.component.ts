import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-mang-khoahoc',
  templateUrl: './admin-mang-khoahoc.component.html',
  styleUrls: ['./admin-mang-khoahoc.component.css']
})
export class AdminMangKhoahocComponent implements OnInit {

  constructor(private atv: ActivatedRoute, private khoaHocS: KhoaHocService) { }
  idTheLoai: number
  danhSachMangKh: any;
  danhSachTheLoai:any;
  tenTheLoai: string;
  idMang: number;
  flag=false;
  ngOnInit() {
    this.atv.params.subscribe((res: any) => {
      this.idTheLoai = res.id
    })
    if(typeof this.idTheLoai !=='undefined'){
      this.khoaHocS.LayChiTietTheLoai(this.idTheLoai).subscribe((res: any) => {

        this.danhSachMangKh = res.data.MangKH;
        this.tenTheLoai = res.data.TenTheLoai;
        this.flag=true;
      })
    }
    
    this.khoaHocS.LayTheLoaiKhoaHoc().subscribe((res: any) => {

      this.danhSachTheLoai = res.data
      
    })
  }
  getIdMang(id) {
    this.idMang = id;
  }
  onSelect(event){
    this.idTheLoai=event;
    this.khoaHocS.LayChiTietTheLoai(this.idTheLoai).subscribe((res: any) => {

      this.danhSachMangKh = res.data.MangKH;
      this.tenTheLoai = res.data.TenTheLoai;
    })
  }
  updateMang(thongTin: any) {
    let body = {
      'TheLoaiKH_id': this.idTheLoai,
      'TenMangKH': thongTin.TenMangKH
    }
    this.khoaHocS.UpdateMangKhoaHoc(this.idTheLoai, this.idMang, body).subscribe((res: any) => {
      Swal.fire('Thành Công', res.data, 'success');
      this.khoaHocS.LayChiTietTheLoai(this.idTheLoai).subscribe((res: any) => {

        this.danhSachMangKh = res.data.MangKH;
        this.tenTheLoai = res.data.TenTheLoai;
      })
    })
  }
  deleteMangKhoaHoc(id) {
    let indexDel = this.danhSachMangKh.findIndex(x => x.id == id);

    this.danhSachMangKh.splice(indexDel, 1);
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


        this.khoaHocS.XoaMangKhoaHoc(this.idTheLoai, id).subscribe((res: any) => {

          Swal.fire(
            'Đã xóa!',
            'Mảng đã được xóa',
            'success'
          ).then(res => {
            })

        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }
}

