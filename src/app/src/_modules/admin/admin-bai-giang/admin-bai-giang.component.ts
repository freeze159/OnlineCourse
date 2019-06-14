import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-bai-giang',
  templateUrl: './admin-bai-giang.component.html',
  styleUrls: ['./admin-bai-giang.component.css']
})
export class AdminBaiGiangComponent implements OnInit {

  constructor(private khoaHocS: KhoaHocService,private atv:ActivatedRoute) { }
  danhSachTheLoai: any;
  danhSachMang: any;
  danhSachKhoaHoc: any;
  danhSachBaiGiang: any;
  flag: boolean = false;
  idUpate: number;
  idKhoaHocUpdate: number;
  name: string = '';
  describe: string = '';
  link: string = '';
  ngOnInit() {
    this.khoaHocS.LayTheLoaiKhoaHoc().subscribe(res => {
      this.danhSachTheLoai = res.data
    })
    this.atv.params.subscribe((res:any)=>{
      if(typeof res.idKhoaHoc !='undefined'){
        this.khoaHocS.LayDanhSachBaiGiang(res.idKhoaHoc).subscribe((resu: any) => {
          this.danhSachBaiGiang = resu;
        })
      }
    })
  }
  onSelect(event) {

    this.khoaHocS.LayChiTietTheLoai(event).subscribe(res => {
      this.danhSachMang = res.data.MangKH;
    })
  }
  onSelectMang(event) {
    this.khoaHocS.LayDanhSachKhoaHoc(event).subscribe((res: any) => {
      this.danhSachKhoaHoc = res.data;
    })
  }
  onSelectKhoaHoc(event) {
    this.khoaHocS.LayDanhSachBaiGiang(event).subscribe((res: any) => {
      this.danhSachBaiGiang = res;
    })
  }
  updateTriggered(id, KhoaHocid, tenBaiGiang, moTa, link) {
    this.flag = true;
    this.name = tenBaiGiang;
    this.describe = moTa;
    this.link = link;
    this.idUpate = id;
    this.idKhoaHocUpdate = KhoaHocid;
  }
  update(thongTin) {
    if (thongTin.TenBaiGiang == '') {
      thongTin.TenBaiGiang=this.name;
    }
    if (thongTin.MoTa == '') {
      thongTin.MoTa = this.describe
    }
    if (thongTin.EmbededURL == '') {
      thongTin.EmbededURL = this.link
    }
    let bodyUpdate = {
      TenBaiGiang:  thongTin.TenBaiGiang,
      MoTa:  thongTin.MoTa,
      EmbededURL: thongTin.EmbededURL
    }
    this.flag=false;
    this.khoaHocS.UpdateBaiGiang(this.idKhoaHocUpdate, this.idUpate, bodyUpdate).subscribe((res: any) => {
      Swal.fire('Thành công',res.data,'success');
    })
  }
  delele(idBaiGiang,idKhoaHoc){
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
        let indexDel = this.danhSachBaiGiang.findIndex(x => x.id == idBaiGiang);

        this.danhSachBaiGiang.splice(indexDel, 1);
        this.khoaHocS.XoaBaiGiang(idKhoaHoc,idBaiGiang).subscribe((res: any) => {

          Swal.fire(
            'Đã xóa!',
            res.data,
            'success'
          ).then(res => {
            
          })

        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }

}
