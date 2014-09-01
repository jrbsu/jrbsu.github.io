$(document).ready(function namedColour() {
	var colourArray = ["RGB(41, 164, 124)", "RGB(150, 27, 51)", "RGB(49, 78, 84)", "RGB(112, 84, 167)", "RGB(178, 30, 103)", "RGB(111, 120, 45)", "RGB(197, 133, 32)", "RGB(59, 30, 109)", "RGB(96, 120, 136)", "RGB(116, 121, 163)", "RGB(33, 145, 174)", "RGB(47, 68, 178)", "RGB(182, 71, 80)", "RGB(55, 164, 43)", "RGB(125, 96, 77)", "RGB(172, 64, 33)", "RGB(172, 32, 148)", "RGB(222, 20, 57)", "RGB(77, 20, 61)", "RGB(199, 112, 8)", "RGB(248, 231, 16)"];
	var nameArray = ["jungle green", "vivid burgundy", "dark slate grey", "royal purple", "rich maroon", "olivetone", "geebung", "midnight blue", "hoki", "deluge", "pelorous", "violet blue", "rose vale", "forest green", "Roman coffee", "rock spray", "fandango", "crimson", "blackberry", "chocolate", "lemon"];
	
	var random = Math.floor(Math.random()*colourArray.length);
	var colour = colourArray[random];
	var colourName = nameArray[random];
    
	$('h1').css("color", colour);
	$('a').css("background", "#d4d4d4");
	$('a').mouseenter(function() {
   		$(this).css("color","white");
		$(this).css("background", colour);
	});
	$('a').mouseout(function() {
		$(this).css("color", "#111");
		$(this).css("background", "#d4d4d4");
	});
	$('ul').css("border-left", "3px solid "+colour);
	$('#colourinfo').html("You're viewing this page in <span style='color:"+colour+"; font-weight:600;'>"+colourName+"</span>.");

$("div.panels:eq(0)> ul").hide();
$('div.panels:eq(0)> h3').click(function() {
	$(this).next('ul:hidden').slideDown('fast')
	.siblings('ul:visible').slideUp('fast');
	$('h3').css("color", "#111");
	$('.star').html("&#9734;&nbsp;");
	$(this).css("color", colour);
	$(this).children('.star').html("&#9733;&nbsp;");
//	$(this).next('span').html('&darr;');
//	$('div.panels:hidden').siblings('span').html('&rarr;');
});

});