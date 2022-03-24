import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor( private network: HttpClient) { 

  }

  getPost(): Observable<any>{
    return this.network.get("https://jsonplaceholder.typicode.com/posts")
    
  }

 
}
