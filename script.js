let named = "Alice"
let age = "20"
let major = " Computer Science"

console.log("Hello, " + named);
console.log("Age: " + age);
console.log("Major: " + major);

function greet(user) {
    alert("Welcome, " + user)
}
greet("Bob")

function calculateSum() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let sum = num1 + num2;
    alert("The sum is: " + sum)
    console.log("Sum calculated: " + num1 + " + " + num2 + " = " + sum)
}
calculateSum();

function checkEvenOdd() {
    let number = parseInt(prompt("Enter a number to check if its even or odd"))

    if (isNaN(number)) {
        alert("Thats not a valid number!")
    } else if (number % 2 === 0) {
        alert(number + " is even!")
        console.log(number + " is even")
    } else {
        alert(number + " is odd!")
        console.log(number + " is odd")
    }
}
checkEvenOdd()


let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"]

console.log("Fruits list:");
for ( let i = 0; i < fruits.length; i++) {
    console.log(" - " + fruits[i]);
}