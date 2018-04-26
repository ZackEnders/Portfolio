// var tz = Math.round(panelSize / 2 / Math.tan(Math.PI * 2 / numberOfPanels / 2));
// // or simplified to
// var tz = Math.round(panelSize / 2 / Math.tan(Math.PI / numberOfPanels));

// function apothem(width, sides) {
//     return Math.ceil(width / (2 * Math.tan(Math.PI / sides)));
// }
// function magic(width, sides) {
//     return Math.round(width * Math.log(sides));
// }
// var btnContainer = document.getElementById("buttons");
// var btns = document.getElementsByClassName(".btn");

// for (var i = 0; i < btns.length; i++) {
// 	document
// 		.getElementsByClassName(".btn")
// 		[i].addEventListener("click", function() {
// 			console.log("active");
// 			var current = document.getElementsByClassName("active");
// 			current[0].className = current[0].className.replace(" active", "");
// 			this.className += " active";
// 		});
// }

function home() {
	document.getElementById("cube").style.transform =
		"rotateX(-15deg) rotateY(15deg)";
	document.getElementById("container").style.transform =
		"translate(-50%, -50%)";
}

function aboutMe() {
	document.getElementById("cube").style.transform = "rotateY(-90deg)";
	document.getElementById("container").style.transform =
		"translate(-110%, -48%)";
}

function contact() {
	document.getElementById("cube").style.transform = "rotateY(90deg)";
	document.getElementById("container").style.transform =
		"translate(-110%, -48%)";
}
function project1() {
	document.getElementById("cube").style.transform = "rotateX(-90deg)";
	document.getElementById("container").style.transform = "translate(10%, -48%)";
}
function project2() {
	document.getElementById("cube").style.transform = "rotateX(90deg)";
	document.getElementById("container").style.transform = "translate(10%, -48%)";
}
function project3() {
	document.getElementById("cube").style.transform = "rotateY(180deg)";
	document.getElementById("container").style.transform = "translate(10%, -48%)";
}
