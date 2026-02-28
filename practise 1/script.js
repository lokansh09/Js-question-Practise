
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


// 10)
// function calculateCompoundInterest(P, r, t, n) {
//    let A =  P*Math.pow((1+r/(n)),(n*t));
//    let CI = A - P;
//    return CI.toFixed(2);// Write your logic here
// }

// module.exports = { calculateCompoundInterest };


// 11) 
   // use a for loop to print no's in reverse
   // for(let i=10;i>=1;i--){
   //    console.log(i);
   // }
   // or
   // var i = 10;
   // while(i>0){
   //    console.log(i);
   //    i--;
   // }

   // 12)
   // let i = 1
   // while (i < 11){
   //    console.log(3*i)
   //    i++
   // }

   // 13)
   // let sum = 0;
   // for(let i = 1;i<101;i++){
   //    sum += i;
   // }
   // console.log(sum);
   // or
   // let i = 1;
   // let sum = 0;
   // while(i>0 && i<101){
   //    sum += i;
   //    i++;
   // }
   // console.log(sum);
  
   // 14) 
   // let str = "JavaScript"
   // for (let i of str){
   //    console.log(i)
   // } 
   /*   J
        a
        v
        a
        S
        c
        r
        i
        p
        t*/

      //   15) We will be using here javascript in-built methods
      // Remove duplicates value from array
      // let arr = [1,1,2,2,3,4,5,7];
      // let arr2 = [...new Set(arr)];

   // 16)
   // let arr =[3,1,1,2,3,4,5,8,9,7,8,9,4,5,6,7,7]; /*this array is same for all below solution*/
   // let ans = [...new Set(arr)];
   // let arr2 = ans.sort(function(a,b){
   //    return b - a;
   // });
   // console.log(arr2)  /* 9,8,7,6,5,4,3,2,1 */
   //  console.log(arr2[1]) /* 8 */
   // or
   // console.log([...new Set(arr)].sort(function(a,b){
   //    return b - a;
   // })[1]);

   // i)
   // ***descending order
   // var ans = arr.sort((a,b) => b-a);

      // ii)
   // ***Reverse a number
   // let arr2 = [];
   // for(let i = arr.length - 1; i>=0; i--){
   //    arr2.push(arr[i])
   // };

      // iii)
   // finding Number of times a value is coming in an array
   // let obj = {};
   //    arr.forEach(function(val) {
   //    obj [val] === undefined ? obj[val] = 1 : obj[val]++;
   // });

   // 17) Creating a function that take another function as an argument and calling it after 3 sec(HOF+CB)
      // function callerfunc(fn){
      //    setTimeout(fn, 3000);
      // };
      // callerfunc(function(){
      //    console.log("Hey")
      // });

      // 18) Implement your own version of '.map' as a H-O-File.
         // let arr = [1,2,3,4,5]
         // function hap(a,fn){                                      /* a = arr and fn = function jo ki de rha hai ek value*/
         //    let newarr = [];
         //    for(let i = 0;i < a.length; i++){                   /*Logic of this code,jo bhi array aaye uspe loop chalao,and for each use nhi kr skte kyuki fir newarr return nhi kr payega*/ 
         //     newarr.push(fn(a[i]));                               /*and fir usko new variable 'newarr' mai, kyuki wo function ke andar hai, toh function ke sath usko cll krke uske andar arr[i] push kr do */
         //    }
         //    return newarr;                                        /*Jo newarr hai wo ek function hai hai, toh usse return krna jaruri hai */
         // };
         // let ans = hap(arr, function(value){                      /*yha per,mtlb jo upr hap function() hai iske andar likha hai wo yha pe same hai,same naam likho ya different koi farak nhi padta*/
         //    return value+2;
         // })

         /*.map() internally ese kaam krta hai:- callback(value, index, array)*/
      //    arr.map(function(value, index, array){
      //    console.log(value);  // element
      //    console.log(index);  // position
      //    console.log(array);  // pura original array
      // });
      // newarr.push(fn(a[i], i, a));
      //             And
      //    fn = callback function
      //    a[i] = current element
      //    i = current index
      //    a = original array
         
      // 19) Write a function that uses a closure to create a counter
      //  function counter(){
      //    let count = 0;
      //    return function(){
      //       count++ ;
      //       console.log(count);
      //    };
      //  }

      //  let ans = counter();
      //  ans();                         /* 1 */
      //  ans();                         /* 2 */
      //  ans();                         /* 3 */

      // 20) implement a function that limits how many times another function can be called(Closure + HOF)
      // function fnlimit(fn, limit){                           /* fn = callback function jo limited times execute hoga i.e function(){} and limit = maximum allowed executions,here 3 */
      //    let totalcalled = 0;                   /* totalcalled = closure variable to track count */
      //    return function(){
      //       if(totalcalled < limit){
      //          totalcalled++;
      //          fn();                             /* fn = callback function jo maximum 'limit' times execute hoga */
      //       }
      //          else{
      //             console.error("Limit reached, Buy Pro pack for more limits!")
      //          }
      //    };
      // }


      // let limitier = fnlimit(function(){                       /* limitier = ye ek naya function hai jo fnlimit() se return hua ; jab bhi limitier() call hoga, ye check karega ki fn ko abhi tak kitni baar call kiya gaya ; aur agar limit cross nahi hua hai to fn execute karega, warna kuch nahi karega*/
      //    console.log("Hello");
      // }, 3);
         
      // Output:-
      // limitier();   /* Hello */
      // limitier();  /* Hello */
      // limitier();   /* Hello */
      // limitier();   /* nhi chalega,we exceeded limit. */

      // 21) Create a function that takes a callback and executes it after every `n` seconds indefinitely.
      //  function abcd(fn, time){
      //    setInterval(fn , time);
      //  }
      //  let check = abcd(function(){
      //    console.log("Hey");
      //  },2000)

      //          OR

      //   function abcd(fn, time){
      //    setInterval(fn , time * 1000);
      //  }
      //  let check = abcd(function(){
      //    console.log("Hey");
      //  },2)

      // 22) Implement a function that returns a function with a preset greeting (Closure).
      //  function greet(Greetings){
      //    return function(name){
      //       console.log(`${Greetings} ${name}`);
      //    };
      //  }
      //  let a = greet("You look Awesome today!");
      // a("Lokansh");                                                          /*Output:- Lokansh,You look Awesome today!*/
      // a("Rishi");                                                            /*Output:- Rishi,You look Awesome today!*/
      // let f = greet("Hola!");
      // f("Lokansh");                                                          /*Output:- Lokansh,Hola!*/
      // f("Rishi");                                                            /*Output:- Rishi,Hola!*/

      // 22)Implement a function that takes a callback and only executes it once (HOF + Closure).
   //   function rep(fn){
   //    let executed = false;
   //       return function(){
   //         if(!executed){
   //          executed = true;
   //             fn();
   //             }
   //          else{
   //             console.error("Already executed once!")
   //          }
   //          };
   //       }
   //    let once = rep(function(){
   //       console.log("Hello");
   //    });
   //    once();                                    /*Output:- hello */
   //    once();                                    /*Output:- Already executed once!*/
   //    once();                                    /*Output:- Already executed once! */

   // 23)Implement a function that throttles another function (HOF + Closures).
//    function throt(fn, delay){
//       let lastcall = 0;
//       return function(){
//       let current = Date.now();
//       if(current - lastcall >= delay){
//          lastcall = current;
//          fn();
//          }
//       };
//    }
//    let newthr = throt(function(){
//       console.log("Works in 2 second");
//    }, 2000)

//   // Testing
// newthr();   // Will log immediately ||  0s → immediately run || Works in 2 second
// setTimeout(newthr, 1000);  // Won't log (delay not reached) ||  1s → run nahi karega (delay 2s hai)
// setTimeout(newthr, 2500);  // Will log (delay reached) ||  2.5s → run karega (delay complete) || Works in 2 second
   
     