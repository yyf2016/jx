$(function(){
	$(".infoHead li:first").find(".infoBox").show();
	$(".infoHead li").click(function(){
		$(this).find(".infoBox").show();
		$(".infoBox").not($(this).find(".infoBox")).hide();

	});
})