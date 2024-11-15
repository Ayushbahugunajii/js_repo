
// //  function name(params) {
// //     console.log("asd");
// // }
// // setTimeout(name,2000);
// // setTimeout(()=>{
// //     console.log("hello");
// // },4000);
// // console.log("ayush");

// //callBack

// function  calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// function sum(a,b){
//     console.log(a+b);
// }

// calculator(1,2,sum);


// // callback hell(Nested call back)

// function database(id,getnextdata){
//     setTimeout(()=>{
//            console.log("data"+id);
//            if(getnextdata){
//             getnextdata();
//            }
//         },2000);
// };
// database(1,()=>{
//     database(2,()=>{
//         database(3,()=>{
//             database(4);
//         });
//     })
    
// })


//promise function   provide by js 
//state of promise
//1.pending 
//2.resolve
//3.reject


// let promise=new Promise((resolve,reject)=>{
//     console.log("promises");
//     resolve(123); ///create by js 
//     reject("some error");
// })


// how promise use in 

function fun1(id,getid){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
          console.log("data"+id);
            if(getid){
            getid();
           }
           resolve("sucess");
        },2000);  
    });
}
fun1(1);
    


const getpromise=(()=>{
    return new Promise((resolve,reject)=>{
        console.log("resolve issue");
        resolve("sucess");
        // rejected("errror hai")
    })
})

let promise=getpromise();

promise.then((er)=>{  //then is use when promise is resolve
  console.log("complet",er)
})


promise.catch((sd)=>{   //that run when promise is reject
    console.log("error",sd);
})
