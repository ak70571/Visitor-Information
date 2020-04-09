import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private homeservice : HomeService) {}
  info : any = {};
  data : any = [];
  email : any;
  urname : String;
  visit_typ : any;
  per_name : any;
  place : any;
  today : any;
  maxDate : any;
  minDate : any;
  starttime :any;
  endtime : any;
     
      register(data){
        
        this.info.urname = this.urname;
        this.info.email = this.email;
        this.info.visit_typ = this.visit_typ;
        this.info.per_name = this.per_name;
        this.info.today = this.today.split("T")[0];
        this.info.starttime = this.starttime.split("T")[1].slice(0,-13);
        this.info.endtime = this.endtime.split("T")[1].slice(0,-13);
        this.homeservice.setObject('person', this.info);
      }
      
      getData(){
          this.homeservice.getObject('person').then(result => {
        if (result != null) {
        console.log('Person: '+ result);
        }
        }).catch(e => {
        console.log('error: ', e);
        });
      }

      ngOnInit() {
      const now = new Date();
      this.today = now.toISOString();
      this.minDate = this.today;
      this.maxDate = this.today;
      }
}
