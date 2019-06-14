import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-the-loai',
  templateUrl: './admin-the-loai.component.html',
  styleUrls: ['./admin-the-loai.component.css']
})
export class AdminTheLoaiComponent implements OnInit {

  constructor(private khoaHocS:KhoaHocService) { }
  danhSachTheLoai:any
  chiTietTheLoai:any;
  tenTheLoaiCapNhat:any;
  idTheLoaiCapNhat:any;
  flag:boolean = false;
  ngOnInit() {
    this.khoaHocS.LayTheLoaiKhoaHoc().subscribe(res => {
      this.danhSachTheLoai=res.data;
    })
  }
  getTheLoai(id){
    this.khoaHocS.LayChiTietTheLoai(id).subscribe(res =>{
        this.chiTietTheLoai=res.data.MangKH;
        this.flag=true;
    })
    
  }
  getDataUpdate(id,ten){
    this.idTheLoaiCapNhat=id;
    this.tenTheLoaiCapNhat=ten;
    console.log(this.idTheLoaiCapNhat,this.tenTheLoaiCapNhat);
  }
  updateTheLoai(thongTin){
    this.khoaHocS.UpdateTheLoai(this.idTheLoaiCapNhat,thongTin).subscribe((res:any) =>{
      Swal.fire('Thành công',res.data,'success');
      this.khoaHocS.LayTheLoaiKhoaHoc().subscribe(res => {
        this.danhSachTheLoai=res.data;
      })
    })
  }
  deleteTheLoai(id){
        
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
        let indexDel = this.danhSachTheLoai.findIndex(x => x.id == id);

        this.danhSachTheLoai.splice(indexDel,1);

        this.khoaHocS.XoaTheLoai(id).subscribe((res: any) => {
          
          Swal.fire(
            'Đã xóa!',
            'Thể Loại đã được xóa',
            'success'
          ).then(res => {
            window.location.href = '/admin'
          })
          
        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }
}
