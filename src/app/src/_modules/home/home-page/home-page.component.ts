import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private location:Router) { }
  loggin:boolean=false
  ngOnInit() {
    if(localStorage.getItem('userLogin')){
      this.loggin=true;
    }
  }
  search(key:any){
    let keyword = '';
    keyword=key.keyWord;
    let keyWordClean = keyword.replace(/ /g, "-")
    this.location.navigateByUrl(`/ket-qua/${keyWordClean}`);
    
  }
}
