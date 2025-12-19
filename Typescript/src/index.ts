// TS is a superset of JS (i.e TS address the shortcomings of JS or TS is JS with syntax for types).
// TS is all about type-safety & type checking & its built on top of JS.so every TS code =valid JS code
// Benefits of TS: 
// 1. statically typed language => clearing a variables type.
//    eg:-   int number = 10;
//           number = "a" (this is not allowed in ts)
//    js is dynamically typed language)
//    eg:-   let number = 10;  
//           number = "a" (this is allowed in js as dynamically typed language)
//           Math.floor(number) => error, that is hard to debug so TS helps to catch this error at compile time.

//? ** TS is statically typed language so once a type is declared it cant be changed.


// 2. code completion    
// 3. refactoring
// 4. shorthand notaion
// 5. saves time in unit-testing
// 6. TS detects error before runtime ie at compile time.


//? TypeScript is:
//      A tool/language to write safer and more maintainable code
//      A compile-time checker that finds bugs before you run the code
//      The transpiler converts .TS file → .JS file 

//? **(TS => TS compiler => JS) this is called Transpilation. 
// Transpilation (short for source-to-source compilation) is the process of taking code written in one 
// language (or version) and converting it into another, typically at the same level of abstraction. 

// So, TypeScript is only for compile time and finding errors at that time — not
// for runtime. So we need to convert the TS to JS, then run node filename.js.




//  RUN A TS FILE:
//  1.npm i -g typescript =installs TS
//    tsc -v = to know the version
    //  2(a). simple file based ts code compiling:
    //     (now select the folder)
    //     tsc filename.ts =compilation for errors & makes ts=>js file
    //     node filename.js = run the converted js file(runtime execution)
    //  2(b). Project-Based Setup:
    //     make a src folder, move the index.ts file inside the src folder 
    //     tsc --init(for the main folder not inside src) = makes tsconfig.json file, now uncomment rootDir and outDir in tsconfig.
    //     tsc = compiles the full project,find errors & make the dist folder
    //     node dist/filename.js = runs the code(runtime execution)




// Built-in types:
//? 1. Built-in-types of JS are N,S,B,U,Object,etc similarly TS has some more types like
//? 2. Similarly TS has JS built-in types + any, unknown,etc
// let anna:any = 'name';
// console.log(anna);
// anna = 223;
// console.log(anna);
// let lisa: unknown = 33;
// console.log(lisa);
// lisa = 'girl';
// console.log(lisa); 
//? Both 'any','unknown' are used when the type of variable/fn/object/array,etc is not known/ not fixed and to not get undefined/ errors.
//? 'Unknown' is a safe option to 'any' as 'any' turns off type check and unknown doesnot.
//?  So, Use **unknown** when you need to be safe (like handling JSON, user input, APIs) and 
//?  use **any** only when you truly can’t avoid it or are prototyping fast and know what you're doing.



//type annotations => const a: string = 'sentence',
// without type annotations TS still understands type based on initial declaration but its not recommended.



// Function type annotations:
//? 1. Optional and Default parameter -
// Optionals have a '?' after the parameter ie age ?:number so if provided its a number and if not provided then undefined. so optional = mentioned type | undefined.
// Optional is it may/maynot exist, used with fn parameters, properties of object/interface/type alias , not with variables directly.
// function greet(name?: string) {
//     console.log(`Hello, ${name ?? "Guest"}`);  //?  "??" is called the nullish coalescing operator. It returns the right-hand value if the left-hand value is null or undefined.
//     console.log(`Hello, ${name}`);
// };
// greet("Alice");    // Hello, Alice
// greet();           // Hello, Guest
// function greet(name: string, age?: number): void {
//   if (age !== undefined) {
//     console.log(`Hello, ${name}. You are ${age} years old.`);
//   } else {
//     console.log(`Hello, ${name}.`);
//   };
// };
// greet("Alice");     //Hello, Alice. 
// greet("Bob", 30);   //Hello, Bob. You are 30 years old. 
 

