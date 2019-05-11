import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/src/_core/services/cart.service';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private khoaHocService: KhoaHocService) { }
  items: Array<any> = []
  totalPrice: number = 0;
  flag=true;
  count:number=0
  thongTinBuyer:any;
  ngOnInit() {
    this.items = JSON.parse(sessionStorage.getItem('cart'));
    this.tongTien();
    this.count=this.items.length;
    //Lấy thông tin buyer từ local
    const res:any = JSON.parse(localStorage.getItem('userLogin'));
    this.thongTinBuyer =res.data
    console.log(this.thongTinBuyer);

  }
  tongTien() {
    for (let item of this.items) {
      this.totalPrice += JSON.parse(item.Gia);
    }
  }
  Xoa(id) {
    //Tim id xoa ngoai giao dien
    let indexDel = this.items.findIndex(x => x.Id == id)
    //Gia Xoa
    let priceDef = this.items.find(item => item.Id == id);
    this.items.splice(indexDel, 1);
    this.totalPrice -= priceDef.Gia;
    this.count=this.items.length;
    // this.countItem=count--;
    this.count=this.count--;
    // xoa trong storage
    let newItems = this.items;
    if(newItems.length==0){
      sessionStorage.removeItem('cart');
      this.flag=false;
    }
    else{
      sessionStorage.setItem('cart',JSON.stringify(newItems));
    }
    let deleted = {
      Flag:this.flag,
      Count:this.count
    }
    
    this.cartService.delItems.emit(deleted);

  }
  conFirm(thongTinBuyer){
    // Lấy item cart => string
    const cartItems=JSON.parse(sessionStorage.getItem('cart'));
    let listKh='';
    for(let item of cartItems){
      listKh+=item.Id+',';
    }
    const listKhFixeđ =listKh.slice(listKh.length-listKh.length,listKh.length-1)
    //Truyền thông tin buyer
    thongTinBuyer.HoTenBuyer = this.thongTinBuyer.name;
    thongTinBuyer.EmailBuyer =  this.thongTinBuyer.email;
    thongTinBuyer.DienThoaiBuyer = this.thongTinBuyer.SoDienThoai;
    thongTinBuyer.MangKH_id = listKhFixeđ;
    console.log(thongTinBuyer);
    //Call Api
    this.cartService.ThanhToan(thongTinBuyer.MangKH_id,thongTinBuyer.HoTenBuyer,
      thongTinBuyer.EmailBuyer,thongTinBuyer.DienThoaiBuyer,thongTinBuyer.DiaChiBuyer).subscribe((res:any) =>{
        const linkThanhToan = res.data;
        window.location.href=linkThanhToan;
      })
      
  }
}
