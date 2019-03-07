import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);

  // myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);

  mySlideOptions = { items: 1, dots: true, nav: false };
  myCarouselOptions = { items: 3, dots: true, nav: true };
  mangKhoaHoc:any={};

  constructor(private danhSachKhoaHoc:KhoaHocService) { }

  ngOnInit() {
    this.danhSachKhoaHoc.LayDanhSachKhoaHoc().subscribe((res:any)=>{
      if(typeof res.data =='object')
        this.mangKhoaHoc=res.data;
        
    })
  }

}
