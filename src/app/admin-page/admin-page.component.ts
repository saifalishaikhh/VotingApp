import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  empList:any;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.getCandidateListDetails();
  }

  getCandidateListDetails(){
    this.user.getCandidateData().subscribe(response => {
      // console.log(response)
      this.empList = JSON.parse(JSON.stringify(response))['empList']; 
    });
  }
}
