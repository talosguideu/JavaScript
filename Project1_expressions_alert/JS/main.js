//assign variables//
var Creatures = "Fairy Tale Things", Ogre = "Shrek", Sidekick = "Donkey", Cookie = "Gingy";
//assign colors to variables//
var Creatures = Creatures.fontcolor("yellow");
var Ogre = Ogre.fontcolor("green");
var Sidekick = Sidekick.fontcolor("brown");
var Cookie = Cookie.fontcolor("blue");
//concatenate a string//
var legendaryQuote = "Get out of"
+" my swamp!!!";
//display quote//
document.write(legendaryQuote);
//display "shrek" on screen//
document.write(Ogre);
//display "25" on screen//
window.alert(18+7);

//Create a function that assigns a sentence to a variable and calls that sentence when something is clicked on//
function myFunction(){
    var sentence="Not all who wander";
    sentence+=" are lost...";
    document.getElementById("profound").innerHTML=sentence;
}