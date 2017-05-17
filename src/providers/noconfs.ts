import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Noconfs {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getNoconfs(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/noconfs')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }

  createNoconf(noconf){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/noconfs', JSON.stringify(noconf), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateNoconf(noconf){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = noconf.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/noconfs/' + id, JSON.stringify(noconf), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteNoconf(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/noconfs/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
