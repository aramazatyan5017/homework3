
// A function that takes at least three arguments and returns the result of some set of operations using those arguments

const fn1 = function(a, b, c) {
	
	return (a * (b + c)) * (a + b - c);
		
};

// A function that takes no arguments and returns something

const fn2 = function() {
	
	return "wazzzup?";
};

// A function that takes arguments, does something but does not return anything

const fn3 = function(arg1, arg2) {
	if(arg1 === arg2) {
		console.log("hey");
	} else {
		console.log("yo");
	}
	
};

// A function that takes three strings and returns the string that is the longest.

const fn4 = function(str1, str2, str3) {
	
	if(str1.length >= str2.length && str1.length >= str3.length) {
		return str1;
	} else if(str2.length >= str1.length && str2.length >= str3.length){
		return str2;
	} else {
		return str3;
	}
	 
};

// A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const fn5 = function(num1, num2) {
	
	if(num1 === num2){
		return 0;
	} else if(num1 > num2) {
		return 1;
	} else {
		return -1;
	}
	
};

// Create a multiply function that multiplies the two given arguments together and returns the result.

const multiply = function(num1, num2) {
	return num1 * num2;
};

// Create a divide function that divides the first argument by the second and returns the result.

const divide = function(num1, num2) {
	return num1 / num2;
};

// Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or /

const triangleArea = function(base, height) {
    return divide(multiply(base,height), 2);
};

// Create a function called numLength that takes a number and returns the number of characters in the number.

const numLength = function(number) {
    return (number + "").length;
};

/* Create a function that takes two strings and a number.  If the length of the two strings concatenated 
together is greater than the given number, return 1, else return -1.*/

const fn6 = function(str1, str2, num) {
	if((str1 + str2).length > num) {
		return 1;
	} else {
		return -1;
	}
};

/* Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', 
return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle
(you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1. */

const runStuff = function(num1, num2, str) {
	if(str === "rectangle"){
		return multiply(num1, num2);
	} else if(str === "triangle"){
		return triangleArea(num1, num2);
	} else {
		return -1;
	}
	
};