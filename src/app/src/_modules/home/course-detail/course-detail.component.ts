import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import * as $ from 'jquery';
import { KhoaHoc } from 'src/app/src/_core/models/khoahoc';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor( private atvRoute: ActivatedRoute,private khoaHocService:KhoaHocService) { }
  khoaHocId:any;
  mangKHId:any;
  thongTinKH:KhoaHoc;
  tenKh:string;
  hinhAnh:string;
  ngOnInit() {
    this.atvRoute.params.subscribe(data =>{
      this.khoaHocId=(data.id);
      this.mangKHId=(data.mangKHid);
    })
    this.khoaHocService.LayChiTietKhoaHoc(this.mangKHId,this.khoaHocId).subscribe((res:any)=>{
      this.thongTinKH=res.data;
      this.tenKh=this.thongTinKH.TenKH;
      this.hinhAnh=this.thongTinKH.HinhAnh;
      console.log(this.thongTinKH);
      
      document.getElementById("overlay").style.background=`url(${this.hinhAnh})`;
      document.getElementById("overlay").style.backgroundPosition='center';
      document.getElementById('course-comment-img').style.background=`url(${this.hinhAnh})`;
      document.getElementById("course-comment-img").style.backgroundPosition='center';
    })
    
  }

}
