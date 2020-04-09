import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  resdata : any = [];
  newsList:any[]=[]

  constructor(private httpservice: HttpserviceService) { }

  ngOnInit() {

    this.httpservice.getTrendData().subscribe(
      response => {
          this.newsList=response["articles"]
      }
    )

  }

}
