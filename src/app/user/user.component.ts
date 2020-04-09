import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})


export class UserComponent implements OnInit {
  user = {};
  constructor(private homeservice : HomeService) { 
    
  }
  
  ngOnInit() {
      this.homeservice.getObject('person').then(result => {
    if (result != null) {
      this.user = JSON.parse(result);
      console.log("data = "+result);
     }
    }).catch(e => {
    console.log('error: ', e);
    });
  }
  
}
