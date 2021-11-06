const btnPlay = document.querySelector("#btnPlay");
const chose = document.querySelector("#chose");
const victory = document.querySelector("#victory");

const HIDDEN_CLASSNAME = "hidden";
var maxNumber = "";
var choseNumber = "";
var randomNumber = "";

function onPlayClick(event) {
	event.preventDefault();
	maxNumber = document.getElementById("NUM1").value;
	choseNumber = document.getElementById("NUM2").value;
	randomNumber = Math.abs(Math.floor(Math.random() * maxNumber));
	victory.innerText = "YOU WON!!!!";
	chose.classList.remove("hidden");
	victory.classList.remove("hidden");
	chose.innerText =
		"You Chose :" +
		choseNumber +
		",   " +
		"the machine chose:" +
		randomNumber +
		".";
	fnlast();
}
function fnlast() {
	if (choseNumber == randomNumber) {
		victory.innerText = "YOU WON!!!!";
	} else {
		victory.innerText = "YOU Lose!!!!";
	}
}

btnPlay.addEventListener("click", onPlayClick);
