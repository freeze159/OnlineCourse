import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  constructor(private khoahocService: KhoaHocService, private atvRoute: ActivatedRoute, private route:Router) { }
  danhSachKhoaHoc: Array<any> = [];
  danhSachMang: Array<any> = []
  
  p = 1;
  getMang(id) {
    this.khoahocService.LayMangKhoaHoc(id).subscribe((res: any) => {
      this.danhSachMang = res.data;
    })
  }
  ngOnInit() {
    this.atvRoute.queryParams.subscribe((res: any) => {
      if (res.Id) {
        this.khoahocService.LayChiTietTheLoai(res.Id).subscribe(res => {
          this.danhSachKhoaHoc = []
          let tmp = res.data.MangKH
          for (let mang of tmp) {
            this.khoahocService.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
              for (let khoahocObject of res.data) {
                this.danhSachKhoaHoc.push(khoahocObject);
              }
            })

          }
        })
      }
    })
    
    this.atvRoute.params.subscribe((res: any) => {
      this.danhSachKhoaHoc=[];
      if(res.idTheLoai && res.idMang){
        this.khoahocService.LayChiTietMangKhoaHoc(res.idTheLoai, res.idMang).subscribe((res: any) => {
          for (let khoahoc of res.data.KhoaHoc) {
            let diem = JSON.parse(khoahoc.DanhGia);
            let newDanhGia: Array<number> = Array(diem).fill(5);
            khoahoc.DanhGia = newDanhGia;
            this.danhSachKhoaHoc.push(khoahoc);
          }
        })
      }
      if(!res.idTheLoai && !res.idMang){
        this.khoahocService.LayKhoaHocNoiBat().subscribe((res:any)=>{
          this.danhSachKhoaHoc=res.data;
        })
      }
      
    })


  }
  dieuHuong(tenMang:string,mangId:number,idTheLoai:number){
    let keyword = '';
    keyword=tenMang;
    let keyWordClean = keyword.replace(/ /g, "-")
    this.route.navigateByUrl(`/tag/${keyWordClean}/${idTheLoai}/${mangId}`);
  }
  
}
