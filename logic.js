
let openPopBtn = document.querySelector("#open-popup-btn");
let closePopBtn = document.querySelector(".popup-close-btn");
openPopBtn.addEventListener("click", function () {
    document.querySelector(".popup").classList.add("popup-active");
});
closePopBtn.addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("popup-active");
});

let count = 1;
let choiceUser;
let choiceCom;
let sc = document.querySelector("#score");
let buttons = document.querySelectorAll("#btn-selected");
let store = '';
let container = document.querySelector(".secondcontainer");
let playButton = document.querySelector(".play-again");
let add = document.querySelector(".add");
function comRandomChoice() {
    let computerOptions = ["rock", "paper", "scissor"]
    let computerNum = Math.floor(Math.random() * 3) + 1;
    let result = computerOptions[computerNum];
    return result;

}
buttons.forEach(button => {
    button.addEventListener("click", function () {
        choiceUser = button.getAttribute('data-choice');
        choiceCom = comRandomChoice();
        calcOutput();
        add.style.display = 'flex';
    });
});
function calc() {
    container.style.display = 'flex';
    add.style.display = 'none';
    playButton.style.display = 'none';

}
function calcOutput() {
    if (choiceUser === choiceCom) {
        document.querySelector(".tryagain").textContent = "try again";
    }

    else if (
        (choiceUser === 'paper' && choiceCom === 'rock') ||
        (choiceUser === 'rock' && choiceCom === 'scissor') ||
        (choiceUser === 'scissor' && choiceCom === 'paper')

    ) {

        sc.textContent = count++;
        store = `<div class="left">
            <h2> YOU PICKED</h2>
            <div><button type="button" class="btn-style ${choiceUser}-style"> <img
                src="${choiceUser}.png" class="img-style"></button></div>
        </div>
        <div class="center">
            <p class="msg">YOU WIN AGAINST PC</p>
           
        </div>
        <div class="right">
            <h2> PC PICKED</h2>
            <div><button type="button" class="btn-style ${choiceCom}-style"> <img
                src="${choiceCom}.png" class="img-style"></button></div>
        </div>`;
        document.querySelector(".add").innerHTML = store;
        playButton.style.display = 'flow-root';
        container.style.display = 'none';
        document.querySelector(".tryagain").style.display = 'none';


    }
    else {
        store = `<div class="left">
            <h2> YOU PICKED</h2>
            <div><button type="button" class="btn-style ${choiceUser}-style"> <img
                src="${choiceUser}.png" class="img-style"></button></div>
        </div>
        <div class="center">
            <p class="msg">YOU LOST AGAINST PC</p>
        </div>
        <div class="right">
            <h2> PC PICKED</h2>
            <div><button type="button" class="btn-style ${choiceCom}-style"> <img
                src="${choiceCom}.png" class="img-style"></button></div>
        </div>`;

        document.querySelector(".add").innerHTML = store;
        playButton.style.display = 'flow-root';
        container.style.display = 'none';
        document.querySelector(".tryagain").style.display = 'none';
    }
}
// playButton.addEventListener("click", function () {
//     container.style.display = 'flex';
//     playButton.style.display = 'none';

// })

