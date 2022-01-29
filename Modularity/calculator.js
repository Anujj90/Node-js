//Modularity is a great coding practice which means we should create our code in form of modules, so that it is better to look upon, and avoids confusion, for exam fs module is a section of code, but it has very specific functionality to do, hence we should adopt modularity.
//creating own module

function add(a,b){
    console.log('Sum is', a+b)
}
function sub(a,b){
    console.log('the difference is', a-b)

}
function mul(a,b){
    console.log('product is', a*b)

}
function div(a,b){
    console.log('the product is', a/b)
}
    //it's basically an object, and export our functions in key value method, so that we can use a function which we have defined as a module, in another file, and so this function gets export to wherever called.

module.exports={
    addition : add,
    substract : sub,
    multiply : mul,
    division : div
}