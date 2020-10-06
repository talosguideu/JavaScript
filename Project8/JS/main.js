
//Create a function to concatenate strings together//
function full_Sentence(){
    //make several variables with parts of string//
    var part1="Hey now, ";
    var part2="you're an all-star, ";
    var part3="getcha game on, ";
    var part4="go playyyy!";
    //create variable that concatenates the strings//
    var whole=part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML=whole;
}
//create function to slice a string//
function sliceMethod(){
    //create string//
    var sentence="I like that boulder. That's a nice boulder.";
    //slice string to only between the 30th and 43rd character//
    var section= sentence.slice(30,43);
    document.getElementById("slice").innerHTML=section;
}
//create function to turn a number into a string//
function stringMethod(){
    var x=120;
    document.getElementById("numsToString").innerHTML=x.toString();
}
//create function to shorten number to precise length//
function precisionMethod(){
    var y=1345.24412349746531
    //set length to display number to only 10 characters//
    document.getElementById("Precision").innerHTML=y.toPrecision(10);
}