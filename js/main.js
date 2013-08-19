

$(function(){

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });

    $(".mascot img").powerTip();

    $(".title_w p").powerTip();
	$(".twitter, .facebook, .google").powerTip();
 
});

	$(document).on("click", ".about", function(e) {
		bootbox.alert("Have you ever wanted to design a beautiful website but just did not know whre to start? That happened to me too. \
		While browsing the web, I saw so many nice looking websites using metro interface, but lacking interactivity... So i decdided to spicy it up a bit more!");
	});
