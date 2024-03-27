import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  url = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  request(
    method: string,
    verb: string,
    data?: any
  ): Observable<any> {
    

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token?.replace(/"/g, "")}`,
      },
      body: verb === "delete" ? data : "",
    };

    try {
      //HTTP GET Request
      if (verb == "get") {
        return this.httpClient.get(this.url + method, config);
      }

      //HTTP POST Request
      else if (verb == "post") {
        return this.httpClient.post(this.url + method, data, config);
      }

      //HTTP PUT Request
      else if (verb == "patch") {
        return this.httpClient.patch(this.url + method, data, config);
      }

      //HTTP DELETE Request
      else if (verb == "delete") {
        return this.httpClient.delete(this.url + method, config);
      } else if (verb == "deleteBody") {
        config["body"] = data;
        return this.httpClient.delete(this.url + method, config);
      }

      return new Observable();
    } catch (error: any) {
      return error;
    }
  }

  
}
