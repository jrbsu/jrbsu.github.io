var color, randomHue, baseColor, linkColor, titleColor, bgColor, textColor, darkerColor, lightestColor, lighterColor, colorName, darkestColor;

function namedColor() {
    "use strict";
    randomHue = Math.floor(Math.random() * 360);
    textColor = "#111";
    bgColor = "#ededed";
    
    darkestColor = "hsla(" + randomHue + ", 100%, 20%, 1)";
    darkerColor = "hsla(" + randomHue + ", 100%, 40%, 1)";
    baseColor = "hsla(" + randomHue + ", 100%, 50%, 1)";
	linkColor = "hsla(" + randomHue + ", 100%, 70%, 1)";
    lighterColor = "hsla(" + randomHue + ", 100%, 80%, 1)";
    lightestColor = "hsla(" + randomHue + ", 100%, 90%, 1)";
    
    switch (true) {
    case randomHue > 0 && randomHue <= 20:
        colorName = "red";
        break;
    case randomHue > 20 && randomHue <= 50:
        colorName = "orange";
        break;
    case randomHue > 50 && randomHue <= 80:
        colorName = "yellow";
        break;
    case randomHue > 80 && randomHue <= 110:
        colorName = "lime green";
        break;
    case randomHue > 110 && randomHue <= 140:
        colorName = "green";
        break;
    case randomHue > 140 && randomHue <= 170:
        colorName = "teal";
        break;
    case randomHue > 170 && randomHue <= 200:
        colorName = "cyan";
        break;
    case randomHue > 200 && randomHue <= 230:
        colorName = "aqua blue";
        break;
    case randomHue > 230 && randomHue <= 260:
        colorName = "blue";
        break;
    case randomHue > 260 && randomHue <= 290:
        colorName = "purple";
        break;
    case randomHue > 290 && randomHue <= 320:
        colorName = "magenta";
        break;
    case randomHue > 320 && randomHue <= 350:
        colorName = "pink";
        break;
    case randomHue > 350 && randomHue <= 360:
        colorName = "red";
        break;
    }
    
    $('.color-name').text(colorName);
    
    $('body').css("background", "linear-gradient(" + lightestColor + "," + lighterColor + ")");
	$('a')
        .css("border-bottom", "3px solid " + linkColor)
        .mouseover(function () {
            $(this).css("border-bottom", "none").css("border-bottom", "3px solid " + baseColor).css("color", darkerColor);
        })
        .mouseout(function () {
            $(this).css("border-bottom", "3px solid " + linkColor).css("background", "none").css("color", textColor);
        });
    
    $('h1, h2')
        .css("box-shadow", "0px 0px 50px " + darkerColor)
        .css("color", darkestColor)
        .css("border-bottom", "20px solid " + darkerColor)
        .css("border-left", "20px solid " + linkColor)
        .css("border-top", "20px solid " + lighterColor)
        .css("border-right", "20px solid " + baseColor);
}

$(document).ready(function () {
    "use strict";
	namedColor();
	$("a[href^='http://']").attr("target", "_blank");
});