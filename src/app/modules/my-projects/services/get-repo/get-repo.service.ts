import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRepoService {
  constructor( private http: HttpClient) {}
  
  getRepositories():Observable<any>{
    return this.http.get('https://api.github.com/users/saak01/repos');
  }
}
