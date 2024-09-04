// function pc() {
//     document.write("my pc is pc 1 <br>");
//     document.write("my pc is pc 2 <br>");

//     document.write("my pc is pc 3 <br>");

// }
// pc(); 
// lets make a argument in functions 
function add(x, y) {
let result = x+y;
return result;
}
let answer= add(5,6);
console.log(answer);
// another method 
function sum(s,u) {
    return x + y;
}
function minus(o,p) {
    return o - p;
}
console.log(add(5,2));
console.log(minus(6,3));

// even or odd
function isEven(number){
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(12));
console.log(isEven(7));
 
// now email valid
// create a e,ail function

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("vim@gmail.com"));

// valid
function mouse(mike) {
    return mike.includes("#") ? true : false;
    
}
console.log(mouse("vim"));