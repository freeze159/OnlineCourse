import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/src/_core/services/cart.service';
@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {
  SoTaiKhoanHienTai: any;
  idTkUpdate: any;
  ChuTaiKhoanHienTai:any
  NganHang_id:number;
  ChiNhanhNganHang:any;
  bankList: any;
  nganHangHt:any
  constructor(private cartS:CartService,private chRef:ChangeDetectorRef) { }
  danhSachTaiKhoan:any
  dataTableRate:any
  
  ngOnInit() {
    this.loadTaiKhoan();
    this.cartS.LayDanhSachNganHang().subscribe((res:any)=>{
      this.bankList=res;
    })
  }
  loadTaiKhoan(){
    this.cartS.LayDanhSachTaiKhoan().subscribe((res:any)=>{
      this.danhSachTaiKhoan = res.data;
      this.chRef.detectChanges();
      const table: any = $('#dataTableBank');
      this.dataTableRate = table.DataTable();

    })
  }
  // updateTrigger(id,soTk,chuTk,chiNhanhTk,nh){
  //   this.idTkUpdate=id;
  //   this.SoTaiKhoanHienTai=soTk;
  //   this.ChuTaiKhoanHienTai=chuTk;
  //   this.ChiNhanhNganHang=chiNhanhTk;
  //   this.nganHangHt = nh;

  // }
  xoaTk(id){
    Swal.fire({
      type:'warning',
      title:'Không thể khôi phục sau khi xóa',
      showCancelButton:true,
      confirmButtonText:'Đồng ý xóa'
    }).then(res =>{
      if(res.value){
        this.cartS.XoaTaiKhoan(id).subscribe((res:any)=>{
            if(typeof res == 'object'){
              Swal.fire('Xóa thành công',res.data,'success').then(()=>{
                this.loadTaiKhoan();
              })
            }
            else{
              Swal.fire('Thất bại',res,'error');
            }
        })
      }
    })
  }
  // update(thongTin:any){
  //   if(thongTin.SoTaiKhoan == ''){
  //     thongTin.SoTaiKhoan=this.SoTaiKhoanHienTai
  //   }
  //   if(thongTin.ChiNhanhNganHang == ''){
  //     thongTin.ChiNhanhNganHang=this.ChiNhanhNganHang
  //   }
  //   if(thongTin.ChuTaiKhoan == ''){
  //     thongTin.ChuTaiKhoan=this.ChuTaiKhoanHienTai
  //   }
  //   if(thongTin.NganHang_id==''){
  //     let bank = this.bankList.find(x => x.TenNganHang = this.nganHangHt);
  //     thongTin.NganHang_id = bank.id;
  //   }
  //   this.cartS.CapNhatTaiKhoan(this.idTkUpdate,thongTin).subscribe((res:any)=>{
  //     if(typeof res =='object'){
  //       Swal.fire('Thành công',res.data,'success').then(()=>{
  //         this.loadTaiKhoan();
  //       });

  //     }
  //     else{
  //       Swal.fire('Thất bại',res,'error');
  //     }
  //   })
  // }
  
  // addBank(thongTin:any){
  //   this.cartS.ThemTaiKhoan(thongTin).subscribe(res => {
  //     if(typeof res =='object'){
  //       this.loadTaiKhoan();
  //       const preload: any = $('#preloader');
  //       let preloaDiv = document.getElementById("preloader");
  //       preloaDiv.style.display='block';
  //       preload.fadeOut('slow');
  //       Swal.fire('Thành công','Thêm ngân hàng thành công','success').then(()=>{
         
  //       })
        
  //     }
      
      
      
  //   })

  // }


}
