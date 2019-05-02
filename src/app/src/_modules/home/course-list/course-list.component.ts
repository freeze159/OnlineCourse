import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { forkJoin, from } from 'rxjs';



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

  constructor(private danhSachKhoaHoc: KhoaHocService) { }
  ngOnInit() {

    this.danhSachKhoaHoc.LayTheLoaiKhoaHoc().subscribe(res => {
      this.mangTheLoai = res.data;
    });
    this.danhSachKhoaHoc.LayChiTietTheLoai(1).subscribe(res => {
      let tmp = res.data.MangKH
      for (let mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          for (let khoahocObject of res.data) {
            this.dsKhoaHoc1.push(khoahocObject);
          }
        })
      }
      console.log(this.dsKhoaHoc1);
    })

  }
  active(id) {
    this.danhSachKhoaHoc.LayChiTietTheLoai(id).subscribe(res => {
      let tmp = res.data.MangKH
      for (let mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          for (let khoahocObject of res.data) {
            switch (id) {
              case 2:
                this.dsKhoaHoc2.push(khoahocObject);
                break;
              case 3:
                this.dsKhoaHoc3.push(khoahocObject);
                break;
              case 4:
                this.dsKhoaHoc4.push(khoahocObject);
                break;
              case 5:
                this.dsKhoaHoc5.push(khoahocObject);
                break;
              case 6:
                this.dsKhoaHoc6.push(khoahocObject);
                break;
              case 7:
                this.dsKhoaHoc7.push(khoahocObject);
                break;
              case 8:
                this.dsKhoaHoc8.push(khoahocObject);
                break;
            }
          }
        })
      }
    })
  }
  public GetMangKH() {
    this.array.length = 0;
    forkJoin(
      this.danhSachKhoaHoc.LayChiTietTheLoai(1),
      this.danhSachKhoaHoc.LayChiTietTheLoai(2),
      this.danhSachKhoaHoc.LayChiTietTheLoai(3),
      this.danhSachKhoaHoc.LayChiTietTheLoai(4),
      this.danhSachKhoaHoc.LayChiTietTheLoai(5),
      this.danhSachKhoaHoc.LayChiTietTheLoai(6),
      this.danhSachKhoaHoc.LayChiTietTheLoai(7),
      this.danhSachKhoaHoc.LayChiTietTheLoai(8),

    ).subscribe((res: any) => {
      this.array = [...(res)];
      // console.log(this.array[0].data);
      for (let mang of this.array) {
        this.mangTheLoai.push(mang.data.TenTheLoai);
        this.mangKhoaHoc.push(mang.data);
      }
      this.LayKhoaHocTheLoai();
    })
  }
  LayKhoaHocTheLoai() {
    for (let listKH of this.mangKhoaHoc) {
      // console.log(listKH);
      let tmp = listKH.MangKH;
      for (const mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          // console.log(res.data);
          for (let object of res.data) {
            switch (listKH.id) {
              case 1:
                this.dsKhoaHoc1.push(object);
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
    }
  }

}
