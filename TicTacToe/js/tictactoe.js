let activePlayer='X';
let selectedSquares=[];
//Create a function to place the images into the container as pictures//
function placeXorO(squareNumber){
    if(!selectedSquares.some(element=>element.includes(squareNumber))){
        let select=document.getElementById(squareNumber);
        //set player's image as x and computer image to place as o//
        if(activePlayer==='X'){
            select.style.backgroundImage='url("images/x.png")';
        }else{
            select.style.backgroundImage='url("images/o.png")';
        }
        selectedSquares.push(squareNumber+activePlayer);
        //check conditions to see if the game has been won//
        checkWinConditions();
        if(activePlayer==="X"){
            activePlayer="O";
        }else{
            activePlayer="X";
        }
        //play an audio clip every time an image is placed//
        audio("./media/place.mp3");
        //disable players click while computer is taking its turn//
        if(activePlayer==="O"){
            disableClick();
            setTimeout(function(){computersTurn();},1000);
        }
        return true;
    }
    //lets computer pick a random square on the board and place their image there//
    function computersTurn(){
        let success=false;
        let pickASquare;
        while(!success){
            pickASquare=String(Math.floor(Math.random()*9));
            if(placeXorO(pickASquare)){
                placeXorO(pickASquare);
                success=true;
            };
        }
    }
}
//create a function to check for 3 xs in a row or 3 os in a row, any way they could be in the array//
function checkWinConditions(){
    if (arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100);}
    else if(arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304);}
    else if(arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508);}
    else if(arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558);}
    else if(arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558);}
    else if(arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558);}
    else if(arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90);}
    else if(arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520);}
    else if(arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100);}
    else if(arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304);}
    else if(arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508);}
    else if(arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558);}
    else if(arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558);}
    else if(arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558);}
    else if(arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90);}
    else if(arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520);}
    //if all areas are checked but all squares of the array are full check for condition of a tie and play tie sound//
    else if(selectedSquares.length>=9){
        audio('./media/tie.mp3');
        setTimeout(function(){resetGame();},1000);
    }
    function arrayIncludes(squareA, squareB, squareC){
        const a=selectedSquares.includes(squareA);
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC);
        if(a===true && b===true && c===true){return true;}
    }
}
//disables click while computer takes its turn//
function disableClick(){
    body.style.pointerEvents='none';
    setTimeout(function() {body.style.pointerEvents='auto';},1000);
}
//allows audio to play based on user action
function audio(audioURL){
    let audio=new Audio(audioURL);
    audio.play();
}
//draw a line through images if there are 3 in a row//
function drawWinLine(coordX1,coordY1,coordX2,coordY2){
    const canvas=document.getElementById('win-lines');
    const c=canvas.getContext('2d');
    let x1=coordX1, y1=coordY1, x2=coordX2,y2=coordY2, x=x1, y=y1;

//animate the win line so it is slowly drawn through the 3 images rather than just appearing there//
    function animateLineDrawing(){
        const animationLoop=requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth=10;
        c.strokeStyle='rgba(70,255,33,.8)';
        c.stroke();
        if(x1<=x2&&y1<=y2){
            if(x<x2){x+=10;}
            if(y<y2){y+=10;}
            if(x>=x2&&y>=y2){cancelAnimationFrame(animationLoop);}
        }
        if(x1<=x2&&y1>=y2){
            if(x<x2){x+=10;}
            if(y>y2){y-=10;}
            if(x>=x2&&y<=y2){cancelAnimationFrame(animationLoop);}
        }
}
//cleares the animation so it does not repeat//
function clear(){
    const animationLoop=requestAnimationFrame(clear);
    c.clearRect(0,0,608,608);
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media/winGame.mp3');
animateLineDrawing();
setTimeout(function(){clear();resetGame();},1000);
}
//resets game so it can be played again//
function resetGame(){
    for(let i=0;i<9;i++){
        let square=document.getElementById(String(i));
        square.style.backgroundImage='';
    }
    selectedSquares=[];
}