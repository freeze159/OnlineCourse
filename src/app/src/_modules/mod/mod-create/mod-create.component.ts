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
  @ViewChild('frmName') frmName:NgForm
  @ViewChild('step1') step1:ElementRef
  name:string=''
  summary:String='';
  price:number=0;
  idMangKhoaHoc=1;
  idKhoaHocVuaThem:number;
  fileData: File = null;
  hinhAnh:any;
  constructor(private khoahocService:KhoaHocService) { }
  danhSachTheLoai:any;
  danhSachMangKhoaHoc:any;
  ngOnInit() {
    this.khoahocService.LayTheLoaiKhoaHoc().subscribe(res =>{
        this.danhSachTheLoai=res.data;
    })
    console.log(this.step1)
  }
  getName(thongTin:any){
    this.name=thongTin.name;
    this.summary=thongTin.short;
    this.price=thongTin.price;
  }
  onSelect(theLoaiId){
    this.khoahocService.LayMangKhoaHoc(theLoaiId).subscribe((res:any)=>{
      this.danhSachMangKhoaHoc=res.data;
    })
  }
  getTheLoai(thongTin){
    this.idMangKhoaHoc=thongTin.nhomKH;
    let thongTinBody = {
      'TenKH':this.name,
      'TomTat':this.summary,
      'GiaTien':this.price
    }
    this.khoahocService.ThemKhoaHoc(this.idMangKhoaHoc,thongTinBody).subscribe((res:any)=>{
      
      this.idKhoaHocVuaThem=res.data.id;
    },err => {
      Swal.fire('Error','Bạn cần điền tên và tóm tắt khóa học','error');
    })

  }
  onFileChange(event) {
    this.fileData = <File>event.target.files[0];
    let formData = new FormData()
    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.khoahocService.UpdateKhoaHocImage(this.idMangKhoaHoc,this.idKhoaHocVuaThem,formData).subscribe((res: any) => {
      this.hinhAnh = res.data;
      console.log(res);
    })
  }

}
