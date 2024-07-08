let globalVar = "I'm a global variable";

function demoScope() {
    let localVar = "I'm a global variable";
    console.log(globalVar);
    console.log(localVar);
}

 return demoScope();
console.log(globalVar);
// console.log(localVar);