//utilize the simple let statement//
var j=15;
document.write(j);
{
    let j=26;
    document.write("<br>" +j);
}
document.write("<br>"+j);
//create a while loop//
function Call_Loop(){
    var Digit="";
    var x=1;
    while (x<15){
        Digit+="<br>"+x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}
//create a for loop//
var Instruments=["Guitar","Drums","Piano","Bass Guitar","Violin","Trumpet","Flute"];
var Content="";
var y;
function for_Loop(){
    for(y=0;y<Instruments.length;y++){
        Content+=Instruments[y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
//create and utilize an array//
function array_Function(){
    var character=[];
    character[0]="Fiona";
    character[1]="Donkey";
    character[2]="Puss in Boots";
    character[3]="Gingy";
    character[4]="Big Bad Wolf";
    document.getElementById("Array").innerHTML="My favorite character from Shrek is "+ character[1]+".";
}
//create a function that uses the const keyword//
function constant_function(){
    const petCat={age:"young",type:"long hair",color:"orange"};
    petCat.color="black";
    petCat.size="large";
    document.getElementById("Constant").innerHTML="The size of the "+ petCat.age +" cat was "+ petCat.size;
}
//use the let keyword for an object//
let cookie={
    shape:"round ",
    flavor:"chocolate chip ",
    decoration:"frosted ",
    amount:"three ",
    description: function(){
        return "The cookie is a "+ this.decoration+ this.flavor;
    }
};
document.getElementById("cookie_object").innerHTML= cookie.description();