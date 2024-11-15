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




class engineer{
    constructor(){
        console.log("human");// if oyu create constructor in parent class then extand by child all prop came into child class 
    }
    start(){
        console.log("work");
    }
    mid(){
        console.log("lunch");
    }
    end(){
        console.log("coding");
    }
}
class student extends engineer{
    start(){
        super.mid();// super keyword is used to acces the parent class methos without calling parent class constructor
        super.end();
        console.log("sleep"); // if you have same method in parent and child then it will call child method run
    }
}

let student1=new student();
student1.start();

// student1.mid();
// student1.end();


//one more use of super keyword is to call parent class constructor from child class constructor

console.log("second");

class a{
    constructor(){
        console.log("merry working on react ");
    }
}
class b extends a{
    constructor(){
        super();// so that why you have to specife the super keyword in child class constructor
        console.log("merry where are you");
    }
}

let mom=new b();

//practice question
 
console.log("college data");
class college{
   setvalue(name,roll) {
        this.name=name;
        this.roll=roll;
    }
    gettvalue(){
        console.log(this.name);
        console.log(this.roll);
    }
}

let std1=new college();
std1.setvalue("ayush",17);
std1.gettvalue();

 
    // let stname=document.getElementById("name");
    // let stroll=document.getElementById("Number");
    // let btn=document.getElementById("submit");

    // btn.addEventListener('click',function(){
    //     let inputvalue=stname.value;
    //     let inputvalue2=stroll.value;

    //     alert(stname);

    // })



//error handling

let a12=10;
let ans;
try{
    ans=a12/0;
    console.log(ans);
}
catch(e){
    console.log("An error occurred: " + e.message);
}
console.log("ayush")