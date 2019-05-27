import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-mod-course',
  templateUrl: './mod-course.component.html',
  styleUrls: ['./mod-course.component.css']
})
export class ModCourseComponent implements OnInit {

  constructor(private khoaHocService:KhoaHocService) { }
  myCourse:Array<any>
  idUser:number
  ngOnInit() {
    let storage= JSON.parse(localStorage.getItem('gv_log'));
    this.idUser=storage.id;
    this.khoaHocService.LayKhoaHocGiangVien(this.idUser).subscribe((res:any) => {
      this.myCourse = res.data;
    },err => {
      
    })
  }

}
