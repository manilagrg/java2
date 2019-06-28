
var firstString = prompt("Enter number");
var secondString = prompt("Enter another number");

    console.log("The types of variables before the conversion", typeof firstString)

    var firstNum = parseInt(firstString);
    var secondNum = parseInt(secondString);

     console.log("The types of variables after the conversion", typeof firstNum)

if(isNaN (firstNum)){
    console.error("The first number you enter is not valid")
}
if(isNaN(secondNum)){
    console.error("The second Numer is not valid")
}
//|| stand for OR
if(isNaN(firstNum) || isNaN(secondNum)){
    if(isNaN(firstNum)){
        console.log("The first Number is not valid")
    }
    else{
        console.log("The second Numbr is not a number")
    }
    console.error("Both has to be a number")
}

//&& stand of AND

if(isNaN(firstNum) && isNaN(secondNum)){
    console.warn("Both has to be number")
}
else if(isNaN(firstNum)){
    console.error("The first input is not a number")
}
else if(isNaN(secondNum)){
    console.error("The second input is not a number")
}


if (firstNum < secondNum){
    console.log("The first number is smaller with the value of ", firstNum)
}
else {
    console.log("The second number is smaller with value of ", secondNum)
}
