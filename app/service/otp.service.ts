import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Otp } from '../models/otp';
import { Verifyotp } from '../models/verifyotp';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OtpService {

  url="https://app-n4ojc2uj3a-uc.a.run.app/"
  

  constructor(private http: HttpClient, private router:Router) { }
  
  insertdata(data:any):Observable<Otp[]>{
    console.log(data);
  return this.http.post<any>(this.url+'sendOTP',data)
 }

 verifyotp(data:any):Observable<Verifyotp[]>{
  console.log(data);
return this.http.post<any>(this.url+'sendOTP/',data)
}
}
