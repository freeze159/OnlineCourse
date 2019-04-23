import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { __await, __awaiter } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  mangKhoaHoc: any = [];
  listKH: Array<any> = [];
  mangTheLoai: Array<any> = [];
  array: Array<any> = [];
  dsKhoaHoc1: Array<any> = [];
  dsKhoaHoc2: Array<any> = [];
  dsKhoaHoc3: Array<any> = [];
  dsKhoaHoc4: Array<any> = [];
  dsKhoaHoc5: Array<any> = [];
  dsKhoaHoc6: Array<any> = [];
  dsKhoaHoc7: Array<any> = [];
  dsKhoaHoc8: Array<any> = [];
  
  constructor(private danhSachKhoaHoc: KhoaHocService, private http: HttpClient) { }
  ngOnInit() {
    this.danhSachKhoaHoc.LayTheLoaiKhoaHoc().subscribe((res: any) => {
      // console.log(res);
      this.mangTheLoai = res.data;
      for (const theLoai of this.mangTheLoai) {
        this.LayKhoaHocTheLoai(theLoai.id);
      }
      // setTimeout(() => {
      //   console.log(this.dsKhoaHoc1)
      //   console.log(this.dsKhoaHoc2)
      //   console.log(this.dsKhoaHoc3)
      //   console.log(this.dsKhoaHoc4)
      //   console.log(this.dsKhoaHoc5)
      //   console.log(this.dsKhoaHoc6)
      //   console.log(this.dsKhoaHoc7)
      //   console.log(this.dsKhoaHoc8)
      // }, 3000);

    })
  }
  LayKhoaHocTheLoai(id) {
    this.danhSachKhoaHoc.LayChiTietTheLoai(id).subscribe((res: any) => {
      let tmp = res.data.MangKH;
      for (const mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          // console.log(res.data);
          for (let object of res.data) {
            switch (id) {
              case 1:
                this.dsKhoaHoc1.push(object);
                console.log(this.dsKhoaHoc1);
                break;
              case 2:
                this.dsKhoaHoc2.push(object);
                break;
              case 3:
                this.dsKhoaHoc3.push(object);
                break;
              case 4:
                this.dsKhoaHoc4.push(object);
                break;
              case 5:
                this.dsKhoaHoc5.push(object);
                break;
              case 6:
                this.dsKhoaHoc6.push(object);
                break;
              case 7:
                this.dsKhoaHoc7.push(object);
                break;
              case 8:
                this.dsKhoaHoc8.push(object);
                break;


            }


          };
        })
      }
    })
  }

}
