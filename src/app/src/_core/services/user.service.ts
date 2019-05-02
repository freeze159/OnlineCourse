import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public DangKy(thongtin:any):Observable<any>{
    const linkApi= 'https://khoahocdt.com/api/Register'
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json');
    const observable = this.http.post(linkApi, thongtin, {headers:{'Content-Type':'application/x-www-form-urlencoded;application/json'}});
    return observable;
  }
  public DangNhap(thongtin:any){
    const linkApi= `https://khoahocdt.com/api/Login/Local`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.post(linkApi,thongtin,{headers:{'Content-Type':'application/x-www-form-urlencoded;application/json'}})
    return observable;
  }
  public XemChiTietUser(id:any){
    const linkApi= `https://khoahocdt.com/api/User/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})

    return observable;
  }
}