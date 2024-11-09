// Dom manipulation 

let heading=document.getElementsByClassName("hii");
console.log(heading);

let som1=document.getElementsByClassName("same");
console.log(som1);

let heading1=document.getElementById("click");
console.log(heading1);
// tag name
let yo=document.querySelector("p");
console.log(yo);

//show how many child on it

let hii1=document.querySelector(".div2").children;
console.log(hii1);

//inner text
  
let var1=document.querySelector(".div1");
console.log(var1);


let now=document.getElementById("demo");
console.log(now.innerText);
now.innerText=now.innerText +"from ayush";

//example question

let divs=document.querySelector(".class1");
divs[0].innerText="hee"