function hideElementByID(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('hidden');
}

function showElementByID(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
        // show the play screen
    }
    function addBackgroundColorByID(elementId){
        const element = document.getElementById(elementId); 
        element.classList.add('bg-orange-400');
    }
    function setSpanText(elementId,score){
        const element = document.getElementById(elementId);
    element.innerText = score;
    }
    function removeBackgroundColorByID(elementId){
        const element = document.getElementById(elementId); 
        element.classList.remove('bg-orange-400');
    }
    function getaRandomAlphabet(){
        // alphabet array
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabet.split('');
        // random index
        const randomNumber = Math.round(Math.random()*25);
        const randomAlphabet = alphabets[randomNumber];
        return randomAlphabet;
    }