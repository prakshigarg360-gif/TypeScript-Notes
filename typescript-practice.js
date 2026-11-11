"use strict";
//Typescript is Javascript with types. It adds safety by catching errors during development instead of runtime.
//Why this for automation: It provides better auto-complete, fewer bugs, and clerer code. this makes automation frameworks easier to build, read and maintain.
//Types (Core Idea): type define what kind of value a variable can store. This prevents invalid data and reduces mistakes.
// Variables: stores values that can be reused in the program. In typescript, we can also define the type of each variable.
//let & const: use const by default. Use let only when the value changes.
Object.defineProperty(exports, "__esModule", { value: true });
// const nameValue:string ="WishInfinite"
// // nameValue = "Test"
// console.log(nameValue)
// let url: string = 'www.wishinfinite.com'
// url='https://www.wishinfinite.com'
// console.log(url)
//=============================================
//Data Types: Data types define what kind of data a variable holds. Sting: boolean, number
// let course: string = 'TypeScript'
// let course: string = "TypeScript"
// let course: string = `TypeScript`
// console.log(course)
// let nameVal: string = 'WishInfinite'
// let description: string = nameVal + ' is best'
// console.log(description)
// let nameVal2: string = "WishInfinite"
// let description2: string = nameVal2 + " is best"
// console.log(description2)
// let nameVal3: string = `WishInfinite`
// let text1 : string = `channel`
// let description3: string = `${nameVal3} is best ${text1}`
// console.log(description3)
// let count : number = 9
// console.log(count)
// let isVisible: boolean = false
// console.log(isVisible)
// let num1: any = 20
// num1 = "abc"
// num1 = true
//=========================================
//Array
// let users: string[] = ["Ram", "WishInfinite", "Sam"]
// console.log(users[1])
// let marks: any[] = ["Math", 45, "Art", 75, true]
// console.log(marks[4])
// let numArray: Array<number> = [4, 78, 99, 101]
// console.log(numArray[3])
//=============================================
//Objects
// let userDetails: {username: string,
//                 password: string,
//             age: number} = {username: 'WishInfinite',
//                 password: 'pass123',
//                 age: 20
//             }
// console.log(userDetails.password)
//========================================
//Functions: can define types of inputs and return values. this ensure correct data is passed and returned.
// function sayHello(): void{
//     console.log("Hello")
// }
// sayHello()
// const sayHello2 = (): void=>{                     //arrow function: morden and shorter syntex.
//     console.log("Hello 2")
// }
// sayHello2()
// const add = (num1: number, num2: number): void =>{
//     console.log(num1 + num2)
// }
// add(5, 7)
// const add2 = (num1: number, num2: number): number =>{
//     return num1 + num2
// }
// const addition = add2(30, 50)
// console.log(addition)
// function greet(name?: string){                //optional parameter witgh question mark
//     console.log(`Hii ${name}`)
// }
// // greet("WishInfinite")
// greet()
//=========================================
// Arithmetic Operators: used for mathematical calculations.
// console.log(5 + 8)
// console.log(100 - 70)
// console.log(5 * 4)
// console.log(10/2)
// console.log(10%2)
//==========================================
//Comparison Operators: used to compare values and always return true or false. commonly used inside conditions and validations
// let a: number = 3
// let b: number = 9
// console.log(a === b)
// console.log(a !== b)
// let val1: string = "WishInfinite"
// let val2: string = "WishInfinite"
// console.log( val1 === val2)
// console.log(val1 !== val2)
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
//========================================
//Logical Operators: used to combine multiple conditions. helps create more complex decision making logic.
// let age: number = 15
// let isLoggedIn: boolean = false
// console.log(age>=18 && isLoggedIn)
// console.log(age>=18 || isLoggedIn)
// console.log(! (age>=18) )
//=============================================================
//Conditions (if / else): Conditions allow program to make decision based on true/false results.
// let age : number = 29
// if(age >= 18){
//     console.log("Adult")
// }else{
//     console.log("Minor")
// }
// const a : number = 5
// const b: number = 5
// if(a===b){
//     console.log("a is equal to b")
// }else if(a > b){
//     console.log("a is greater")
// }else if(b > a){
//     console.log("b is greater")
// }else{
//     console.log("Invalid Numbers")
// }
//=============================================
//Loops: repeat the same steps multiple times. useful when handling multiple elements or test data.
// for(let i = 0; i <=10; i++){
//     console.log(i)
// }
// for(let i=1; i<=10; i++){
//     console.log("WishInfinite")
// }
// let users: string[] = ["Ram", "WishInfinite", "Tom", "Trump"]
// for(const user of users){
//     console.log(user)
// }
//==================================
// Async & Await: Async and await handles task that takes time to complete. 
// async function loadData(): Promise<void> {
//  await fetch("https://example.com");
// }
//=======================================
//Interface: defines structure of objects. they make test data clean, reusable, and easy to maintain.
// interface User {
//     username: string;
//     password: string;
//     age: number
// }
// let userDetail: User = {
//     username: "WishInfinite",
//     password: "pass123",
//     age: 25
// }
// console.log(userDetail.username)
//====================================
//Type: (Alternative to Interface): another way to define data structure. often used for custom types or limited value sets.
//use interface for objects. used types for custom oro restricted values.
// type User = {
//     username: string;
//     password: string;
//     age: number
// }
// let userDetails: User = {
//     username: "WishInfinite",
//     password: "pass12",
//     age: 35
// }
// console.log(userDetails.password)
// type Status = "Pass" | "Fail" | "Skip"
// let testStatus: Status = "Skip"
//===================================
//Classes
// class LoginPage {
//     // a: number = 20
//     nameValue: string
//     company: string
//     constructor(nameValue: string){
//         console.log("Inside LoginPage's constructor")
//         this.nameValue = nameValue
//         this.company = "YouTube"
//     }
//     login(): void{
//         console.log("Login Called")
//     }
// }
// const loginPageObj  = new LoginPage("WishInfinite")
// loginPageObj.login()
// console.log(loginPageObj.nameValue)
// console.log(loginPageObj.company)
///===============================
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.a = 20;
    }
    LoginPage.prototype.login = function () {
        console.log("Login called");
    };
    return LoginPage;
}());
exports.default = LoginPage;
