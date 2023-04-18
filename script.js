'use strict';
let  diceBtn= document.querySelector(".btn--roll");
let holdBtn=document.querySelector(".btn--hold");
let scoreTable={"user1":0,"user2":0};
let currTable={"user1":0,"user2":0};
let currentUser="user1";

function diceFunc(){
    let diceVal={1:"./dice-1.png",2:"./dice-2.png",3:"./dice-3.png",4:"./dice-4.png",5:"./dice-5.png",6:"./dice-6.png",}
    let score=Math.ceil(Math.random() * 6);
    document.querySelector(".dice").src=diceVal[score];
    if (score===1)
    resetScore(currentUser)
    else
    updateScore(currentUser,score);
}

function updateScore(user,score){
    currTable[user]+=score;
    if (user==="user1")
    document.querySelector("#current--0").innerText=currTable[user];
    else
    document.querySelector("#current--1").innerText=currTable[user];
    
    if(scoreTable[user]>=20)
    winGame();
}

function holdScore(){
    console.log(currTable)
    scoreTable[currentUser]+=currTable[currentUser];

    if (currentUser==="user1")
    document.querySelector("#score--0").innerText=scoreTable[currentUser];
    else
    document.querySelector("#score--1").innerText=scoreTable[currentUser];
    resetScore();

    if(scoreTable[currentUser]>=20)
    winGame();
    
    switchPlayer();
}

function resetScore(){
    currTable[currentUser]=0;
    if (currentUser==="user1"){
        document.querySelector("#current--0").innerText=0;
    }
    else{
        document.querySelector("#current--1").innerText=0;
    }
}

function switchPlayer(){
    if (currentUser==="user1"){
        currentUser="user2";
        document.querySelector(".player--1").classList.add("player--active");
        document.querySelector(".player--0").classList.remove("player--active");
    }
    else{
        currentUser="user1";
        document.querySelector(".player--0").classList.add("player--active");
        document.querySelector(".player--1").classList.remove("player--active");
    }
}

function winGame(){
    if (currentUser==="user1"){
        document.querySelector(".player--0").classList.add("player--winner");
    }
    else{
        document.querySelector(".player--1").classList.add("player--winner");
    }
}

diceBtn.addEventListener("click",diceFunc);
holdBtn.addEventListener("click",holdScore);