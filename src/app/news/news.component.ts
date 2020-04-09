import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList:any[]=[]

  constructor(private httpservice: HttpserviceService, private commonservice: CommonserviceService) { }

  ngOnInit() {
    this.commonservice.loadingPresent();
    this.httpservice.getTrendData().subscribe(
      response => {
        this.commonservice.loadingDismiss();
          this.newsList=response["articles"]
      }
    )

  }

}
