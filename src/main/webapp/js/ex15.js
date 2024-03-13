function showDetail() {
	document.querySelector("#desc").style.display = "block";
	document.querySelector("#open").style.display = "none";
}

function hideDetail() {
	document.querySelector("#desc").style.display = "none";
	document.querySelector("#open").style.display = "block";
}

const open = document.querySelector("#open");
open.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display = "inline";
	document.querySelector("#open").style.display = "none";
});

const close = document.querySelector("#close");
close.addEventListener("click", (e) => {
	document.querySelector("#desc").style.display = "none";
	document.querySelector("#open").style.display = "inline";
});

const btnPlus = document.querySelector("#btnPlus");
btnPlus.addEventListener("click", (e) => {
	let k = document.querySelector("#res").innerHTML;
	k++;
	document.querySelector("#res").innerHTML = k;
});

const btnMinus = document.querySelector("#btnMinus");
btnMinus.addEventListener("click", (e) => {
	let k = document.querySelector("#res").innerHTML;
	k--;
	document.querySelector("#res").innerHTML = k;
});


