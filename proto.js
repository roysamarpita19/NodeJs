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
//  need to print the table of a number using loop

var student = function(){
    this.name = 'Test';
    this.age = 25;
    this.mobile = 9135467672
}


student.prototype = {
    address:'Kolkata',
    getAdd:function(){
        var n = 5;
        for(var i = 1; i<=10; i++){
            var table = n * i;
            console.log(table)
        }
    }
}


var std = new student()
console.log(std.getAdd())
