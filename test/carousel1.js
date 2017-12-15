$(function(){
	width=$(".picWarp img:first").width();
	height=$(".picWarp img:first").height();
	size=$(".picWarp img").length; 
	
	totalWidth=width*size;
	$(".picButton a:first").addClass("active");

	
	$(".main .picWarp").css({"width":totalWidth+"px"});
	$(".main").css({"width":width+"px","height":height+"px"});
	rotate=function(){
	
       $(".picWarp").animate({left:-width*number+"px"},500);
       $(".picButton a").removeClass();
       $active.addClass("active");
	}
	rotateSwitch=function(){
		play=setInterval(function(){
			$active=$(".picButton a.active").next();
			if($active.length===0)
			{
				$active=$(".picButton a:first");
			}
			number=$active.attr("rel");
			
			rotate();

		},1000);
	};
	rotateSwitch();

})	