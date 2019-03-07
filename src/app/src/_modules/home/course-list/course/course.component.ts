import { Component, OnInit, Input } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { KhoaHoc } from 'src/app/src/_core/models/khoahoc';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  constructor(private danhSachKhoaHoc:KhoaHocService) { }
  @Input() khoahoc:any[];
  ngOnInit() {
    
  }

}
