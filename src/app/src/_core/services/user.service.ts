import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  public DangKy(thongtin:any):Observable<any>{
    const linkApi= 'https://api.khoahocdt.com/api/Register'
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json');
    const observable = this.http.post(linkApi, thongtin, {headers:{'Content-Type':'application/x-www-form-urlencoded;application/json'}});
    return observable;
  }
  public DangNhap(thongtin:any){
    const linkApi= `https://api.khoahocdt.com/api/Login/Local`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.post(linkApi,thongtin,{headers:{'Content-Type':'application/x-www-form-urlencoded;application/json'}})
    return observable;
  }
  public LoginGoogle(){
    const linkApi= `https://api.khoahocdt.com/api/Login/google`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.get(linkApi);
    return observable;
  }
  public XemChiTietUser(id:any){
    const linkApi= `https://api.khoahocdt.com/api/User/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    // console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`,'Content-Type':'application/x-www-form-urlencoded;application/json'}})
    return observable;
  }
  public KhoaHocCuaToi():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/User/KhoaHocCuaToi`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    // console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}});
    return observable;
  }
  
  public Update(id:any,thongtin:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/User/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.put(linkApi,thongtin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UpdateImage(id:any,thongtin:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/User/${id}/UserUpdateImage`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.post(linkApi,thongtin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public TroThanhGiangVien(thongTin:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/User/TroThanhGiangVien`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.post(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LichSuThanhToan():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/HoaDon`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer'));  
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayChiTietGiangVien():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/Current`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer'));  
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LichSuBanKhoaHoc(id:number):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${id}/LichSuBanKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer'));  
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    
    return observable;
  }
  public UpdateGiangVien(id:any,thongtin:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.put(linkApi,thongtin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
}
