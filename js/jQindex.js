// jQuery
$(document).ready(function()
{

	//cashing the Scroll top Element

	var scrollButton = $("#scroll-top");

	$(window).scroll(function()
	{
		if( $(this).scrollTop() >= 500)
		{
				scrollButton.show();
		}
		else
		{
				scrollButton.hide();
		}
	});

	//Click On Button To Scroll Top

	scrollButton.click(function(){
		$("html,body").animate({ scrollTop : 0}, 600);
	});

});
