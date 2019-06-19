import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-admin-khoahoc-question',
  templateUrl: './admin-khoahoc-question.component.html',
  styleUrls: ['./admin-khoahoc-question.component.css']
})
export class AdminKhoahocQuestionComponent implements OnInit {

  constructor(private khoaHocS: KhoaHocService, private atv: ActivatedRoute, private chRef: ChangeDetectorRef) { }
  baiGiangid: number;
  dataTable: any
  danhSachCauHoi: any;
  ngOnInit() {
    this.atv.params.subscribe(res => {
      this.baiGiangid = res.id;
    })
    this.loadCauHoi()
  }
  xoaQues(id){
    Swal.fire({
      type:'warning',
      title:'Bạn có chắc chưa?',
      showCancelButton:true,
      confirmButtonText:'Chắc chắn xóa!'
    }).then(res => {
      if(res.value){
        this.khoaHocS.XoaCauHoi(this.baiGiangid,id).subscribe((res:any)=>{
          if(typeof res =='object'){
            Swal.fire('Thành công',res.data,'success').then(()=>{
              this.loadCauHoi()
            })
          }
        })
      }
    })
  }
 
  loadCauHoi() {
    this.khoaHocS.LayDanhSachCauHoi(this.baiGiangid).subscribe((res: any) => {
      
      if (typeof res == 'object') {
        this.danhSachCauHoi = res.data
        this.chRef.detectChanges();
        const table: any = $('.table');
        this.dataTable = table.DataTable();
      }
      else {
        Swal.fire('Lỗi', res, 'error');
      }
    })

  }

}
