import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  constructor(private khoahocService:KhoaHocService,private atvRoute:ActivatedRoute) { }
  danhSachTheLoai:Array<any>=[]
  ngOnInit() {
    this.atvRoute.queryParams.subscribe((res:any)=>{
      console.log(res);
    })
    
  }

}
