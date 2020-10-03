//Create a dictionary to assign multiple attributes to an object//
function my_Dictionary(){
    var Flowers={
        //Assign attributes//
        Species:"Orchid",
        Color:"Yellow",
        Size:"Large",
        Leaves:"Two",
        Buds:"Six"
    };
    //delete the color attribute from flowers dictionary//
    delete Flowers.Color;
    //execute dictionary code to display color of flower//
    //not going to work because color was deleted in step above//
    document.getElementById("Dictionary").innerHTML=Flowers.Color;
    }