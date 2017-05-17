import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Riesgos {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getRiesgos(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/riesgos')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }

  createRiesgo(riesgo){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/riesgos', JSON.stringify(riesgo), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateRiesgo(riesgo){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = riesgo.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/riesgos/' + id, JSON.stringify(riesgo), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteRiesgo(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/riesgos/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
