import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  public LayDanhSachUser(){
    const linkApi= `https://api.khoahocdt.com/api/User`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.get(linkApi);
    return observable;
  }
  public LayDanhSachGiangVien(){
    const linkApi= `https://api.khoahocdt.com/api/GiangVien`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.get(linkApi);
    return observable;
  }
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
  public LoginGoogle(thongTin){
    const linkApi= `https://api.khoahocdt.com/api/Login/GetGoogleUser`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.post(linkApi,thongTin,{headers:{'Content-Type':'application/x-www-form-urlencoded;application/json'}})
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
  public XemGhiDanhKhoaHoc(){
    const linkApi= `https://api.khoahocdt.com/api/Admin/DanhSachGhiDanhKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
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
  public UpGiangVien(idUser):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/Admin/CapQuyenGiangVien/User/${idUser}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
 
    const observable = this.http.post(linkApi,null,{headers:{'Authorization':`Bearer ${tokenParse}`}})
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
  public LayChiTietGiangVien1(id):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${id}`;
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
  public TaiKhoanBanCurrent():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/TaiKhoanNganHang/Current`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UpdateBank(idTaiKhoan:number,body:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/TaiKhoanNganHang/${idTaiKhoan}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public DelBank(idTaiKhoan:number):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/TaiKhoanNganHang/${idTaiKhoan}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public AddBank(body:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/TaiKhoanNganHang`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ReportHoaHon():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/Report/HoaDon`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.get(linkApi ,{responseType: 'blob',headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ReportCodeKhoaHoc():Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/Report/CodeKH`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.get(linkApi ,{responseType: 'blob',headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UploadCode(thongtin):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/CodeKhoaHoc/Import`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
 
    const observable = this.http.post(linkApi,thongtin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public DelUser(id):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/User/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public DelGiangVien(id):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ResetPass(email:string):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/Mail/ResetPassword?email=${email}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer'));  
    const observable = this.http.get(linkApi)
    return observable;
  }
  public LayDanhSachLevel(){
    const linkApi= `https://api.khoahocdt.com/api/Level`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemLevel(body){
    const linkApi= `https://api.khoahocdt.com/api/Level`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public CapNhatLevel(idLevel,body){
    const linkApi= `https://api.khoahocdt.com/api/Level/${idLevel}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaLevel(idLevel){
    const linkApi= `https://api.khoahocdt.com/api/Level/${idLevel}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaHoaDon(hoaDonId){
    const linkApi= `https://api.khoahocdt.com/api/HoaDon/${hoaDonId}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }

}
