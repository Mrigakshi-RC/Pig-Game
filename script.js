'use strict';
let  diceBtn= document.querySelector(".btn--roll");
let scoreTable={"user1":0,"user2":0};
let currentUser="user1";

function changeImage(){
    let diceVal={1:"./dice-1.png",2:"./dice-2.png",3:"./dice-3.png",4:"./dice-4.png",5:"./dice-5.png",6:"./dice-6.png",}
    let score=Math.ceil(Math.random() * 6);
    document.querySelector(".dice").src=diceVal[score];
    if (score===1)
    resetScore(currentUser)
    else
    updateScore(currentUser,score);
}

function updateScore(user,score){
    scoreTable[user]+=score;
    if (user==="user1")
    document.querySelector("#score--0").innerText=scoreTable[user]+score;
    else
    document.querySelector("#score--1").innerText=scoreTable[user]+score;
}

function resetScore(user){
    scoreTable[user]=0;
    if (user==="user1"){
        document.querySelector("#score--0").innerText=0;
        currentUser="user2";
    }
    else{
        document.querySelector("#score--1").innerText=0;
        currentUser="user1";
    }
}

diceBtn.addEventListener("click",changeImage);