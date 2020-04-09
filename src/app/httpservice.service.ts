import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url : any;

  constructor(private httpclient:HttpClient) {
      this.url = "https://newsapi.org/v2/everything?q=bitcoin&from=2020-03-25&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98";
   }

    getTrendData(){
      return  this.httpclient.get(this.url);
    }

    
}
