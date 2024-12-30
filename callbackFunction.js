// Hello divya
//Hii divya I am the dctor,how can I help you?(after 3 sec)
//you will be alright!

function dctor(name){
    setTimeout( ()=>{
        console.log("Hii"+name+"I am the dctor,how can I help you?");
        
    },3000)
}

function greetUser(name,callback){
   console.log("Hello"+ name );
   callback(name);
}
greetUser("divya",dctor);