import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private friends!: string;


  constructor(private http: HttpClient) { }  


  api ='http://localhost:3000';

   
  // api:String = `api`;


  setfriends(friends:any) {
    this.friends= friends;
    console.log('service fis is :',friends)

  }
  getfriends() {
    console.log('get friens func',this.friends)

    return this.friends;
  }
  



// add user
adduser(value:any){
  console.log("data reached service")
  return this.http.post(`${this.api}/signup`,value)
}

//existingusername
existinguser(value:any){
  console.log(value)

  return this.http.get(`${this.api}/username/${value}`)
}

//userlogin
userlogin(value:any){
  return this.http.post(`${this.api}/login`,value)
}


saveEmail(email:any){
  console.log(email)
  return this.http.post(`${this.api}/email`,email)
}

//for forgot password
checkOTP(otp:any){
  return this.http.post(`${this.api}/otp`,otp)
}

addfriend(value:any,id:any){
  console.log(value)
   return this.http.post(`${this.api}/friend/${id}`,value)
}

displayfriends(){
 return this.http.get(`${this.api}/friendslist`)
}

//for displaying unique details of the user
uniquelanding(userid:any){
return this.http.get<any>(`${this.api}/uniquelogin/${userid}`)
}

// to display details in chatbox
 chatdetails(userid:any,fid:any){
  return this.http.get(`${this.api}/chatroom/${userid}/${fid}`)
}

userlogout(userid:any){
  return this.http.get(`${this.api}/logout/${userid}`) 
}


onlinestatus(friendname:any){
  console.log(friendname)
  const username=friendname.username
  console.log(username)

  return this.http.get(`${this.api}/active/${username}`)

}

addpic(formdata:any,userid:any){

  return this.http.post(`${this.api}/file/${userid}`,formdata)

}

profilepic(userid:any){
  console.log('reached dp service',userid)
  return this.http.get(`${this.api}/displaypic/${userid}`);

}

gettoken() :boolean{
  return !!localStorage.getItem('token')
}


}
