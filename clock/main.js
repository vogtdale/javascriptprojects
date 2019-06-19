function clock() {
	var date = new Date();
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hours = date.getHours();
	
	var secHand = document.getElementsByClassName('sec')[0];
	secHand.style.transform = "rotate(" + sec * 6 + "deg" + ")";

	var minHand = document.getElementsByClassName('min')[0];
	minHand.style.transform = "rotate(" + min * 6 + "deg" + ")";

	var hourHand = document.getElementsByClassName('hours')[0];
	hourHand.style.transform = "rotate(" + hours * 30 + "deg" + ")";
}

setInterval(clock, 1000);

clock();