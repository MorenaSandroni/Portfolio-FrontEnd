import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private http:HttpClient) { }

  getdataproject():Observable<any> { 
    return this.http.get('./assets/data/data.json');
  }
}
