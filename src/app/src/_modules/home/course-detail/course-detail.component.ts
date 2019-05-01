import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor( private atvRoute: ActivatedRoute,private khoaHocService:KhoaHocService) { }
  khoaHocId:any;
  mangKHId:any;
  thongTinKH:Array<any>=[];
  ngOnInit() {
    this.atvRoute.params.subscribe(data =>{
      this.khoaHocId=(data.id);
      this.mangKHId=(data.mangKHid);
    })
    this.khoaHocService.LayChiTietKhoaHoc(this.mangKHId,this.khoaHocId).subscribe((res:any)=>{
      this.thongTinKH=res.data;
      console.log(this.thongTinKH);
    })
  }

}
