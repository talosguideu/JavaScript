//Assign variable to addtion, perform and display result//
function addition_Function(){
    var addition=27+82;
    document.getElementById("Math").innerHTML="27+82="+ addition;
}
//Assign variable to subtraction, perform and display result//
function subtraction_Function(){
    var subtraction=56-41;
    document.getElementById("Math2").innerHTML="56-41="+subtraction;
}
//Assign variable to multiply, perform and display result//
function multiplication(){
    var multiply=5*19;
    document.getElementById("Math3").innerHTML="5*19="+multiply;
}
//Assign variable to divide, perform and display result//
function division(){
    var divide=48/3;
    document.getElementById("Math4").innerHTML="48/3="+divide;
}
//Assign variable to longer math problem, perform and display result//
function ughmath(){
    var problem=(3+12)*8/6-11;
    document.getElementById("Math5").innerHTML="3 plus 12, multiplied by 8, divided by six, then subtracted by 11 is"+problem;
}
//Assign variable to remainder of an operation, perform and display result//
function modulus_Operator(){
    var remainders=38%7;
    document.getElementById("Math6").innerHTML="When you divide 38 by 7 you get a remainder of:"+remainders;
}
//Assign variable to x, perform and display negative result//
function negation_Operator(){
    var x=28;
    document.getElementById("Math7").innerHTML=-x;
}
//Assign variable to y, perform and display one incriment above y//
var y=47;
y++;
document.write(y);
//Assign variable to z, perform and display one increment below z//
var z=92;
z--;
document.write(z);
//Pop up window, display random number//
window.alert(Math.random());
//Pop up window, display random number between 0 and 55//
window.alert(Math.random()*55);
