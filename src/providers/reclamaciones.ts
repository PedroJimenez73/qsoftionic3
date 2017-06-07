import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Reclamas {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getReclamas(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/reclamas')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createReclama(reclama){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/reclamas', JSON.stringify(reclama), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateReclama(reclama){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = reclama.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/reclamas/' + id, JSON.stringify(reclama), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteReclama(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/reclamas/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
