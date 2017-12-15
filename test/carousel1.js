$(function(){
	width=$(".picWarp img:first").width();
	height=$(".picWarp img:first").height();
	size=$(".picWarp img").length; 
	
	totalWidth=width*size;
	$(".picButton a:first").addClass("active");

	
	$(".main .picWarp").css({"width":totalWidth+"px"});
	$(".main").css({"width":width+"px","height":height+"px"});
	rotate=function(){
		// $active=$(".picButton a.active").next();
		// 	if($active.length===0)
		// 	{
		// 		$active=$(".picButton a:first");
		// 	}
		// 	number=$active.attr("rel");
	
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
    $(".picButton a").click(function(){
    	clearInterval(play);
    	$active=$(this);
    	number=$active.attr("rel");
    	rotate();
    	setTimeout("rotateSwitch()",1000);
    	return false;
    });
    $(".picWarp a").hover(
    	function(){
    		clearInterval(play);
    	},
    	function(){
    		rotateSwitch();
    	})
	rotateSwitch();

})	