
$(window).on("load", function() 
{
	$(".jumbotron").delay(500).animate({"opacity": "1"}, 500);
    $("#navBox").delay(500).animate({"opacity": "1"}, 1000);
});

function overflowAuto()
{
	document.body.style.overflow = "auto";
}

function overflowHidden()
{
	document.body.style.overflow = "hidden";
}