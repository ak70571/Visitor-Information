import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CommonserviceService } from './commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public storage: Storage,private commonservice: CommonserviceService) { }

  async setObject(key: string, object: Object) {
    try {
    const result = await this.storage.set(key, JSON.stringify(object));
    this.commonservice.presentAlert();
    return true;
    } catch (reason) {
    console.log(reason);
    return false;
    }
 }

 async getObject(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  if (result != null) {
  return result;
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }
}
