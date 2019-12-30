function isMobile()
{
	if (/Mobi|Android/i.test(navigator.userAgent)) 
	{
		return true;
	}
	
	return false;
}

$(window).on("load", function() 
{
	mobile = isMobile();

	if (mobile)
	{
		document.body.style.overflow = "auto";
	}
	
	$(".jumbotron").delay(500).animate({"opacity": "1"}, 500);
    $("#navBox").delay(500).animate({"opacity": "1"}, 1000);
});

function overflowAuto()
{
	document.body.style.overflow = "auto";
}

function overflowHidden()
{
	mobile = isMobile();
	if (!mobile)
	{
		document.body.style.overflow = "hidden";
	}
}