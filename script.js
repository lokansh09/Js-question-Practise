
// 1)
// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");
// console.info("Hello World");
// console.table({
//     name: "Lokansh",
//     age: 24,
//     city: "Kota"
// });

// 2)
// let a = 35*2-(10/2)+7;
// console.log(a);

// 3) 
// let a = 123;
// console.log (typeof(a));
// /*or we can write as*/
// console.log(typeof 123);
// console.log (typeof("123"));
// console.log (typeof(true));
// console.log (typeof(null));  /* these all can be perform on developer option Console, in browser.*/
// /* null here is blunder showing typeof "object" as it was big mistake while building js and Typetag given to null was 000 so it become an object*/

// 4)i)
// let a = 5;
// let b = 7;
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b); 

// ii)
// [a,b] = [b,a];
// console.warn(a,b);

// iii)
// a = a+b;
// b = a-b;
// a = a-b;
// console.error(a,b);

// 5)i)
// console.group("AAj Ka Hisab");
// console.log("Samosa khaya 10rs");
// console.log("Sabji aayi 100rs");
// console.log("Nariyal paani piya 50rs");
// console.groupEnd();

// /*If we want thata we go to console and dont want whole list to display we will use Collapsed */
// ii)
// console.groupCollapsed("AAj Ka Hisab");
// console.log("Samosa khaya 10rs");
// console.log("Sabji aayi 100rs");
// console.log("Nariyal paani piya 50rs");
// console.groupEnd();

// Medium Question
// 6)
// const obj = {
//     name: "Lokansh",
//     age: 21,
//     email: "test@example.com"
// };
// Object.age = 24;
// console.log(obj);
// /* const value can't be change but it can be updated*/

// obj.email = "Huihuihui";
// /*when doing this it will change the value of email,if we don't want that error to be happen,we will use Object.Freeze*/
// Object.freeze(obj);
// obj.email = "hahaahah"; /*it won't change value.*/

// 7)i)
// Number("50");
// ii)
// parseInt("50");
// iii)
// +"50" /* ans is 50 in above 3 cases. also this perform on Console only*/

// 8)i)
// let str = "JavaScript";
// console.log(str.includes("Script")); //true
// ii)
// str.indexOf("Script") //4 index no. in string,also this perform only on Console
// str.indexOf("Scripta") // -1 means the string is not present in given string.
// console.log(str.indexOf("Script")); //4 for editor

// 9)
// let arr = [1,2,3,4,5];
// let ans = arr.reduce(function(acc, val){
//     return acc + val;
// },0);
// console.log(ans);