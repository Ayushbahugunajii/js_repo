// starts with function 

function fub(info){
    console.log("hey every one ");
    console.log("i'm learning js");
    console.log(info);
}

fub("my short intro");

function sum(a,b){
    s = a + b;
    return s;
}

sum(10,20);
console.log(s);


// array function // arrow function (=>//this )

var arrowffun =(a,b)=>{
    console.log(a+b);
}
arrowffun(2,4);


function main(str){
    var count;
    for(var sp of str){
        if(sp === "a" || sp==="e "|| sp==="i" || sp==="o" || sp==="u"){
            count ++;
        }
        console.log(count) ;
    }
}
main('apple');


// for each loop in array

let arr=[1,2,3,4];

arr.forEach(function printVal(val){
    console.log(val)
});

arr.forEach((val)=>{
    console.log(val)
});


//higerher order function 
//if any function taking values or return any value is higer order function  

let aa=2;


function sum(aa){
 s=aa*aa;
 return sum;
}
sum(aa);
console.log(s);

//or

let no=[1,2,3,4,5,6];

no.forEach((no1) => {
    console.log('all')
    console.log(no1*no1);
});

// important array method 

//map array

let arra=[4,4,6,7];

let hero=arra.map((val)=>{
    return val*2;
})
console.log(hero);

// filter function 

let chai=[1,2,3,4,5,];
let cup=chai.filter((val)=>{
    return val%2==0;
})
console.log(cup);



//reduced array 

let red=[4,5,6,7,8];
red.reduce((res,curr)=>{
 console.log(res+curr);
})

// how to find large number in array

let large=[23,34,5,2,1];

let result=large.reduce((res,con)=>{
    return res > con ? res:con;
})
console.log(result);

//create a array based on user input

let marks=[];
for (let index = 0; index < array.length; index++) {
    marks[i-1]=i; 
}