import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Acciones {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getAcciones(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/acciones')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createAccione(accione){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/acciones', JSON.stringify(accione), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateAccione(accione){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = accione.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/acciones/' + id, JSON.stringify(accione), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteAccione(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/acciones/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
