'use strict';
let  diceBtn= document.querySelector(".btn--roll");

function changeImage(){
    document.querySelector(".dice").src="new url";
}

diceBtn.addEventListener("click",changeImage);