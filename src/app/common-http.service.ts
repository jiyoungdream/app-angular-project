import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonHttpService {

  constructor(
    private http: Http
  ) { }

  getList(callback) {
    this.http.get('http://localhost:3000/getlist')
             .toPromise()
            //  .then(response => response.json().data)
            .then( data => {
              let body = JSON.parse( data['_body'] );
              console.log("2222"  + JSON.stringify(body));
              callback(body);
              // return JSON.stringify(body);
            })
            .catch(this.handleError);


     // return this.http.get('http://localhost:3000/getlist')
     // .subscribe(data => {
     // // Read the result field from the JSON response.
     // //  console.log(JSON.stringify(data));
     //   data["_body"];
     // });
  }

  getListo() : Observable<JSON> {
    return this.http.get('http://localhost:3000/getlist')
            .map(response => response.json());


     // return this.http.get('http://localhost:3000/getlist')
     // .subscribe(data => {
     // // Read the result field from the JSON response.
     // //  console.log(JSON.stringify(data));
     //   data["_body"];
     // });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
