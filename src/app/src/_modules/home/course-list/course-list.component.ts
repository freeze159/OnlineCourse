import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { forkJoin, from } from 'rxjs';
import * as $ from 'jquery';
import { UserService } from 'src/app/src/_core/services/user.service';

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
  ownflag=false;
  flag:Array<boolean> = [false,false,false,false,false,false,false];
  dsKhoaHoc1: Array<any> = [];
  dsKhoaHoc2: Array<any> = [];
  dsKhoaHoc3: Array<any> = [];
  dsKhoaHoc4: Array<any> = [];
  dsKhoaHoc5: Array<any> = [];
  dsKhoaHoc6: Array<any> = [];
  dsKhoaHoc7: Array<any> = [];
  dsKhoaHoc8: Array<any> = [];
  constructor(private danhSachKhoaHoc: KhoaHocService,private userService: UserService) {


  }

  ngOnInit() {

    this.danhSachKhoaHoc.LayTheLoaiKhoaHoc().subscribe(res => {
      this.mangTheLoai = res.data;
    })
    this.danhSachKhoaHoc.LayChiTietTheLoai(1).subscribe(res => {
      let tmp = res.data.MangKH
      for (let mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          for (let khoahocObject of res.data) {
            this.dsKhoaHoc1.push(khoahocObject);
          }
        })
      }
    })
    
    
  }
  active(id: any) {
    this.danhSachKhoaHoc.LayChiTietTheLoai(id).subscribe(res => {
      let tmp = res.data.MangKH
      for (let mang of tmp) {
        this.danhSachKhoaHoc.LayDanhSachKhoaHoc(mang.id).subscribe((res: any) => {
          for (let khoahocObject of res.data) {
            switch (id) {
              case 2:
              if(this.flag[0]==false){
                this.dsKhoaHoc2.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[0]=true;
              }, 1500);

                break;
              case 3:
              if(this.flag[1]==false){
                this.dsKhoaHoc3.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[1]=true;
              }, 1500);
                break;
              case 4:
              if(this.flag[2]==false){
                this.dsKhoaHoc4.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[2]=true;
              }, 1500);
                break;
              case 5:
              if(this.flag[3]==false){
                this.dsKhoaHoc5.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[3]=true;
              }, 1500);
                break;
              case 6:
              if(this.flag[4]==false){
                this.dsKhoaHoc6.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[4]=true;
              }, 1500);
                break;
              case 7:
              if(this.flag[5]==false){
                this.dsKhoaHoc7.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[5]=true;
              }, 1500);
                break;
              case 8:
              if(this.flag[6]==false){
                this.dsKhoaHoc8.push(khoahocObject);
              }
              else{
              }
              setTimeout(() => {
                this.flag[6]=true;
              }, 1500);
                break;
            }
          }
        })
      }
    })

  }



}
