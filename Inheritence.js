class User  {
  constructor(name, email){
 this.name = name ;
   this.email = email  ;
}

login () {
   console.log(this.name +  " logged in & email id is " + this.email)
 }
}

class SuperUser extends User {
  constructor(name ,email) {
   super (name , email)
  }
}


//userOne = new user("shubham" , "shubam@gmail.com")

userOne = new User("shubham" , "ryu@gmail.com")

userOne.login()