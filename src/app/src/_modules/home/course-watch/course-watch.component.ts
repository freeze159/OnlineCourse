import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements OnInit {
  @ViewChild('vid') videos:ElementRef
  @ViewChild('link') links:ElementRef
  baiGiang:any=[
    {TenBaiGiang:'Bai 1',Link:'https://www.youtube.com/embed/4hiV5WH3vm8'},
    {TenBaiGiang:'Bai 2',Link:'https://www.youtube.com/embed/ux3rRgUV2MM'},
    {TenBaiGiang:'Bai 3',Link:'https://www.youtube.com/embed/akXGSw7H49Y'},
    {TenBaiGiang:'Bai 4',Link:'https://www.youtube.com/embed/akXGSw7H49Y'},
  ]
  constructor() { }

  ngOnInit() {
    //Accordion

    //icon
    document.getElementById('openNav').innerHTML='<i class="fa fa-bars">'
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.getElementById("openNav").id='closeNav';
    setTimeout(()=>{document.getElementById("openNav").onclick=this.closeNav;},200)
    document.getElementById('openNav').innerHTML='<i class="fa fa-times"></i>'
    

  }
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    setTimeout(()=>{document.getElementById("openNav").onclick=this.openNav;},200)
    document.getElementById('openNav').innerHTML='<i class="fa fa-bars">'

  }
  changeLecture(video:string){
    this.videos.nativeElement.src=video;
    console.log(this.videos.nativeElement.src);
    console.log(this.links.nativeElement);
  }
}
