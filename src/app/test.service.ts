import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { Observable, throwError, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";
import {map, filter, scan, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private http: HttpClient) {}

  private _url = "/assets/employerfdsfsde.json";

  getTestData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Side Error");
  }
}
