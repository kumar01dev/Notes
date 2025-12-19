// let st = "js"
// let st2 = JSON.stringify(st)
// console.log(st === st2)
// console.log(st2, st)  // st2= '"js"' and st= "js" so false




// function test(a,a){
//     console.log(a)
// }
// test(2,23)  // 23=> js moves from L->R so the 2nd 'a' overwrites the 1st 'a' so 23 is consoled.
// also its not recommended to use same parameters, use different ones.




// let s = [2,3,4,9][1,2,3]
// console.log(s);  // 9 -> 1st one is object array and other is expression and js moves from
// L->R, overwrites the first two so 3 is final and thus the 3rd index so 9.




// let a = [].every(() => true);
// let b = [].every(() => false);
// console.log(`a = ${a}`)
// console.log(`b = ${b}`) // both gives true => empty array so no way of callback and thus every must return true.




// function sum(num1){
// the logic so that it evaluates all the numbers.
// }

// const res= sum(1)(2)(3)(4)();
// console.log(res);

// function sum(num1){
//     return (num2)=>{
//         if(num2 === undefined){
//             return num1
//         }else{
//             return sum(num1 + num2)
//         }
//     }
// }




// console.log([44,52] > [81])
// console.log([2] > [12]) 
// console.log([3] > [2]) // false, true, true => js converts them into string ie: "[44,52]" > "[81]" 
// and then compares first character thus giving false, true, true.




// {
//     function show(){
//         console.log('inside show')
//     }
// }
// show();// inside show => but in 'strict mode' the fn becomes block scoped and doesnot console.
// new show; // the 'new' keyword too calls the fn without using ().





// let a = [2,3,4,5];
// console.log(a[-1]) // undefined as negative index dont exist for JS/TS but for python it does exist.
// console.log(a.indexOf(1000)) // value= 1000 doesn't exist so gives -1 index which means not found, not an actual array.
// a[4] = 77;
// console.log(a)
// a[6] = 27;
// console.log(a)
// a[-1] = 2222; // assigning value to -1 index 
// console.log(a[-1])
// a[4] = 76
// console.log(a)

// console.log(a.length)
// a.length= 0
// console.log(a.length)
// console.log(a) // empty array

// a= [3,4,5,7][1,2]
// console.log(a) // 5 => first one is array object, second is expression to compute the array
// and js moves from L->R discarding all & left with 2 ie index2 so 5

// console.log(null +2)
// console.log(undefined +2)
// let a = '55' +2;
// console.log(a, typeof(a))

