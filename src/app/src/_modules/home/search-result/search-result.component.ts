import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private khoaHocService: KhoaHocService, private atv: ActivatedRoute) {}
  seachResult: Array<any> = [];
  flagEx = false;
  key
  p=1;
  ngOnInit() {
    this.atv.params.subscribe((res: any) => {
      const key = res.keyword
      this.key=key.replace(/-/g, " ");
      console.log(this.key)
      this.khoaHocService.TimKiem(this.key).subscribe((res: any) => {
        this.seachResult = res.data;
        console.log(this.seachResult)
        if (this.seachResult.length!=0) {
          this.flagEx=true;
         }
      })
    })

  }

}
