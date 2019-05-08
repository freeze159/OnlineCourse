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
  ngOnInit() {
    this.items = JSON.parse(sessionStorage.getItem('cart'));
    this.tongTien();
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
    let count=this.items.length;
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
      Count:count--
    }

    this.cartService.delItems.emit(deleted);

  }
}
