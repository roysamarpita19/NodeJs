// Inheritance



// class A{ //parent class

// }
// class B{ //child class

// }

var student = function(){
    this.name = 'Test';
    this.age = 25;
    this.mobile = 7882299

}
student.prototype == {
    address:'kolkata',
    getAdd:function(){
        a = 10;
        console.log(a)
    
    }

}
var std = new student()
console.log(std.name, std.age, std.mobile, std.address, std.getAdd())
