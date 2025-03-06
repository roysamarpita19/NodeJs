class User{
    constructor(){
        this.a=8;
        this.b=7;
    }
    getAdd(){
        return this.a+this.b
      
    }
    getSub(){
        return this.a-this.b
    

}
}
var user= new User()
console.log(user.getAdd())
console.log(user.getSub())