var color, screenWidth, randomHue, borderColor, linkColor, titleColor, s;

// The following function is from https://codepen.io/pankajparashar/pen/oFzIg
// Code by Pankaj Parashar
function rgbToHsl(r, g, b, ll){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

    if (max == min) { h = s = 0; } 
    else {
        var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {
        HSLCode: [(h*100+0.5)|0, ((s*100+0.5)|0) + '%'],
        sat: s
    };
};

function namedColor() {
    // Testing:
    colorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    
	var randomRGBColor = ["#"];
    
    for (i=0; i<6; i++) {
        randomNumber = Math.floor(Math.random() * 16);
        randomRGBColor.push(colorArray[randomNumber]);
    }
    
    randomRGBColor = randomRGBColor.join("");

    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
    
    R = hexToR(randomRGBColor);
    G = hexToG(randomRGBColor);
    B = hexToB(randomRGBColor);
    
	randomHue = Math.floor(Math.random() * 360);
    textColor = "#111";
    bgColor = "#ededed";
    sat = rgbToHsl(R,G,B).sat >= 0.5 ? "#111" : "#fff";
    newHSL = rgbToHsl(R,G,B).HSLCode;
    
    borderColor = "hsla(" + newHSL + ", 50%, 1)";
	linkColor = "hsla(" + newHSL + ", 75%, 1)";
    darkerColor = "hsla(" + newHSL + ", 35%, 1)";
    lighterColor = "hsla(" + newHSL + ", 95%, 1)";
    lighterColor2 = "hsla(" + newHSL + ", 85%, 1)";
    titleColor = rgbToHsl(R,G,B).sat >= 0.5 ? "#111" : "#fff";
    
    $('body').css("background", "linear-gradient(" + lighterColor + "," + lighterColor2 + ")");
	$('a').css("border-bottom", "2px solid " + linkColor);
	$('a')
        .mouseover(function () {
            $(this).css("border-bottom", "none").css("border-bottom", "2px solid " + borderColor).css("color", darkerColor);
        })
        .mouseout(function () {
            $(this).css("border-bottom", "2px solid " + linkColor).css("background", "none").css("color", textColor);
        });
//    $('h1').css("background", borderColor).css("color", titleColor);
    $('h1').css("color", darkerColor).css("border-bottom", "20px solid " + darkerColor).css("border-left", "20px solid " + linkColor).css("border-top", "20px solid " + lighterColor2).css("border-right", "20px solid " + borderColor);
    $('.h1-wrapper').css("color", borderColor);
    $('.star')
        .css("color", linkColor)
        .mouseover(function () {
            $(this).css("color", textColor);
        })
        .mouseout(function () {
            $(this).css("color", linkColor);
        });
    $('.swatch1')
        .css("background", bgColor);
    $('.swatch2')
        .css("background", borderColor);
    $('.swatch3')
        .css("background", linkColor);
};

$(document).ready(function () {
	namedColor();
    
	$('#alwayson').css("color", color);
	$("a[href^='http://']").attr("target", "_blank");
});