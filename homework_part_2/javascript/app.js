// Part 1 

// 1. Concatenation allows you to combine strings together with + but only works on strings. 
//    ex: console.log('I am' + 'a monkey');
//Interpolation can insert the values of variables and combine with strings. 
//    ex: const word = litte
//        console.log('Say hello to my ' + little + 'friend');


// 2. DRY stands for Don't Repeat Yourself. We pay attention to it because we don't want our code to be cumbersome, confusing, or
// take up a lot of computing power. For loops, while loops, and functions to help write DRY code.

// 3. Declaring a variable is telling the computer that we are going to need that variable but you don't give a value to it.  When you assign 
//    a value you're setting an inital value for that variable by using the =. Defining a variable means to set the value by assigning it. 

// 4. We should use const when a variable will remain unchanged. We should use let when a variable needs to be re-assigned a value. 

// 5. A parent directory above a sub directory. 

// 6. You can type the man command plus the topic you need 

// 7. The tab completion allows you type a partial command or file name and then and it auto fills for you. It saves a bunch of time!

// Part 2
   
const a = 4;
const b = 53;
const c = 57;
const d = 16; 
const e = 'Kevin';

console.log(a < b);
console.log(c>d);
console.log('Name' === 'Name');
console.log(a<b<c);
console.log(a+a<d); 
console.log(e === 'Kevin');
console.log(48 == '48');

// Part 3
// 1. Yes it's an infinite loop because nothing has been set as the parameters so it will keep running. 

// 2. No, because its trying to reassign runProgram which is a const and will stop after the first to output 'Dont run this loop'.

// 3. The code will run through the alpabet until T

let letters = "A";
let i = 0;

while (i< 20) {
     letters += "A";
     i++
}

console.log(letters);

// No it did not, I thought it would add the next letter in the alphabet

// Part 4 
// 1. For loops set how many times you want tor run through the code and while loops run as long as something is true. The syntax is different and 
//    with for loops you define a variable. They both run loops and check a condition and if it returns true a code block will run until the condition returns false

// 2.

for (let i = 0; i <= 999; i++) {
    console.log(i);
}


// 3. The first part of the constrol statement is the initialization that sets the variable
//    The second part is the condition that designates how long the code will run
//    The third part is the repeating expression that its updated to. 



// 4. 

     for (i = 999; i>=0; i--) {
         console.log(i);
     }

// 5. 


for (let i = 1; i <= 10; i++) {
  console.log('The value of i is: ' + i + ' of 10' );
}

