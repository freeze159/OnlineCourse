import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-course-interest',
  templateUrl: './course-interest.component.html',
  styleUrls: ['./course-interest.component.css']
})
export class CourseInterestComponent implements OnInit {

  constructor(private khoaHocService:KhoaHocService) { }
  dsKhoaHoc:Array<any>=[];
  ngOnInit() {
    this.khoaHocService.LayKhoaHocNoiBat().subscribe((res:any)=>{
      console.log(res);
      this.dsKhoaHoc =res.data;
    })
  }

}
