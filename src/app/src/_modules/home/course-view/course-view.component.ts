import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  constructor(private khoahocService: KhoaHocService, private atvRoute: ActivatedRoute,private local: Location ) { }
  danhSachKhoaHoc: Array<any> = [];
  
  ngOnInit() {
    this.atvRoute.queryParams.subscribe((res: any) => {
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
    })
  }
}