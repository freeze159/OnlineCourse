import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/src/_core/services/cart.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-bank',
  templateUrl: './admin-bank.component.html',
  styleUrls: ['./admin-bank.component.css']
})
export class AdminBankComponent implements OnInit {
  tenBankHienTai: any;
  idBankUpdate: any;
  fileData: File;

  constructor(private cartS:CartService,private chRef:ChangeDetectorRef) { }
  danhSachBank:any
  dataTableRate:any
  ngOnInit() {
    this.loaiBank();
  }
  loaiBank(){
    this.cartS.LayDanhSachNganHang().subscribe((res:any)=>{
      this.danhSachBank = res;
      this.chRef.detectChanges();

      const table: any = $('#dataTableBank');
      this.dataTableRate = table.DataTable();

    })
  }
  updateTrigger(id,ten){
    this.idBankUpdate=id;
    this.tenBankHienTai=ten;
  }
  xoaBank(id){
    Swal.fire({
      type:'warning',
      title:'Không thể khôi phục sau khi xóa',
      showCancelButton:true,
      confirmButtonText:'Đồng ý xóa'
    }).then(res =>{
      if(res.value){
        this.cartS.XoaNganHang(id).subscribe((res:any)=>{
            if(typeof res == 'object'){
              Swal.fire('Xóa thành công',res.data,'success').then(()=>{
                this.loaiBank();
              })
            }
            else{
              Swal.fire('Thất bại',res,'error');
            }
        })
      }
    })
  }
  update(thongTin:any){
    this.cartS.CapNhatNganHang(this.idBankUpdate,thongTin).subscribe((res:any)=>{
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success').then(()=>{
          this.loaiBank();
        });

      }
      else{
        Swal.fire('Thất bại',res,'error');
      }
    })
  }
  onFileChange(event) {
    this.fileData = <File>event.target.files[0];

  }
  Upload() {
    let formData = new FormData()
    formData.set('file', this.fileData, this.fileData.name);
    this.cartS.ThemNganHangExcel(formData).subscribe((res: any) => {
      if(typeof res =='object'){
        const preload: any = $('#preloader');
        let preloaDiv = document.getElementById("preloader");
        preloaDiv.style.display='block';
        preload.fadeOut('slow');
          Swal.fire('Upload thành công','Đã upload','success');
        
      }
      
    }, err => {
      Swal.fire('Upload thất bại', 'Fail', 'error')
    })
  }

}
