function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeWrite(span) {
	var textSpan = document.getElementById(span).textContent;
	var randInt = 0;

	for (var i = 0; i < textSpan.length; i++) {
		randInt += parseInt(randomIntFromInterval(200, 300));
		var typing = setTimeout(
			function(pos) {
				var letter = document.createElement("span");
				letter.innerHTML = textSpan.charAt(pos);
				document.getElementById(span).appendChild(letter);
			},
			randInt,
			i
		);
	}
}

function wait(span) {
	setTimeout(function() {
		typeWrite(span);
	}, 3000);
}

function ready(fn) {
	if (
		document.attachEvent
			? document.readyState === "complete"
			: document.readyState !== "loading"
	) {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

ready(function() {
	wait("text");
});
