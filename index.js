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
// function logo() {
// 	document.getElementById("logo").style.visibility = "visible";
// 	document.getElementById("logo").style.transform = "translate(-500px, 10px)";
// }
// var aboutDisplay = document.getElementById("about").style.visibility;
// var contactDisplay = document.getElementById("contact").style.visibility;
// var project1Display = project1.style.visibility;
// var project2Display = project2.style.visibility;
// var project3Display = project3.style.visibility;

//Checks in the content box is displayed
function displayed() {
	switch ("block") {
		case document.getElementById("about").style.display:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
			document.getElementById("about").style.display = "none";
			break;
		case document.getElementById("contact").style.display:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
			document.getElementById("contact").style.display = "none";
			break;
		case document.getElementById("project1").style.display:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
			document.getElementById("project1").style.display = "none";
			break;
		case document.getElementById("project2").style.display:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
			document.getElementById("project2").style.display = "none";
			break;
		case document.getElementById("project3").style.display:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
			document.getElementById("project3").style.display = "none";
			break;
		default:
			document.getElementById("content1").style.display = "none";
			document.getElementById("content2").style.display = "none";
	}
}

function home() {
	displayed();
	// document.getElementById("cube").style.transform = "rotateY(15deg)";
	document.getElementById("container").style.transform =
		"translate(-50%, -50%)";
}

function aboutMe() {
	displayed();
	document.getElementById("cube").style.transform = "rotateY(-90deg)";
	document.getElementById("container").style.transform =
		"translate(-118%, -48%)";
	document.getElementById("content1").style.display = "block";
	document.getElementById("about").style.display = "block";
}

function contact() {
	displayed();
	document.getElementById("cube").style.transform = "rotateY(90deg)";
	document.getElementById("container").style.transform =
		"translate(-118%, -48%)";
	document.getElementById("content1").style.display = "block";
	document.getElementById("contact").style.display = "block";
}
function project1() {
	displayed();
	document.getElementById("cube").style.transform = "rotateX(-90deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project1").style.display = "block";
}
function project2() {
	displayed();
	document.getElementById("cube").style.transform = "rotateX(90deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project2").style.display = "block";
}
function project3() {
	displayed();
	document.getElementById("cube").style.transform = "rotateY(180deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project3").style.display = "block";
}
