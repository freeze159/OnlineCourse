import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KhoaHoc } from '../models/khoahoc';

@Injectable({
  providedIn: 'root'
})
export class KhoaHocService {

  constructor(private http: HttpClient) { }

  public LayTheLoaiKhoaHoc(): Observable<any> {
    const linkApi: string = 'https://api.khoahocdt.com/api/TheLoaiKhoaHoc';
    let response = this.http.get(linkApi);
    return response;
  }
  public LayMangKhoaHoc(idTheLoai: any): Observable<any[]> {
    const linkApi: string = `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc`;
    let response: any = this.http.get(linkApi)
    return response;
  }
  public LayDanhSachKhoaHoc(idMangKH: any): Observable<any[]> {
    let response: any = this.http.get(`https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKH}/KhoaHoc`);
    return response;
  }
  public LayChiTietTheLoai(idTheloai):Observable<any>{
    const linkApi: string = `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheloai}`;
    let response = this.http.get(linkApi);
    return response;
  }
  public LayChiTietKhoaHoc(idMangKH,idKhoaHoc):Observable<any>{
    const linkApi: string = `https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKH}/KhoaHoc/${idKhoaHoc}`;
    let response = this.http.get(linkApi);
    return response;
  }
  
  public LayDanhSachBaiGiang(idKH:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKH}/BaiGiang`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public TimKiem(keyword:string){
    const linkApi= `https://api.khoahocdt.com/api/Search?TuKhoa=${keyword}`;
    const observable = this.http.get(linkApi);
    return observable;
  }
  public KichHoat(code:any){
    const linkApi= `https://api.khoahocdt.com/api/NhapCode`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.post(linkApi,code,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayKhoaHocNoiBat():Observable<any>{
    const linkApi: string = `https://api.khoahocdt.com/api/KhoaHocNoiBat`;
    let response = this.http.get(linkApi);
    return response;
  }
  public LayKhoaHocGiangVien(idGiangVien:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${idGiangVien}/KhoaHocDaDay`;
    const observable = this.http.get(linkApi,idGiangVien)
    return observable;
  }
  public ThemKhoaHoc(idMangKh:any,thongTin:any){
    const linkApi= `https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKh}/KhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.post(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UpdateKhoaHocImage(idMangKh:number,idKhoaHoc:number,thongtin:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKh}/KhoaHoc/${idKhoaHoc}/AddOrUpdateImage`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
 
    const observable = this.http.post(linkApi,thongtin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayKhoaHocChoDuyet(idGiangVien:any){
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${idGiangVien}/KhoaHocChoDuyet`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
}
