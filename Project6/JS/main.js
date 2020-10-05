//Create function that sets a voting age//
function Vote_Function(){
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    //Set voting age to 18 or greater//
    //Display result based on input being larger or smaller than 18//
    Can_vote=(Age<18)?"You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote+" to vote.";

}
//Create function to add attributes to object//
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
//Create variables to assign values to the attributes//
var Jack=new Vehicle("Dodge","Viper", 2020, "Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
//Display specific attributes by calling them//
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+ Erik.Vehicle_Color+"-colored " + Erik.Vehicle_Model+" made in "+ Erik.Vehicle_Year;
}
function newAndThis(){
    document.getElementById("New_and_This").innerHTML="New and This";
}
//create a nested function that does an addition problem//
function count_Function(){
    document.getElementById("Counting").innerHTML=Count();
    function Count(){
        //Nested function assigns variable and adds one to it//
        var Starting_point=9;
        function Plus_one(){Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}
//Create a nested function that does a multiplication problem//
function Times(){
    document.getElementById("multiply").innerHTML=Times();
    function Times(){
        //Nested function assigns 13 to the starting number and multiplies it by 3//
        var firstNum=13;
        function timesThree(){firstNum *=3;}
        timesThree();
        return firstNum;
    }
}