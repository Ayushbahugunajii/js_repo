 
let click1=document.querySelector("#btn1");
click1.onclick=(e)=>{
    console.log("btn was clicked");
    let am=23;
    let pm=12;
    let time=am+pm;
    console.log(time);
    console.log('haa bhai');
    console.log(e.type);
    console.log(e.target);
}


let click2 = document.querySelector("#btn2");
click2.ondblclick = (e) => {
    alert("or bhai kya haal hai tere"); // This will show an alert when double-clicked
    
}