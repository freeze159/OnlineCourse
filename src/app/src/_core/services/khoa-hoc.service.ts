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
  public LayChiTietMangKhoaHoc(idTheLoai:number,idMangKH: any): Observable<any[]> {
    let response: any = this.http.get(`https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc/${idMangKH}`);
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
  public LayDanhSachBaiGiangPublic(idKH:any):Observable<any>{
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKH}/BaiGiangPublic`;
    // const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi)
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
  public ThemBaiGiang(idKhoaHoc:number,thongTin:any){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/BaiGiang`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemBaiGiangExcel(idKhoaHoc:number,thongTin:any){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/BaiGiang/Import`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UpdateBaiGiang(idKhoaHoc:number,idBaiGiang:number,body:any){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/BaiGiang/${idBaiGiang}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaBaiGiang(idKhoaHoc:number,idBaiGiang:number){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/BaiGiang/${idBaiGiang}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public UpdateKhoaHoc(idKhoaHoc:number,idMangKhoaHoc:number,body:any){
    const linkApi= `https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKhoaHoc}/KhoaHoc/${idKhoaHoc}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaKhoaHoc(idKhoaHoc:number,idMangKH:number){
    const linkApi= `https://api.khoahocdt.com/api/MangKhoaHoc/${idMangKH}/KhoaHoc/${idKhoaHoc}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  //admin The Loai
  public UpdateTheLoai(idTheLoai,thongTin){
    const linkApi= `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaTheLoai(idTheLoai){
    const linkApi= `https://khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemTheLoai(body:any){
    const linkApi= `https://api.khoahocdt.com/api/TheLoaiKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  //admin MangKhoaHoc
  public UpdateMangKhoaHoc(idTheLoai:number,idMang:number,thongTin:any){
    const linkApi= `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc/${idMang}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,thongTin,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaMangKhoaHoc(idTheLoai:number,idMang:number){
    const linkApi= `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc/${idMang}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemMangKhoaHoc(idTheLoai:number,body:any){
    const linkApi= `https://api.khoahocdt.com/api/TheLoaiKhoaHoc/${idTheLoai}/MangKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  // Admin Code
  public LayDanhSachCode(){
    const linkApi= `https://api.khoahocdt.com/api/CodeKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaCode(idCode:number){
    const linkApi= `https://api.khoahocdt.com/api/CodeKhoaHoc/${idCode}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  //Duyet Khoa Học
  public LayKhoaHocChuaDuyet(){
    const linkApi= `https://api.khoahocdt.com/api/Admin/DuyetKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayKhoaHocTuChoi(){
    const linkApi= `https://api.khoahocdt.com/api/Admin/DanhSachKhoaHocTuChoi`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public LayKhoaHocBiTuChoi(idGiangVien){
    const linkApi= `https://api.khoahocdt.com/api/GiangVien/${idGiangVien}/KhoaHocTuChoi`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public DuyetKhoaHoc(body:any){
    const linkApi= `https://api.khoahocdt.com/api/Admin/DuyetKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public TuChoiKhoaHoc(body:any){
    const linkApi= `https://api.khoahocdt.com/api/Admin/TuChoiKhoaHoc`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }

  // Comment
  public LayDanhSachComment(idKhoaHoc){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/Comment`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemComment(idKhoaHoc,body){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/Comment`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public CapNhatComment(idKhoaHoc,idComment,body){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/Comment/${idComment}?`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaComment(idKhoaHoc,idComment){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/Comment/${idComment}?`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  //Cau Hoi
  public LayDanhSachCauHoi(idBaiGiang){
    const linkApi= `https://api.khoahocdt.com/api/BaiGiang/${idBaiGiang}/CauHoi`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemCauHoi(idBaiGiang,body){
    const linkApi= `https://api.khoahocdt.com/api/BaiGiang/${idBaiGiang}/CauHoi`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public CapNhatCauHoi(idBaiGiang,idCauHoi,body){
    const linkApi= `https://api.khoahocdt.com/api/BaiGiang/${idBaiGiang}/CauHoi/${idCauHoi}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaCauHoi(idBaiGiang,idCauHoi){
    const linkApi= `https://api.khoahocdt.com/api/BaiGiang/${idBaiGiang}/CauHoi/${idCauHoi}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable
  }
  // Rate
  public LayDanhSachDanhGia(idKhoaHoc){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/DanhGia`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.get(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public ThemDanhGia(idKhoaHoc,body){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/DanhGia`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.post(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public CapNhatDanhGia(idKhoaHoc,idDanhGia,body){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/DanhGia/${idDanhGia}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.put(linkApi,body,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
  public XoaDanhGia(idKhoaHoc,idDanhGia){
    const linkApi= `https://api.khoahocdt.com/api/KhoaHoc/${idKhoaHoc}/DanhGia/${idDanhGia}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    const observable = this.http.delete(linkApi,{headers:{'Authorization':`Bearer ${tokenParse}`}})
    return observable;
  }
}
