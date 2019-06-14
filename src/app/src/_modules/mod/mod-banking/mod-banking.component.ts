import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { CartService } from 'src/app/src/_core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mod-banking',
  templateUrl: './mod-banking.component.html',
  styleUrls: ['./mod-banking.component.css']
})
export class ModBankingComponent implements OnInit {
  constructor(private userS:UserService,private cartS:CartService) { }
  favoriteSeason: string;
  gender: string[] = ['Mr.', 'Ms.'];
  bankList:any;
  thongTin:any;
  getBankParam:any;
  thongTinChiTiet:any;
  flag=false;
  ngOnInit() {
    this.cartS.LayDanhSachNganHang().subscribe((res:any)=>{
      this.bankList=res;
    })
    this.userS.TaiKhoanBanCurrent().subscribe((res:any)=>{
      
      this.thongTin=res.data;
      
    })
    
  }
  getDatabank(){
    this.userS.TaiKhoanBanCurrent().subscribe((res:any)=>{
      
      this.thongTin=res.data;
      
    })
  }
  getBank(id,stk,ctk,nh,cnnn){
     this.thongTinChiTiet = {
      'id':id,
      'SoTaiKhoan':stk,
      'ChuTaiKhoan':ctk,
      'NganHang':nh,
      'ChiNhanhNganHang':cnnn
    }
    this.flag=true;
    console.log(this.thongTinChiTiet)
      
      
  }
  updateBank(thongTIN){
    thongTIN.SoTaiKhoan=thongTIN.SoTaiKhoan.trim();
    thongTIN.ChuTaiKhoan=thongTIN.ChuTaiKhoan.trim()
    thongTIN.ChiNhanhNganHang=thongTIN.ChiNhanhNganHang.trim();
    thongTIN.id = this.thongTinChiTiet.id;
    if(thongTIN.SoTaiKhoan==''){
      thongTIN.SoTaiKhoan=this.thongTinChiTiet.SoTaiKhoan;
    }
    if(thongTIN.ChuTaiKhoan==''){
      thongTIN.ChuTaiKhoan=this.thongTinChiTiet.SoTaiKhoan;
    }
    if(thongTIN.ChiNhanhNganHang==''){
      thongTIN.ChiNhanhNganHang=this.thongTinChiTiet.ChiNhanhNganHang;
    }
    if(thongTIN.NganHang_id==''){
      let bank = this.bankList.find(x => x.TenNganHang = this.thongTinChiTiet.NganHang);
      thongTIN.NganHang_id = bank.id;
    }
    const thongTinInput = {
      "SoTaiKhoan" : thongTIN.SoTaiKhoan,
      "ChuTaiKhoan" : thongTIN.ChuTaiKhoan,
      "NganHang_id" : thongTIN.NganHang_id,
      "ChiNhanhNganHang" : thongTIN.ChiNhanhNganHang
    }
    
    this.userS.UpdateBank(thongTIN.id,thongTinInput).subscribe((res:any)=>{
      if(typeof res=='object'){
        Swal.fire('Thành công',res.data,'success');
        this.userS.TaiKhoanBanCurrent().subscribe((res:any)=>{
      
          this.thongTin=res.data;
          
        })
      }
      else{
        Swal.fire('Thất bại',res,'error');
      }
    })

  }
  xoa(id){
    console.log(id)
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: "Không thể khôi phục khi đã xóa!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa ngay'
    }).then(res => {
      if (res.value) {
        let indexDel = this.thongTin.findIndex(x => x.id == id);
        this.thongTin.splice(indexDel, 1);
        this.userS.DelBank(id).subscribe((reS: any) => {
          if (typeof reS == 'object') {
            
            Swal.fire(
              'Đã xóa!',
              reS.data,
              'success'
            )
          }


        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })

      }

    })
    
  }
  addBank(thongTin:any){
    console.log(thongTin);
    this.userS.AddBank(thongTin).subscribe(res => {
      Swal.fire('Thành công','Thêm ngân hàng thành công','success')
      // .then(res=>{window.location.href = '/instructor/bank';});
      
      
    })

  }
}
