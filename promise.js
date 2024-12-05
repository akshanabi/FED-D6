
let promise = new Promise((resolve, reject) =>
{
    let delivered = true;
    if(delivered == false){
        resolve("Your Product delivered successfully! Pay the amount")
    }else{
        reject("Your product is not delivered yet...Please raise the compliant")
    }
})

promise.then(function(msg){
    console.log(msg);
}).catch (function(err){
    console.log(err);
})