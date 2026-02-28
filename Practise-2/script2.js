//Javascript Basic
// let a = 10;
// let b = 20;
// console.log((" sum of "+ a +" and "+ b + " is "+ a+b));
// // sum of a and b is 1020.
// console.log((" sum of "+ a +" and "+ b + " is "+ (a+b)));
// //sum of a and b is 30.

// 2)
// let a = 10;
// let b = ++a;
// console.log(a,b); /* 11 11 */
// console.log(a++ - ++a + --a + a--); //(10-12+11+11= 20)

// 3)Javascript Math Functions
//
// console.log(Math.ceil(10.3)); //ans = 11

// console.log(Math.floor(10.3)); //ans = 10

// console.log(Math.round(10.5)); // ans = 11

// console.log(Math.round(10.4)); // ans = 10

// console.log(Math.abs(-7)); // ans = 7

// console.log(Math.trunc(10.56498465161)); // ans= 10

// console.log(Math.pow(5 , 2)); //ans = 25

// console.log(Math.sqrt(36)); // ans = 6

// console.log(Math.sqrt(37));  // ans= 6.082762530298219

// console.log(Math.cbrt(125)); // ans = 5

// console.log(Math.cbrt(40)); // ans = 3.419951893353394

// console.log(Math.max(40 , 10 , 5, 34 , 56 , 22)); // ans = 56

// console.log(Math.min(40 , 10 , 5, 34 , 56 , 22)); // ans = 5

// console.log(Math.random()); /*It will always give any random value when refreshed between 0 and 1 and no need to give it any value inside().*/

// ans = 0.9608337808799973 or 0.49183741796230795 or 0.5385335570443096
// let a = 234.0899;

// console.log(a.toFixed(2)); // ans = 234.09

// compound interest formula = (p *(1+r/100)^t) - p

// let p = Number(prompt("Enter principle")) /*prompt to ask a value */

// let r = Number(prompt("Enter rate"))

// let t = Number(prompt("Enter time"))

// console.log(p*Math.pow(1+r/100,t)- p)

// eg: p = 2000,r = 3, t = 2, ans = 121.79999999999973

// Area of Triangle With Heron's Formula

// let a = Number(prompt("Enter a number"))

// let b = Number(prompt("Enter b number"))

// let c = Number(prompt("Enter c number"))

// if(a+b <= c || a+c <= b || b+c <= a){
//     console.log("Not possible");
// }
// else{
//     let s = (a+b+c)/2
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }
// eg: a=5,b=3,c=4 || ans=6


// Circumference of Circle
// let r = Number(prompt("Enter a number"))
// console.log(2*Math.PI*r);

// 4)if-else
// if(10<9 || 10<7){
//     console.log("Hello World");
// }
// else{
//     console.log("Bye World");
// }

// if(10<9 || 10<7){
//     console.log("Hello World");
// }
// else if(10===10){
//     console.log("Hell World");  // keep space between elseif -> else if
// }
// else{
//     console.log("Bye World");
// }

// let a = Number(prompt("enter a number"));
// if(a%2 == 0) console.log("even");
// else console.log("odd")

// let age = Number(prompt("Enter your age"))
// let name = prompt("Enter your name")
// if (age >= 18) console.log("yes,"+ name + " is a valid voter.");
// else console.log("no,"+ name + " is not  a valid voter.");

// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter third number"))
// if(a > b & c) console.log("a is the greatest number")
//     else if(b > a & c) console.log("b is the greatest number")
//        else console.log("c is the greatest number")

// let y = Number(prompt("enter a year"))
// if(y%4==0||y%400==0){
//     if(y%100 != 0){
//         console.log("This " + y +" is a leap year");
//     }
// } 
// else {console.log("This "+ y +" is not a leap year");}

// 1)
// function calculateCompoundInterest(P, r, t, n) {
//    let A =  P*Math.pow((1+r/(n)),(n*t));
//    let CI = A - P;
//    return CI.toFixed(2);// Write your logic here
// }

// module.exports = { calculateCompoundInterest };

// 2)
// function calculateTriangleArea(a, b, c) {
//     let s = (a+b+c)/2;
//     let A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     return A.toFixed(2);
// }

// module.exports = { calculateTriangleArea };

// 3)
// function calculateCircleProperties(r) {
// let C = 2*Math.PI*r;
// let A = Math.PI*(r*r);
// return [C.toFixed(2),A.toFixed(2)];
// }
// module.exports = { calculateCircleProperties };




// let a = Number(prompt("Enter a Amount"));
// let x = 0;
// if(a<=5000) x = 0 
//     else if(a<=7000&&a>5000) x = 5;
// else if(a<=9000&&a>7000) x = 10;
//     else x = 20

//     console.log(a - (a*x/100))

