/*
$(document).ready(function randomColour() {
	var random = 0;
	var colourArray = [];
	var colour;
	for (var i=0;i<3;i++) {
		random = Math.floor(Math.random() * (180-20 + 1)) + 20;
    	colourArray.push(random);
    }
    colour = "rgb("+colourArray[0]+","+colourArray[1]+","+colourArray[2]+")";
	console.log(colour);
	$('h1').css("color", colour);
	$('a').css("color", colour);
	$('a').mouseenter(function() {
   		$(this).css("color","white");
		$(this).css("background", colour);
	});
	$('a').mouseout(function() {
		$(this).css("color", colour);
		$(this).css("background", "none");
	});
	$('.explanation').css("border", "3px solid "+colour);

// Code from https://gist.github.com/matthutchinson/1648603
	average = function(a) {
		var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
		for(var m, s = 0, l = t; l--; s += a[l]);
		for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
		return r.deviation = Math.sqrt(r.variance = s / t), r;
	}
	var x = average(colourArray);
	var yellowness = (colourArray[0]+colourArray[1])/2;
	if (x.deviation < 15 || 30 > x.mean > 130 || yellowness > 120) { // If the colours are too grey or too bright (or too yellow...), roll them again
		randomColour();
	}
//	console.log("Mean: "+x.mean+", Dev: "+x.deviation+", Yellowness: "+yellowness);
});
*/

$(document).ready(function namedColour() {
	var colourArray = ["RGB(41, 164, 124)", "RGB(150, 27, 51)", "RGB(49, 78, 84)", "RGB(112, 84, 167)", "RGB(178, 30, 103)", "RGB(111, 120, 45)", "RGB(197, 133, 32)", "RGB(59, 30, 109)", "RGB(96, 120, 136)", "RGB(116, 121, 163)", "RGB(33, 145, 174)", "RGB(47, 68, 178)", "RGB(182, 71, 80)", "RGB(55, 164, 43)", "RGB(125, 96, 77)", "RGB(172, 64, 33)", "RGB(172, 32, 148)", "RGB(222, 20, 57)", "RGB(77, 20, 61)", "RGB(199, 112, 8)"];
	var nameArray = ["jungle green", "vivid burgundy", "dark slate grey", "royal purple", "rich maroon", "olivetone", "geebung", "midnight blue", "hoki", "deluge", "pelorous", "violet blue", "rose vale", "forest green", "Roman coffee", "rock spray", "fandango", "crimson", "blackberry", "chocolate"];
	
	var random = Math.floor(Math.random()*colourArray.length);
	var colour = colourArray[random];
	var colourName = nameArray[random];
    
	$('h1').css("color", colour);
	$('a').css("background", "#ccc");
	$('a').mouseenter(function() {
   		$(this).css("color","white");
		$(this).css("background", colour);
	});
	$('a').mouseout(function() {
		$(this).css("color", "black");
		$(this).css("background", "#ccc");
	});
	$('.explanation').css("border", "3px solid "+colour);
	$('#colourinfo').html("You're viewing this page in <span style='color:"+colour+"; font-weight:600;'>"+colourName+"</span>.");
});

$(document).ready(function() {
    $(".explanation").hide();
    $(".ref").click(function(event) {
    $(this.nextSibling).css("display", "absolute");
		event.stopPropagation();
    });
    $("body").click(function(event) {
        $(".explanation").hide();
    });
});