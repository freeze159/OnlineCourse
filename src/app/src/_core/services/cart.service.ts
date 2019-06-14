import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  @Output() cart = new EventEmitter();
  @Output() delItems = new EventEmitter();
  public ThanhToan(MangKH_id:string,HoTenBuyer:string,EmailBuyer:string,DienThoaiBuyer:string,DiaChiBuyer:string){
    const linkApi= `https://api.khoahocdt.com/api/NganLuong/ThanhToan?MangKH_id=${MangKH_id}&HoTenBuyer=${HoTenBuyer}&EmailBuyer=${EmailBuyer}&DienThoaiBuyer=${DienThoaiBuyer}&DiaChiBuyer=${DiaChiBuyer}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayDanhSachNganHang(){
    const linkApi= `https://api.khoahocdt.com/api/NganHang`;
    const observable = this.http.get(linkApi)
    return observable;
  }
}
