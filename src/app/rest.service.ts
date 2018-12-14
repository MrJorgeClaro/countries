import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserResponse } from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private countriesHttp: HttpClient) { 

  }


  getData(): Observable <UserResponse[]> {
    return this.countriesHttp.get<UserResponse[]>('https://restcountries.eu/rest/v2/all');
   /* .subscribe(data => {
      this.displayData = data;
*
    });*/
  }
}
