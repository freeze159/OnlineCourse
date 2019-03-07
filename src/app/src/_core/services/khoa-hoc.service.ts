import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KhoaHoc } from '../models/khoahoc';

@Injectable({
  providedIn: 'root'
})
export class KhoaHocService {

  constructor(private http:HttpClient) { }
  public LayDanhSachKhoaHoc():Observable<any[]>{
    let response:any = this.http.get('https://dtonlinecourses.000webhostapp.com/api/KhoaHoc');
    return response;
  }
}
