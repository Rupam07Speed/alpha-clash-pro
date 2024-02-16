document.addEventListener('keyup',handelKeyboardButtonPress)

function handelKeyboardButtonPress(event){
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById("current-text"); 
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);
    if(playerPressed === expectedAlphabet)
    {
        updateScore();
        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        
        const life= loseLife();
        if(life == 0)
        {
            gameOver(); 
        }
    }
}

function loseLife(){
    const life = document.getElementById("life-number");
    let lifeNum = parseInt(life.innerText);
    lifeNum = lifeNum - 1;
    life.innerText = lifeNum; 

    return lifeNum;
}


function updateScore(){
    const scoreNum = document.getElementById("score");
    let score = parseInt(scoreNum.innerText);
    cscore = score + 1;
    scoreNum.innerText = cscore; 
    return score;
}


function gameOver(){
    const currentAlphabet = document.getElementById("current-text"); 
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    removeBackgroundColorByID(expectedAlphabet);
        
    const score = updateScore();
    console.log(score);
    const updatedscore = document.getElementById("updated-score");
    console.log(score,updatedscore.innerText);
    updatedscore.innerText = score;

    hideElementByID('play-ground');
    showElementByID('finalscore');

    
}
function setLifeAndScore(){
    setSpanText("life-number",5);
    setSpanText("score",0);
}

function continueGame(){
    // Generate random alphabet
    const alphabet = getaRandomAlphabet();
    console.log(alphabet);
    const ranAlpha = document.getElementById("current-text");
    ranAlpha.innerText = alphabet;
    addBackgroundColorByID(alphabet);


}

function playAgain(){

    hideElementByID('finalscore');
    showElementByID('play-ground');
    setLifeAndScore();
    continueGame();
}

function play(){
    hideElementByID('home');
    showElementByID('play-ground');
    continueGame();
}


