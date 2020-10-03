//use typeof to define type of variable//
document.write(typeof "Words");
document.write(typeof 3);
//display large numbers to get response of infinity and negative infinity//
document.write(3E541);
document.write(-6E544);
//display true and false//
document.write(17>5);
document.write(19<3);
//display an answer in the console//
console.log(4*8);
//combine strings and numbers to return true and false answers//
document.write("hey"+17);
document.write(15==15);
document.write(7=11);
//assign variables and test if they are equal//
x=247;
y=247;
document.write(x===y);
//assign variables of different types and test if they are equal//
a="Hello world";
b=83;
document.write(a===b);
//assign variables of the same type and test if they are equal//
c="27";
d=27;
document.write(c===d);
//assign different variables of the same type and test if they are equal//
e="sup";
f="wassap";
document.write(e===f);
//use and operator//
document.write(15>12 && 9>3);
document.write(6>11 && 11>5);
//use or operator//
document.write(3>17 || 12>6);
document.write(12>20 || 9>19);
//use not operator//
function not_Function(){
    document.getElementById("Not").innerHTML=!(20>10);
}
