
// Change all box sizes to percentages - css
// change text size to ems - css
// nav will become a hamburger when reaches 1024px
$(".hamburger").on("click", function(){
	$("nav").animate({bottom: "0"});
	$("a").css({"display":"block"});
});

$(".close-nav").on("click", function(){
	$("nav").animate({bottom: "100%"});
});

$(window).on("resize", function(){
	var winW = $(window).width();
	if (winW < 768) {
		$(".centerbrains").hide();
		$(".lightbox p").text("Have a great idea for a product, but need help making it a reality?	We're here to help.")
	} else {
		$(".centerbrains").show();
		$(".lightbox p").text("Have a great idea for a product, but need help making it a reality?	We're here to help.  Startup Matchmaker is the best place for designers and developers to find each other.")
	}
});




// Boxes beneath hero image will stack - css
//remove header text - javascript
//Hamburger menu will be black background with white text and stacked nav items - css
//When on mobile, the text in the Meet your match changes- js





// when we reach tablet portrait (768px), the hamburger nav gets activated.

//tablet 
//image was increased to 600px tall
//stacked the sections and made them 100% width
// moved the border to the bottom
//changed the padding
//hamburger always comes in from the top