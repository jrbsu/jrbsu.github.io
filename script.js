$(document).ready(function() {
	var random = 0;
	var colourArray = [];
	var colour;
	for (var i=0;i<3;i++) {
		random = Math.floor(Math.random() * (160 + 1));
    	colourArray.push(random);
    }
    colour = "rgb("+colourArray[0]+","+colourArray[1]+","+colourArray[2]+")";
	console.log(colour);
	$('a').css("color", colour);
	$('a').mouseenter(function() {
   		$(this).css("color","white");
		$(this).css("background", colour);
	});
	$('a').mouseout(function() {
		$(this).css("color", colour);
		$(this).css("background", "none");
	});
});