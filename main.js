// window.onload = function() {
// 	var vh = $(".vh").height() + 60;
// 	console.log(vh);
// 	$(".vh").height(vh);
// };

function showHide() {
	var disp = document.getElementById('check').style.display;
	if (disp == "block") {
		document.getElementById('check').style.display='';
	}
	else {
		document.getElementById('check').style.display='block';
	}
}
