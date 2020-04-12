/* questiopn 6 --> Explain the concept of prototypes in JS. How is it related to Classes in ES6 */

// javascript is a prototype based language

// all the instances of an object inherits properties from its prototye which acts as a template

// there can be prototypes within prototypes which are the nested prototypes

// understanding prototypes

// lets define a function constructor  car as 
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}


// now if we create two instances of car

let car1 = new Car("Honda", "white");
let car2 = new Car("BMW", "black");

// now lets declare a property "type" in car1
car1.type = "sedan";

// we can access car1.type as
console.log(car1.type);  // should print sedan

// we can't access car2.type as it is not there
console.log(car2.type); // returns undefined

// so lets declare property "engineType" in its prototype
Car.prototype.engineType = "v8";

// now if we try and print engineType for different instances of car we get v8
// engineType is inherited from prototype which is available to all instances
console.log(car1.engineType);
console.log(car2.engineType);  


// ES6 extends the concept of prototypes to classes so that every object that is an instance of that class will inherit all properties from prototype
class Student{
    
    constructor(name , rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }
}

// creating prototype of class Student
// here this refers to the class
Student.prototype.studentDetails = function(){
    console.log(`Name of student is ${this.name} and roll number is ${this.rollNumber}`);
}

// creating objects of class Student
let student1 = new Student("sarvesh",25);
let student2 = new Student("ayan",02);

// accessing function in prototype using objects
student1.studentDetails();
student2.studentDetails();

// if we create a function specific to an object we can't call it from other
student1.age = 20;
console.log(student2.age); // undefined
console.log(student1.age); // returns 20
