$(document).ready(function randomColour() {
	var random = 0;
	var colourArray = [];
	var colour;
	for (var i=0;i<3;i++) {
		random = Math.floor(Math.random() * (180-20 + 1)) + 20;
    	colourArray.push(random);
    }
    colour = "rgb("+colourArray[0]+","+colourArray[1]+","+colourArray[2]+")";
//	console.log(colour);
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
	/* Code from https://gist.github.com/matthutchinson/1648603 */
	average = function(a) {
		var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
		for(var m, s = 0, l = t; l--; s += a[l]);
		for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
		return r.deviation = Math.sqrt(r.variance = s / t), r;
	}
	var x = average(colourArray);
	var yellowness = (colourArray[0]+colourArray[1])/2;
	if (x.deviation < 15 || 30 > x.mean > 130 || yellowness > 120) { /* If the colours are too grey or too bright (or too yellow...), roll them again */
		randomColour();
	}
//	console.log("Mean: "+x.mean+", Dev: "+x.deviation+", Yellowness: "+yellowness);

});

$(document).ready(function() {
    $(".explanation").hide();
    $(".ref").click(function(event) {
    $(this.nextSibling).toggle();
		event.stopPropagation();
    });
    $("body").click(function(event) {
        jQuery(".explanation").hide();
    });
});