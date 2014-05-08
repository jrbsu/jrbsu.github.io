$(document).ready(function() {
	var random = 0;
	var colourArray = [];
	var colour;
	for (var i=0;i<6;i++) {
		random = Math.floor(Math.random() * (15 + 1)) + 0;
		switch (random) {
		case 10:
    		random = "A";
    		break;
		case 11:
    		random = "B";
    		break;
		case 12:
    		random = "C";
    		break;
		case 13:
    		random = "0";
    		break;
		case 14:
    		random = "1";
    		break;
		case 15:
    		random = "2";
    		break;
    	default:
    		break;
    	}
    	colourArray.push(random);
    }
    colour = "#"+colourArray[0]+colourArray[1]+colourArray[2]+colourArray[3]+colourArray[4]+colourArray[5];
	console.log(colour);
	$('a').css("color", colour);
});