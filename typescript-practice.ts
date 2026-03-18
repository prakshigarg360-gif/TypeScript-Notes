// Variables

// const nameValue:string ="WishInfinite"
// // nameValue = "Test"
// console.log(nameValue)

// let url: string = 'www.wishinfinite.com'
// url='https://www.wishinfinite.com'
// console.log(url)

//=============================================

//Data Types
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
//Functions

// function sayHello(): void{
//     console.log("Hello")
// }

// sayHello()

// const sayHello2 = (): void=>{
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

// function greet(name?: string){
//     console.log(`Hii ${name}`)
// }
// // greet("WishInfinite")
// greet()

//=========================================
// Arithmetic Operators

// console.log(5 + 8)
// console.log(100 - 70)
// console.log(5 * 4)
// console.log(10/2)
// console.log(10%2)

//==========================================
//Comparison Operators
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
//Logical Operators

// let age: number = 15
// let isLoggedIn: boolean = false

// console.log(age>=18 && isLoggedIn)
// console.log(age>=18 || isLoggedIn)
// console.log(! (age>=18) )

//=============================================================
//Conditions (if / else)
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
//Loops

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
// Async & Await

// async function loadData(): Promise<void> {
//  await fetch("https://example.com");
// }
//=======================================

//Interface

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

//Type
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

export default class LoginPage {
    a = 20
    login(): void {
        console.log("Login called")
    }
}

