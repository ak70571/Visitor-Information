import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public storage: Storage) { }

  async setObject(key: string, object: Object) {
    try {
    const result = await this.storage.set(key, JSON.stringify(object));
    console.log('set Object in storage: ' + result);
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
    console.log("Orignam"+result);
  return result;
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }
}
