import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  danhSachMang: any;

  constructor(private khoaHocService: KhoaHocService, private atv: ActivatedRoute,private route:Router) {}
  seachResult: Array<any> = [];
  flagEx = false;
  key
  p=1;
  
  getMang(id) {
    this.khoaHocService.LayMangKhoaHoc(id).subscribe((res: any) => {
      this.danhSachMang = res.data;
    })
  }
  dieuHuong(tenMang:string,mangId:number,idTheLoai:number){
    let keyword = '';
    keyword=tenMang;
    let keyWordClean = keyword.replace(/ /g, "-")
    this.route.navigateByUrl(`/tag/${keyWordClean}/${idTheLoai}/${mangId}`);
  }
  ngOnInit() {
    this.atv.params.subscribe((res: any) => {
      const key = res.keyword
      this.key=key.replace(/-/g, " ");
      this.khoaHocService.TimKiem(this.key).subscribe((res: any) => {
        this.seachResult = res.data;
        if (this.seachResult.length!=0) {
          this.flagEx=true;
         }
      })
    })

  }

}
