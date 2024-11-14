//object
// const student={
//     name:"ayush",
//     age:12,
//     printmarks:function(){
//         console.log("marks are 90",this.age);
//     }
// }


// const employe={
//     salary(){
//         console.log("salary is 50000");
//     }
// }
// const karan={
//                 salary:50000,
// }

// karan.__proto__ =employe;



// class and constructor in JS


// class student2  {
//     constructor(name) {
//         console.log("student name");
//         this.name=name;
//         console.log(name);
//     }
//     start(brand){
//         console.log("start making a car");
//         this.name=brand;
//         console.log(this.name);
//     }
//     end(){
//         console.log("end making a car");
//     }
// }
 
// let newstudent=new student2("ayush");
// newstudent.start("ayush");


//inheritance in JS

class parent{
    name(){
        console.log("hello parent");
    }
}
class child extends parent {

}
let child1=new child();
child1.name();