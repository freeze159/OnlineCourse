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
    const linkApi: string = 'https://dtonlinecourses.000webhostapp.com/api/TheLoaiKhoaHoc';
    let response = this.http.get(linkApi);
    return response;
  }
  public LayMangKhoaHoc(idTheLoai: any): Observable<any[]> {
    const linkApi: string = `https://dtonlinecourses.000webhostapp.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc`;
    let response: any = this.http.get(linkApi)
    return response;
  }
  public LayDanhSachKhoaHoc(idMangKH: any): Observable<any[]> {
    let response: any = this.http.get(`https://dtonlinecourses.000webhostapp.com/api/MangKhoaHoc/${idMangKH}/KhoaHoc`);
    return response;
  }
  public LayChiTietTheLoai(idTheloai){
    const linkApi: string = `https://dtonlinecourses.000webhostapp.com/api/TheLoaiKhoaHoc/${idTheloai}`;
    let response = this.http.get(linkApi);
    return response;
  }
  public LayChiTietKhoaHoc(idMangKH,idKhoaHoc):Observable<any>{
    const linkApi: string = `https://dtonlinecourses.000webhostapp.com/api/MangKhoaHoc/${idMangKH}/KhoaHoc/${idKhoaHoc}`;
    let response = this.http.get(linkApi);
    return response;
  }
  // public LayDanhSachPhim(): Observable<any[]> {
  //   let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03');
  //   return response;
  // }

}
