import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-khoahoc-cmt',
  templateUrl: './admin-khoahoc-cmt.component.html',
  styleUrls: ['./admin-khoahoc-cmt.component.css']
})
export class AdminKhoahocCmtComponent implements OnInit {

  constructor(private atv: ActivatedRoute, private chRef: ChangeDetectorRef, private khoaHocService: KhoaHocService, private route: Router) { }
  danhSachCmt: any;
  danhSachRate: any
  idKhoaHoc: number;
  dataTableRate: any;
  dataTableCmt: any
  ngOnInit() {
    this.atv.params.subscribe(res => {
      this.idKhoaHoc = res.id;
      this.loadRate()
    })
  }
  loadCmt() {
    this.khoaHocService.LayDanhSachComment(this.idKhoaHoc).subscribe((res: any) => {
      this.danhSachCmt = res.data
      this.chRef.detectChanges();
      const table: any = $('#dataTableCmt');
      this.dataTableCmt = table.DataTable();
      
    })
  }
  loadRate(){
    this.khoaHocService.LayDanhSachDanhGia(this.idKhoaHoc).subscribe((res: any) => {
      this.danhSachRate = res.data
      this.chRef.detectChanges();

      const table: any = $('#dataTableRate');
      this.dataTableRate = table.DataTable();
    })
  }
  xoaCmt(id){
    Swal.fire({
      type:'warning',
      title:'Bạn có chắc chưa?',
      showCancelButton:true,
      confirmButtonText:'Chắc chắn xóa!'
    }).then(res => {
      if(res.value){
        this.khoaHocService.XoaComment(this.idKhoaHoc,id).subscribe((res:any)=>{
          if(typeof res =='object'){
            Swal.fire('Thành công',res.data,'success').then(()=>{
              this.loadCmt();
            })
          }
        })
      }
    })
  }
  xoaRate(id){
    Swal.fire({
      type:'warning',
      title:'Bạn có chắc chưa?',
      showCancelButton:true,
      confirmButtonText:'Chắc chắn xóa!'
    }).then(res => {
      if(res.value){
        this.khoaHocService.XoaDanhGia(this.idKhoaHoc,id).subscribe((res:any)=>{
          if(typeof res =='object'){
            Swal.fire('Thành công',res.data,'success').then(()=>{
              this.loadRate();
            })
          }
        })
      }
    })
  }

}
