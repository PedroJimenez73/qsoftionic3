import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Clientes {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getClientes(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/clientes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createCliente(cliente){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/clientes', JSON.stringify(cliente), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateCliente(cliente){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = cliente.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/clientes/' + id, JSON.stringify(cliente), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteCliente(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/clientes/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
