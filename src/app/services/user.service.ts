import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, Register } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  isLoginError =new EventEmitter<boolean>(false);
  userLogin(data: Login) {
    // console.log(data)
    this.http.post(`http://localhost:8080/task/getNameAndPassword`,data, { observe: 'response' }).subscribe((result: any) => {
      console.log(result)
      if (result && result.body) {
        console.log("user login");
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['voting-page']);
        
      } else {
        console.log("user login failed");
        this.isLoginError.emit(true);
      }
    })
  }

  userRegister(data: Register) {
    this.http.post('http://localhost:8080/task/register', data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['voting-page'])

    });

  }

  saveVote(data: any) {
    this.http.post('http://localhost:8080/task/vote', data, { observe: 'response' }).subscribe((result) => {
      localStorage.setItem('vote', JSON.stringify(result.body));
    });

  }

  getCandidateData()
  {
    let url="http://localhost:8080/task/candidateList";
    return this.http.post(url,{ });
  }
}
