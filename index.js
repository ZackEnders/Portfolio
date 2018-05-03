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

function openLogo() {
	setTimeout(function() {
		document.getElementById("logo").style.animation =
			"grow 0.8s linear, fadeIn 3s linear";
		document.getElementById("logo").style.display = "inline-block";
	}, 200);
}

function closeLogo() {
	setTimeout(function() {
		switch ("grow 0.8s linear, fadeIn 3s linear") {
			case document.getElementById("logo").style.animation:
				document.getElementById("logo").style.animation =
					"shrink 0.8s linear, fadeOut .8s linear";
				setTimeout(function() {
					document.getElementById("logo").style.display = "none";
				}, 770);
				break;
			default:
				document.getElementById("logo").style.animation =
					"grow 0.8s linear, fadeIn 3s linear";
				document.getElementById("logo").style.display = "inline-block";
		}
	}, 200);
}
function home() {
	displayed();
	closeLogo();

	document.getElementById("cube").style.transform = "rotateY(0deg)";
	document.getElementById("container").style.transform =
		"translate(-50%, -50%)";
}

function aboutMe() {
	displayed();
	openLogo();
	document.getElementById("cube").style.transform = "rotateY(-90deg)";
	document.getElementById("container").style.transform =
		"translate(-118%, -48%)";
	document.getElementById("content1").style.display = "block";
	document.getElementById("about").style.display = "block";
}

function contact() {
	displayed();
	openLogo();
	document.getElementById("cube").style.transform = "rotateY(90deg)";
	document.getElementById("container").style.transform =
		"translate(-118%, -48%)";
	document.getElementById("content1").style.display = "block";
	document.getElementById("contact").style.display = "block";
}
function project1() {
	displayed();
	openLogo();
	document.getElementById("cube").style.transform = "rotateX(-90deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project1").style.display = "block";
}
function project2() {
	displayed();
	openLogo();
	document.getElementById("cube").style.transform = "rotateX(90deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project2").style.display = "block";
}
function project3() {
	displayed();
	openLogo();
	document.getElementById("cube").style.transform = "rotateY(180deg)";
	document.getElementById("container").style.transform = "translate(12%, -48%)";
	document.getElementById("content2").style.display = "block";
	document.getElementById("project3").style.display = "block";
}
