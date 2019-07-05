import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userS:UserService,private chRef: ChangeDetectorRef,private route:Router) { }
  danhSachThanhToan:any;
  dataTable: any;
  ngOnInit() {
    this.load()
  }
  load(){
    this.userS.XemGhiDanhKhoaHoc().subscribe((res: any) => {
      this.danhSachThanhToan = res.data;
      
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  // xoa(id){
  //   Swal.fire({
  //     type:'warning',
  //     title:'Không thể khôi phục sau khi xóa',
  //     showCancelButton:true,
  //     confirmButtonText:'Đồng ý xóa'
  //   }).then(res =>{
  //     if(res.value){
  //       this.userS.XoaHoaDon(id).subscribe((res:any)=>{
  //           if(typeof res == 'object'){
  //             Swal.fire('Xóa thành công',res.data,'success').then(()=>{
  //               this.load();
  //             })
  //           }
  //           else{
  //             Swal.fire('Thất bại',res,'error');
  //           }
  //       })
  //     }
  //   })
  // }

}
