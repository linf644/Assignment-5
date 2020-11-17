//get "r"; have the "r" to move when click;
var r = document. getElementById("r");
var o = document.getElementById("o");
var l2 = document.getElementById("l2");

r.addEventListener("mouseover", Kick);
r.addEventListener("mouseout", RemoveKick);
o.addEventListener("click", Rollo);
o.addEventListener("mouseout", RemoveClass);
l2.addEventListener("click", SpinL2);
l2.addEventListener("mouseout", RemoveClass)
// l2.addEventListener("mouseup", RemoveClass);

function Kick(){
	r.classList.add("kick");
}
function RemoveKick(){
	r.classList.remove("kick");
}

function Rollo(){
	o.classList.add("roll");
}
//set "o" to default after clicking;
function RemoveClass(){
  setTimeout(function(){
		o.classList.remove("roll");
	},4000);
}
// function DeleteAnimation(){
// 	o.classList.remove("roll");
// }
function SpinL2(){
	l2.classList.add("spin");
}
function RemoveClass(){
	setTimeout (function(){
		l2.classList.remove("spin");
	}, 3000);
}
//changing the bacground color if refresh;
var rdm=Math. random();
var text=document.getElementById("text");
if (rdm < 0.5){
	console.log(rdm);
	text.style.color="#FFF0B8 ";
}
// function DeleteAnimation(){
// 	l2.classList.remove("spin");
// }