//? 2. REST parameter- allows a fn to accept multiple arguments in a single array.
// ie we can pass any number of arguments and it will be stored in an array.
//? ** REST parameter is with a 'spread operator', should be the last parameter in a fn,for a fn which returns a single array.
//      function sum(...numbers: number[]) {
//          return numbers.reduce((total, n) => total + n, 0);
//      }
// sum(1, 2, 3);        // 6
// const addAllNos =(...numbers:number[]) :void =>console.log(numbers.reduce((total,n)=>total+n,0 ));
// addAllNos(2,4,8)
// Function with a rest parameter and type annotation
// function addAll( ... nums: number[]): number {
// let result = 0;
// for(let num of nums) result += num;
// return result;
// }
// console.log(addAll(10, 20, 30, 100, 10.5, +true));    // 171.5
//? '+' in +true/+false is urinary plus operator, converts +true into 1 and +false into 0.

//? 3. Anonymous Functions- that dont have a name but are assigned to a variable to not polute the global scope. 
// const add = function(n1:number, n2:number) : number{
//     return n1+n2;
// };
// console.log(add(2,9));

//? 4. Void- a type that indicates a Fn won't return a value or returns undefined.
//      function theFn(msg:string) : void {
//          console.log('msg is:'msg);
//      };

//? 5. Never- is a type that says a fn will never returns at all - as it either loops/throw error forever and provides type safety guarantee.
//       function usingNever():never{} 
//          throw new Error(msg)
//       };
//    2.  function infiniteLoops():never{ 
//              while(true){ 
//                  //the fn never exits the loop 
//              };
//        };
//?  We use 'never' if a fn may loop or throw error. so, to filter it we use 'never,' as the fn would never come to an end and wont return anything.

//? ** when there is no return statement in a fn, it still returns undefined behind the scenes(and this is why void is: no return | return undefined).




// ADVANCED TYPES:
//? 1. Union type- assigning multiple types to a variable/property using  " | ". Can be used for variables,properties of objects,in arrays,etc.
// const myVar : string | number | boolean | ;
// myVar = "hii";
// console.log(myVar);
// myVar = 22;
// console.log(myVar)
// const arr:(string|number)[] = ['aman',22,'deva',29];   //for arrays
// console.log(arr)

//? 2. Litreal type- allows only specific value(s) instead of a broad type.
// const color : 'red' | 'blue' | 'green';
// color = 'yellow' (wrong);
// const number: 2|3|5|8;
// number = 7 (wrong);
// let isActive: true;
// isActive = true;  // (right)
// isActive = false; // (wrong)

//? 3. Nullable type- has null and/or undefined type in it
// const str: string|null;
// str= 'wording here'
// Every nullable === Union but every Union !== Nullable.

//? 4. Type Alias- way to asign more type for a variable using "type". 
// type Str = string;
// let val: Str = 'a value';
// console.log('val is:',val)
//?  It also comes under union type too, it provides improved readability and maintainability for complex type definitions.
// type Id = number | boolean;
// let theVar: string | Id = 'sentence';
// console.log('1st theVar is:',theVar);
//  theVar= 233;
// console.log('first theVar is:',theVar);
// theVar = true;
// console.log('2nd theVar is:',theVar);
//? *** Type Alias to be used while declaring a variable. 
// type Employee = {
// name: string;
// age: number;
// email ?: string;
// }
// const Person1 : Employee = {
//     name: 'Alice',
//     age: 25,
//     email: "alice@mail.com",
// };
// const Person2 : Employee = {
//     name: "Bobs",
//     age: 27,
// };
// console.log(Person1);
// console.log(Person2);
//? Type Alias with Rest parameter.
// type Emp={
//     age:number;
//     city:string;
//   };
//   function P1(...datas:Emp[]){
//     datas.map(data=>console.log(data))
//   };
//   P1(
//     {age:22,city:'lko'},
//     {age:24,city:'kol'},    
//   );

//? 5. Intersection type- combining multiple types into 1 which has all props and functionalities using "&".
// type A = { a: string };
// type B = { b: number };
// type C = { c: boolean };

// type ABC = A & B & C;

