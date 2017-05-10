import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Cursos {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getCursos(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/cursos')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createCurso(curso){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/cursos', JSON.stringify(curso), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateCurso(curso){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = curso.id;
 
    this.http.put('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/cursos/' + id, JSON.stringify(curso), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteCurso(id){
 
    this.http.delete('http://ec2-52-33-205-92.us-west-2.compute.amazonaws.com:3000/api/cursos/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

  
 
}
