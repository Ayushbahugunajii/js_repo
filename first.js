//variable
console.log('hello world');
console.log('ayushbahuguna');
age =18;
console.log(age);
price =18.9;
console.log(price);
x=null;
console.log(x);
y= undefined;
console.log(y);
bool=true;
console.log(bool);

//write form to write variable is camel case = "inAdd"


//variale decleration in js
var price=12.99;
var price=12;
console.log(price);// you can update var multipule time 

 let newName="ashu";
 newName="ayu";
 console.log(newName); // you can not create a same variable but redfined it

 const newAge= 19;// you can not update const variable or not change the type of variables 
 console.log(newAge);


 //data type

 // 1. primitive DT

 //number,string,bool,null,undefiend,null, bigInt ,Symbol

// non-primitive
 // array
 //object
const student={
    studentName : "ayush",
    // student Name = key and "ayush" = value
    age:20,
    rollNumber :6,
};

student ["age"]=student["age"]+1;

console.log(student);

console.log(typeof student);


/*operators 
1.unary = ++,--
*/

let ac=5;
let bc=5;
console.log(ac++);
console.log(++bc);

/* 

2. arithmetic operators = +,-,/,*,%,**

a=2;
b=3;
 c=a**b this means 2*2*2

3. Assignment OP : =,+=,-=,*=,/=;

a=a+1 or a += 1

4. conditional operator : ==,!=,>=.<=,===,!==;
*/

let a=34;
let b=36;
console.log(a==b);
console.log(a!=b);

let A=10;
let B="10";
console.log(A==B);//true 

//of specified a number in variable for compair. 
//then js convert string into a number and then compair.

console.log(A===B);

//this compair the DT of variable

/* logical Operator 

i. logical AND : && 
    A B : C
    1 1 : 0
    1 0 : 0
    0 1 : 1
    0 0 : 0
*/

var ab=10;
var bb=12;
let ans1=ab<=12;
let ans2=bb==12;
console.log("ans1 && ans2 =",ans1 && ans2);

/* logical or || 
    A B : C
    1 1 : 1
    1 0 : 1
    0 1 : 1
    0 0 : 0 

*/
var ab=10;
var bb = 12;
let ans3= ab<=12;
let ans4= bb!=12;
console.log("ans3 && ans4 =",ans3 || ans4);

/* not !
0 : 1
1 : 0 */

var ab=10;
var bb = 12;
console.log("!",ab,">",bb,"=",!(ab>bb));
console.log("!",ab,"<",bb,"=",!(ab<bb));

// concept of comditional statment 

var age =18;
 if(age>18){
    console.log("bada ho gaya ladka");
 }
 if (age=18) {
    console.log("kya karega vote deke");
 } 
 else{
     console.log("bachaa");
 }

 //nasted if else

 if (age%2==0){
    if (age==18){
        console.log("hello");
    }
 }
else{
    console.log("hii");
}

//condition OP / ternary

var age=15;

age >= 16 ? console.log("adult") : console.log("not adult");

// switch case

var apple="red";
switch (apple) {
    case "yellow":
        console.log("hello");
        break;
        case "red":
            console.log("apple  is red");
            break;
    default:
        console.log("kuch v");
        break;
}

//promt use for take input from user
// var name1=prompt("name likh");

//show alert 
// alert(name1);


/* loops

    for 
    while 
    do while 
*/


var num;
for(num=1;num<=10;num++){
    num+= 1;
}

console.log(num);

//while loop
var num3=1;
while (num3<=10) {
    console.log(num3);
    num3++;
}

//do while loops

var num=1;
do{
    console.log("hello");
    num++;
}while (num<=10) 

//for-each or for of loop

var j=['ayush','tumun','tushar']
for(var i of j){
    console.log(j);
}

var student1={
    name4 : "ayush",
    roll2: 123,
};
for( var key in student1){
    console.log(key,student1[key]);
}


// string in js


var abc="ayush";
console.log(abc[0]);


//litteral

var obj={
    name : 'ayush',
    roll : 12,
}
console.log(`obj name is ${obj.name} and roll number ${obj.roll}`);

// string methods

var str ='ayush';
var str1=str.toUpperCase();
console.log(str1);

// toLowercase

//str.trim()

let college="    gp gauchar";
console.log(str.trim());

// array in java script 


let stuName=['ayush','tumun','tushar']
let marks=[10,9,10]

for(var i=0;i<=stuName.length;i++){
    console.log(stuName[i]);
}

// for(var i of stuName){
//     console.log(i);
// }


// Array method

//push

var item=['pen','book','table','bag'];
console.log(item);
item.push('mouse');
console.log(item);

//pop to remove array element from the end 
item.pop();
console.log(item);

console.log(item.toString());