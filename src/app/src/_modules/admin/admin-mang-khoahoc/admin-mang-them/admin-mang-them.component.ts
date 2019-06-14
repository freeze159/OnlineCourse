import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-mang-them',
  templateUrl: './admin-mang-them.component.html',
  styleUrls: ['./admin-mang-them.component.css']
})
export class AdminMangThemComponent implements OnInit {

  constructor(private khoaHocS:KhoaHocService) { }
  danhSachTheLoai:any;
  idTheLoai:any;
  ngOnInit() {
    this.khoaHocS.LayTheLoaiKhoaHoc().subscribe((res:any)=>{
      this.danhSachTheLoai =res.data
    })
  }
  addTheLoai(thongTin){
    const body = {
      TheLoaiKH_id:this.idTheLoai,
      TenMangKH:thongTin.TenMangKH
    }
    console.log(body)
    this.khoaHocS.ThemMangKhoaHoc(this.idTheLoai,body).subscribe((res:any)=>{
      Swal.fire('Thành công','Thêm thể loại thành công','success');
    })
  }

  onSelect(event){
    this.idTheLoai=event;
  };
}
