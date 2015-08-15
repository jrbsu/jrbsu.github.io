var colour;
var screenWidth;
var random;

function windowResize() {
	screenWidth = window.innerWidth;
	if (screenWidth > 1000) {
		$('body').css("background", "#DDDDDB url(img/bg"+random+".png) fixed no-repeat center right");
	} else {
		$('body').css("background", "#DDDDDB");
	};
};

function namedColour() {
	loadingBar();
	var colourArray = ["RGB(83, 153, 114)", "RGB(150, 27, 51)", "RGB(49, 78, 84)", "RGB(112, 84, 167)", "RGB(178, 30, 103)", "RGB(101, 124, 21)", "RGB(197, 133, 32)", "RGB(57, 40, 110)", "RGB(62, 82, 88)", "RGB(116, 121, 163)", "RGB(33, 145, 174)", "RGB(47, 68, 178)", "RGB(182, 71, 80)", "RGB(55, 164, 43)", "RGB(125, 96, 77)", "RGB(127, 59, 47)", "RGB(172, 32, 148)", "RGB(222, 20, 57)", "RGB(77, 20, 61)", "RGB(199, 112, 8)", "RGB(214, 206, 0)", ];
	var nameArray = ["ocean green", "vivid burgundy", "dark slate grey", "royal purple", "rich maroon", "fern frond", "geebung orange", "midnight purple", "casal blue", "deluge", "pelorous", "violet blue", "rose vale", "forest green", "Roman coffee", "nutmeg", "fandango", "crimson", "blackberry", "mocha", "citrous"];
	
	random = Math.floor(Math.random()*colourArray.length);
	console.log(random);
	colour = colourArray[random];
	var colourName = nameArray[random];
	
	if (screenWidth > 1000) {
		$('body').css("background", "#DDDDDB url(img/bg"+random+".png) fixed no-repeat center right");
	} else {
		$('body').css("background", "#DDDDDB!important");
	};
    
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
	$('.star').css("color", colour);
	$('#colourinfo').html("You're viewing this page in <span style='color:"+colour+"; font-weight:600;'>"+colourName+"</span>.");
	$('#slug').html("is a journalist and communicator, seen here in <span style='color:"+colour+"; font-weight:600;'>"+colourName+"</span>.");
};

function loadingBar() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#111",
        backgroundColor: "#d4d4d4",
        percentage: false,
        barHeight: 1,
        minimumTime: 50,
        fadeOutTime: 200
    });
};

function slidersAndStars() {
	windowResize();
	if (screenWidth > 1000) {
		$("div.panels:eq(0)> ul.slide").hide();
		$('div.panels:eq(0)> h3.panel').click(function() {
			$(this).next('ul.slide:hidden').slideDown('fast')
			.siblings('ul.slide:visible').slideUp('fast');
			$('h3.panel').css("color", "#111");
			$('.star').html("&#9734;&nbsp;");
			$(this).css("color", colour);
			$(this).children('.star').html("&#9733;&nbsp;");
		//	$(this).next('span').html('&darr;');
		//	$('div.panels:hidden').siblings('span').html('&rarr;');
		});
	} else {
		$("div.panels:eq(0)> ul").show();
		$('.star').html("&#9733;&nbsp;");
	};
};

$(window).resize(function () {
	windowResize();
	slidersAndStars();
});

$(document).ready(function () {
	windowResize();
	slidersAndStars();
	namedColour();
	$('#alwayson').css("color", colour);
	$("a[href^='http://']").attr("target","_blank");
});

// The following code is by Chris Coyier & tweaked by Mathias Bynens
$(function() {
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='https://www.youtube-nocookie.com']"),
	    // The element that is fluid width
	    $fluidEl = $(".panels");
	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
	});
	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {
		var newWidth = $fluidEl.width();
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});
	// Kick off one resize to fix all videos on page load
	}).resize();
});