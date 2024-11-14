//we can perform multipule task in one event
let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
    console.log("handler1");
})
btn1.addEventListener("click",()=>{
    console.log("handler2");
})
btn1.addEventListener("click",()=>{
    console.log("handler3");
})
const new1=()=>{
    console.log("handler4");
}
//remove Event from element
 btn1.removeEventListener("click",()=>{
    console.log("handler3");
})

//second method
btn1.removeEventListener("click",new1);



const dark=document.querySelector("#ld");
let mode="light";
dark.addEventListener(("click"),()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(mode);
})