// let iv=document.querySelector("div");
// console.log(iv);
//  let id=iv.getAttribute("id");
//  console.log(id);
let hii=document.querySelector("div");
console.log(hii);

let newbtn=document.createElement("button");
newbtn.innerText="text me";
console.log(newbtn);

// insert Element ending 
// Append=node.append(el)adds at the end of node(inside)

// let div=document.querySelector("hii");
// hii.append(newbtn);//this is add add button in your form 

// insert Element to starting
// Append=node.prepen(el) adds at the end of node(inside)

// let div1=document.querySelector("hii");
// hii.prepend(newbtn); this is add add button in your form 

/*two more element */
let di2=document.querySelector("hii");
hii.before(newbtn);

// let div3=document.querySelector("hii");
// hii.after(newbtn);

/**that add btn to end of outer side if the div**/



//****create a new element using JS*****
let newHeading=document.createElement("H1");
newHeading.innerHTML="Hello World";

document.querySelector("body").prepend(newHeading);

/***code for removing heading from html form using JS */

// let rem=document.querySelector("h1");
// rem.remove();


/**remove the first child(list) from the code  */

let per=document.querySelector(".hii");
let child1=document.getElementById("child");
per.removeChild(child1);

/**remove child without access parent node  **/

let child2=document.querySelector("demo2");
if(child2.parentNode){
   child2.parentNode.removeChild(child1);
}
