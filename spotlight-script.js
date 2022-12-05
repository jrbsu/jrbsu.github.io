$(document).on("mousemove", function(event) {
  var x = event.pageX;
  var y = event.pageY;

  let spotlight = $('.spotlight'),
    radius = 350; // set to radius in css

  x = x - (radius / 2);
  y = y - (radius / 2);

  $(spotlight).css("left", x + "px");
  $(spotlight).css("top", y + "px");
  $('body').append(spotlight);
});

$(document).ready(function () {
  randomHue = Math.floor(Math.random() * 360);
  randomHueInverted = randomHue + 180;

  var spotlightColor = "rgba(255, 255, 150, 1)",
    headingColor = "hsla(" + randomHue + ", 100%, 60%, 1)",
    headingColorBG = "hsla(" + randomHue + ", 100%, 10%, 1)",
    headingColorTop = "hsla(" + randomHue + ", 100%, 80%, 1)",
    headingColorRight = "hsla(" + randomHue + ", 100%, 50%, 1)",
    headingColorLeft = "hsla(" + randomHue + ", 100%, 40%, 1)",
    headingColorBottom = "hsla(" + randomHue + ", 100%, 30%, 1)",
    linkColor = "hsla(" + randomHue + ", 100%, 60%, 0.9)",
    photoCredit = "Photo credit: ";
  $('body').css("background-color", headingColorBG);

  // Switch background based on hue
  switch (true) {
  case randomHue > 0 && randomHue <= 20:
      colorName = "red";
      photoCredit += "Smit Patel"
      break;
  case randomHue > 20 && randomHue <= 50:
      colorName = "orange";
      photoCredit += "Tobias Rademacher"
      break;
  case randomHue > 50 && randomHue <= 80:
      colorName = "yellow";
      photoCredit += "Anthony Melone"
      break;
  case randomHue > 80 && randomHue <= 110:
      colorName = "lime green";
      photoCredit += "Victor Figueroa"
      break;
  case randomHue > 110 && randomHue <= 140:
      colorName = "green";
      photoCredit += "Nahil Naseer"
      break;
  case randomHue > 140 && randomHue <= 170:
      colorName = "teal";
      photoCredit += "Konstantinos Feggoulis"
      break;
  case randomHue > 170 && randomHue <= 200:
      colorName = "cyan";
      photoCredit += "Victor G"
      break;
  case randomHue > 200 && randomHue <= 230:
      colorName = "aqua blue";
      photoCredit += "Minator Yang"
      break;
  case randomHue > 230 && randomHue <= 260:
      colorName = "blue";
      photoCredit += "Akira Hojo"
      break;
  case randomHue > 260 && randomHue <= 290:
      colorName = "purple";
      photoCredit += "Laura Paez"
      break;
  case randomHue > 290 && randomHue <= 320:
      colorName = "magenta";
      photoCredit += "Laura Ockel"
      break;
  case randomHue > 320 && randomHue <= 350:
      colorName = "pink";
      photoCredit += "Pawel Czerwinski"
      break;
  case randomHue > 350 && randomHue <= 360:
      colorName = "red";
      photoCredit += "Smit Patel"
      break;
  }

  $('body')
    .css("background", headingColorRight + " url(img/" + colorName + ".jpg)")
    .css("background-size", "cover")
    .css("background-repeat", "no-repeat");
  photoCredit += ", licensed under <a href='https://unsplash.com/license'>the Unsplash license</a>."
  $('.credit').html(photoCredit);

  $('body::selection').css("background-color", "yellow");

  $('.heading').css("color", headingColor);

  $('.spotlight').css("background", spotlightColor);
  $('.spotlight').css("box-shadow", "0 0 100px 100px " + spotlightColor);

  let underline = "#002", textColor = "#001";
  $('a')
    .css("border-bottom", "3px solid " + underline).css("color", textColor)
    .mouseover(function () {
      $(this).css("border-bottom", "9px solid " + linkColor).css("color", textColor);
    })
    .mouseout(function () {
      $(this).css("border-bottom", "3px solid " + underline).css("color", textColor);
    });

    $('.heading')
        .css("background", headingColorBG)
        .css("border-bottom", "20px solid " + headingColorBottom)
        .css("border-left", "20px solid " + headingColorLeft)
        .css("border-top", "20px solid " + headingColorTop)
        .css("border-right", "20px solid " + headingColorRight);
});