// const obj: ABC = {
//   a: "hello",
//   b: 42,
//   c: true
// };
// console.log(obj);
//?  ** Using ',' and ';' are correct, but the common convention is to use semicolons (;) in type/interface declarations. 
//?  as using ";" helps to distinguish them from regular JavaScript object literals, which typically use ',' .




// Array type annotations:
//? 1. Array format-
// const a: string[] = ['apple','kiwi'];
// console.log(a);
// const b : (string | number)[] = ['cake',2,9];  //? (with any structure(any length and any order), its like union type in array)
// console.log(b);

//? 2. Tuple Array => fixed structure ie fixed length && fixed order(first number then string and of length=2 only)
// const t : [number, string] = [783,'tupleTypeArray'];
// console.log(t);  
// console.log(t[0]);  //783
// console.log(t[1]);  //string

// //? 3. Destructuring array into individual variables
// const [no,st] = t;
// console.log(no); //783
// console.log(st); //tupleTypeArray
// const [el] = t;  // we can destructure some elements from a array too.
// console.log('el is:',el);  //783
// const cc = t[1];
// console.log(cc);  //tupleTypeArray
// const [dd] = t[1];
// console.log(dd);  //t[1] is tupleTypeArray, [dd] = t[1] means Destructure the first character of the string 'tupleTypeArray' → dd = 't'
// let mm = [t]
// console.log('mm is:',mm)  //mm is: [ [ 783, 'tupleTypeArray' ] ]

//? 4. Enum- helps to create new Datatype composed of pre-defined related values to make it more readable.
// enum Days{
//     Monday,
//     Tuesday,
//     Wednesday,
//     Sunday,
//     no=33,
//     value= '25'
//     // '92', // not accepted
// }
// const today: Days = Days.Sunday;
// console.log(today); // gives index
// console.log(`Today is: ${Days[today]}`);
// const num: Days= Days.no;
// console.log(num ,"is num")   //33
// const val : Days = Days.value;
// console.log(val)   //25





// Object type annotations:
//? 1. Interface: specifies an object structure, property type and optional/required status.
// Objects adhering an interface must implement its defined structures and methods.
// TS checks if an object follows the interface requirements or not.
// Interfaces document expected object properties and enhance code readability, aiding object usage understanding.
// interface Client {
//     name:string;
//     age:number;
// };
// const Person1: Client = {
//     name: 'Sam',
//     age:35,
// };
// console.log(Person1)
// Interface also describes methods and their parameters and type that should be present in an object.
// interface Client2{
//     name:string;
//     location: string;
//     greet(message:string): void;
// };
// const Person2 : Client2= {
//     name:'John',
//     location: 'Hyd',
//     greet(message:string){
//         console.log(`${this.name} says : ${message}`)
//     },
// };
// console.log(Person2)
// Person2.greet("hii TS");
// console.log(Person2.name)

//? 2. Reopening in Interface- a builtin technique to expand an interface as a project grows. this provides modular development,progressive enhancement
// interface Settings{
//     font:string;
//     theme:'light' | 'dark';
// }
// interface Settings{   // reopening interface
//     sidebar: boolean;
// }
// interface Settings{   // reopening interface
//     updates:boolean;
//     features:number
// }
// const UserSettings: Settings = {
//     font: 'arial',
//     theme: 'dark',
//     sidebar: true,
//     features:8,
//     updates: true,
// };
// console.log(UserSettings);

//? 3. Built-In Interface- TypeScript comes with built-in (predefined) interfaces that describe the structure and types of common JavaScript and browser-related objects.
//? These interfaces are available thanks to TypeScript's DOM library, which is included when you're targeting a browser environment (i.e., when lib: ["DOM"] is in your tsconfig.json)
//? The built-in interface helps to describe structure of builtin objects, enable type safety and autocomplete code in IDE's.
//? Examples of built-in interfaces: HTMLElement, HTMLDivElement, Event, MouseEvent, Document, Window.
// const div: HTMLDivElement = document.createElement("div");
// div.innerText = "Hello";
// const img:HTMLImageElement = document.createElement("img");
// img.src= "img link";
// img.alt= 'img here';
//? There are many built-in interfaces for Web API's(like fetch API,Storage,etc), Node.js types(if using @types/node), JS Standard Objects(Map,Set,Promises,etc).

