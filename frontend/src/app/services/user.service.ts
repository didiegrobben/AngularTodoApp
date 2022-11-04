import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient, private toastrService:ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user)
          this.toastrService.success(`welcome ${user.name}`,'login succesful');
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'login failed');
          
        }
      }));

  }

  private setUserToLocalStorage(user: User){
    localStorage.setItem('User', JSON.stringify(user))
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem('User');
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
