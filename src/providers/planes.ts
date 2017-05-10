import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Planes {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getPlanes(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/plans')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createPlan(plan){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/plans', JSON.stringify(plan), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updatePlan(plan){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = plan.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/plans/' + id, JSON.stringify(plan), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deletePlan(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/plans/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
