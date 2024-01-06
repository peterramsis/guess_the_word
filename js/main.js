let gameName = "Guess the word";
document.title = gameName;
document.querySelector("#game_title").innerHTML = gameName;


let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry =1;

function generateInput(){
  
    const inputContainer = document.querySelector(".inputs");

    for (let i = 1; i < numberOfTries; i++){
        const divTry = document.createElement("div");
        divTry.classList.add(`try-${i}`);
        divTry.innerHTML = `<span> try ${i} </span>`;
        

        if (i !==1) divTry.classList.add("disabled_input");

        for (let j = 0; j < numberOfLetters; j++){
            const input = document.createElement("input");
            input.id = `guess-${i}-letter-${j}`;
            input.type = "text";
            input.setAttribute("maxLength" , 1);
            divTry.appendChild(input);
        }
        inputContainer.appendChild(divTry);
        inputContainer.children[0].children[1].focus();
    }

}



window.onload = function(){
    generateInput();
}
document.querySelector("footer").innerHTML =`${gameName} Game Created by Peter Ramsis`