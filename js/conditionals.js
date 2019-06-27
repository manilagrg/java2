//variables

var firstNum = 50;
var secondNum = 40;

console.log(firstNum < secondNum);

if (firstNum > secondNum){
    console.log("The first number is grater");
}
else {
    console.log("The second number is grater");
}

var question = prompt("Enter text");
    console.log(question);

var message = prompt("Enter another text");
    console.log(message);

if (question.length == message.length){
    console.log("Both are equal");
}

if (question.length > message.length){
    console.log("The larget answer" + question)
}
else{
    console.log( "The larget answer" + message)
}

//===========================================

var firstString = prompt("Enter number");
var secondString = prompt("Enter another number");

    console.log("The types of variables before the conversion", typeof firstString)
//parseInt is stand for conversion of string to number

var firstNum = parseInt(firstString);
var secondNum = parseInt(secondString);
    console.log("The types of variables after the conversion", typeof firstNum)


if (firstNum < secondNum){
    console.log("The first number is smaller with the value of ", firstNum)
}
else {
    console.log("The second number is smaller with value of ", secondNum)
}

//=======================

var firstQestion = prompt("Enter a value");
var secondQestion = prompt("Enter another value");

if (firstQestion.length > secondQestion.length){
    console.log("The first Qestion is grater with the value of ", firstQestion);
}
else{
    console.log("The second question is grater with the value of", secondQestion)
}