//? 4. Interfaces vs Type Alias-
// Type alias can represent multiple types using unions,tuple,fns,objects,etc where interfaces is about objects structure only and cant use union in interface.
//      Egs.
    // type stat = ('offline' | 'online') | void;  // or   'offline'|'online'|void; as both are same
    // let user:stat = 'offline';
    // console.log('user1',user);
    // user = 'online'
    // console.log('user2',user);

    // type status = 'online' | 'offline' | undefined;
    // function handleStatus(user: status) {
    //   if (user === 'online') {
    //     console.log("User is online");
    //   } else if (user === 'offline') {
    //     console.log("User is offline");
    //   } else if (user === undefined) {
    //     console.log("User has no status");
    //   } else {
    //     // This should NEVER happen
    //     const _exhaustiveCheck: never = user;
    //     throw new Error(`Unhandled status: ${_exhaustiveCheck}`);
    //   }
    // }
    // handleStatus("offline");

// Type alias can't be extended directly(not with class-extends too but by using "&" intersection), even after once declared 
// but interface can be extended by reopening technique. So,Interface is extensible,more readable but Type-Alias is not.
//      Egs.
      // type Person = {
      //   name: string;
      //   age: number;
      // };
      // type Person1 = Person & {
      //   id: string|number;
      // };
      // const E1:Person1={
      //   name:"kumar",
      //   age:28,
      //   id:Date.now(),
      // };
      // console.log(E1);

// use 'Type alias' when object would have multiple types and for the class structure only use "interface".






//? Class in TS: describes object structure,behavior,includes actual method logic and maybe used to create real objects.
// Class of TS is same as of JS but TS adds type annotations,access modifiers and compile-time checking that JS doesn't have.

//? 1. Normal class-
// class Product{
//   id: number;
//   name:string;

//   constructor(id:number,name:string){
//     this.id= id;
//     this.name= name;
//   };

//   getProductInfo(): string{
//     return `ID: ${this.id}, Name:${this.name}`;
//   };
// };
// const Soap = new Product(22,"santoor");
// console.log(Soap); //Product {id: 22, name: 'santoor'} ie gives class name and props as object is called.
// console.log(Soap.getProductInfo()); //ID: 22, Name:santoor ie gives props as a method is called.
// console.log(Soap.id, Soap.name);xsxz

//? 2. Private and Public class-
// class BankAccount {
//   private balance: number;

//   constructor(initialBalance: number) {
//     this.balance = initialBalance;
//   }

//   public deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   public getBalance(): number {
//     return this.balance;
//   }
// }
// const User= new BankAccount(4000)
// console.log(User);
// console.log(User.getBalance());
//? Private is the property that is accessed only from inside the class object so that if a class has defined any method that has the private
//? property then only it would be accessed by any outer variable or object made with the same class and if not defined then would give errror.
//? Public is the property that can be accessed from outside the class object too without the class defining it inside.

// ? 3. Protected class-
// class Animal {
//   protected species: string;

//   constructor(species: string) {
//     this.species = species;
//   }

//   protected makeSound(): void {
//     console.log(`${this.species} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super("Dog");
//   }

//   bark(): void {
//     // ✅ Can access protected property and method
//     console.log(`${this.species} barks loudly`);
//     this.makeSound();
//   }
// }

// const d = new Dog();
// d.bark(); // ✅ Allowed

// console.log(d.species);
// ❌ Error: 'species' is protected and only accessible within class 'Animal' and its subclasses

// d.makeSound();
// ❌ Error: 'makeSound' is protected



// interface Check {
//   id: string | number;
//   name: string;
// }
// const s1: Check | void = {
//   name:'alex',
//   id:Date.now()
// }
// console.log(s1);

// type Check2= {
//     id: string | number;
//   name: string;
// };
// const s2: Check2 | void = {
//   name:'aman',
//   id:Date.now()
// };
// console.log(s2);

