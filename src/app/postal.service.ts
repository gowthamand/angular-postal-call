import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class PostalService {

      constructor(private http: HttpClient) {}

      getPosteData(pincode): Observable<any> {
        const url = "https://api.postalpincode.in/pincode/"+pincode;
        return this.http.get<any>(url)
            .pipe(map((response: Response) => {
                return response;
            }), catchError((Error: Response) => {
                return throwError(Error.status);
            }));
    }


}