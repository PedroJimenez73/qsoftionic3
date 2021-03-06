import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Internos {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getInternos(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/internos')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
  
 
}
