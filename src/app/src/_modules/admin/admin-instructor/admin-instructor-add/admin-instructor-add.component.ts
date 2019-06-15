import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';

@Component({
  selector: 'app-admin-instructor-add',
  templateUrl: './admin-instructor-add.component.html',
  styleUrls: ['./admin-instructor-add.component.css']
})
export class AdminInstructorAddComponent implements OnInit {

  constructor(private userS:UserService) { }

  ngOnInit() {
    
  }

}
