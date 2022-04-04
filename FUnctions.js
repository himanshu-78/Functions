// Q1 : Create one function with zero parameter having a console statement.

function msg() {
    console.log("Hello World..!!!")               // Hello World..!!!
}
msg();


// function msg1() {
//     document.write("Hello World..!!!")               // Hello World..!!!
// }
// msg1();



// Q2 : Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".

function sum(a, b) {
    console.log(a + b);                            // 7
}
sum(3, 4);



// Q3 : Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old".

function display(FirstName, LastName, Age) {
    console.log(FirstName + LastName + " is " + Age + " Years Old..!!")             // Harry Potter is 99 Years Old..!!!
}
display("Harry ", "Potter", 99);



// Q4 : Create one arrow function.

// without parameter :
let hi = () => console.log("Hey..")            // Hey..
hi()


// with parameter :
myFun = (a, b) => console.log(a * b)          // 35
myFun(5, 7)               



// Q5 : Print output :

var x = 21;
var girl = function () {
console.log(x);                             // undefined
var x = 20;
};
girl ();      



// Q6 : Print output :

var x = 21;
girl ();
console.log(x)                                // 21
function girl() {
console.log(x);                               // undefined
var x = 20;
};



// Q7 : Print output :

var x = 21;
a();
b();
console.log(a);                    // function defination : f a() : Print whole function

function a () {
var x = 20;
console.log(x);                    // 20
};

function b () {
var x = 40;
console.log(x);                   // 40
};



// Q8 : Print output :

var x = 21;
a();
b();
console.log(a);                 // function defination : f a() : Print whole function

function a () {
x = 20;
console.log(x);                 // 20   
};

function b () {
x = 40;
console.log(x);                // 40
};



// Q9 : Print output :

var x = 21;
a();                                // ReferenceError: a is not defined
b();
console.log(a);

a = function() {
x = 20;
console.log(x);                  
};

b = function() {
x = 40;
console.log(x);                 
};



// Q10 : Write a function that accepts parameter n and returns factorial of n.

function factorial(n) {
    if(n == 0) 
    {
        return 1
    }
    else
    {
        return n * factorial(n - 1);
    }
}
let result = factorial(7)
console.log(result)                                 // 5040


// using for loop :
// let num = 5
// let fact = 1

// for (num; num >= 1; num--)
// {
//     fact = fact * num;
// }
// console.log(fact)                               // 120