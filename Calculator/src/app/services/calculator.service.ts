import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import { history } from "../histroy"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private url = "http://localhost:5000/api/history"
  constructor(private http:HttpClient) { }
  getHistory():Observable<history[]> {
   return this.http.get<history[]>(this.url)
  }
  postHistory(data: string) {
    console.log('post histor is called')
    return this.http.post<history>(this.url, { history: data },httpOptions)
  }
  deleteHistory() {
    return this.http.delete<history>(this.url)
  }
}
