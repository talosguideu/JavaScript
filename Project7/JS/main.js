//write an if statement that displays if the equation is true//
if (18>13) {
    document.write("Eighteen is greater than thirteen")
}

//write an if statement that displays if the equation is true//
if (2<5) {
    document.write("The left number is smaller than the right number")
}

//assign if and else statements to display certain responses//
function petsFunction(){
    pets=document.getElementById("pets").value;
    if(pets>=4){
        amount="You have a lot of pets!";
    }
    else{
        amount="You have a normal amount of pets.";
    }
    document.getElementById("How_many").innerHTML=amount;
}
//Execute an else if statement//
function time_function(){
    var time=new Date().getHours();
    var reply;
    if (time<12==time>0){
        reply="It is morning time.";
    }
    else if(time>12==time<18){
        reply="It is afternoon.";
    }
    else{
        reply="It is evening time.";
    }
    document.getElementById("Time").innerHTML=reply;
}

//Create a global variable, assigning variable outside of function//
var h = 22;
function addition(){
    document.write(18 + h + "<br>");
}
function addition2(){
    document.write(h + 3);
}
addition();
addition2();

//Create a local variable, assigning variable inside of function//
function add1(){
    //variable assigned in function here//
    var b = 50;
    document.write(44 + b + "<br>");
}
function add2(){
    document.write(b + 9);
}
add1();
add2();

//create a function, define a local variable, then display it in the console log//
function add3(){
    var y = 2;
    console.log(1+y);    
}
//create a function, variable is not defined inside of function, try to display in console log to find error message//
function add4(){
    console.log(y+8);
}
add3();
add4();

function get_Date(){
    if (new Date().getHours()<20){
        document.getElementById("heyThere").innerHTML="Welcome to you!";
    }
}
