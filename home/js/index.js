$(function(){
			$(".catItemRight").hide();
			$(".MineJX").mouseenter(function(){
			$(".MineJXDropBox").show();
			$(".MineJX").css({"background":"#fff"});
			$(".MineJXIcon").css({"transform":"rotate(180deg)","margin-left":"0px","margin-top":"7px"});
			})
			$(".MineJX").mouseleave(function(){
			$(".MineJXDropBox").hide();
			$(".MineJX").css({"background":"#f2f2f2"});
			$(".MineJXIcon").css({"transform":"rotate(0deg)","margin-left":"5px","margin-top":"5px"});
			})
			$(".navCategoryMenu li").mouseenter(function(){
			$(this).find(".catItemRight").show();
			$(".catItemRight").not($(this).find(".catItemRight")).hide();
			})

			$(".navCategoryMenu li").mouseleave(function(){
			$(this).find(".catItemRight").hide();
			})
			$(".categoryBox li:last").css({"height":"65px"});

			// 顶部跑马灯
			$(".paging").show();
			$(".paging a:first").addClass("active");

			width=$(".window").width();
			size=$(".pictureReel img").size();
			tollWidth=width*size;
			$(".pictureReel").css({"width":tollWidth+"px"});


			rotate=function(){

			number=$active.attr("rel");
			moveNumber=(number-1)*width;
			$(".paging a").removeClass("active");
			$active.addClass("active");
			$(".pictureReel").animate({left:-moveNumber},500);

			};

			rotateSwitch=function(){
			play=setInterval(function(){
				$active=$(".paging a.active").next();

				if($active.length===0){
					$active=$(".paging a:first");
				}
				rotate();
				// console.log(number);
			},2000)
			};

			rotateSwitch();
			$(".pictureReel").hover(function(){
			clearInterval(play);
			},function(){
			rotateSwitch();
			});

			$(".paging a").click(function(){
			clearInterval(play);
			$active=$(this);
			rotate();
			rotateSwitch();
			})
// 顶部跑马灯end
// 中部跑马灯start
    widthFm=$(".picWarpFm img:first").width();
	heightFm=$(".picWarpFm img:first").height();
	sizeFm=$(".picWarpFm img").length; 
	
	totalWidthFm=widthFm*sizeFm;
	$(".picButtonFm a:first").addClass("active");
	$(".mainFm .picWarpFm").css({"width":totalWidthFm+"px"});
	$(".mainFm").css({"width":widthFm+"px","height":heightFm+"px"});
	// rotate=function(){
	// 	// $active=$("..picButtonFm a.active").next();
	// 	// 	if($active.length===0)
	// 	// 	{
	// 	// 		$active=$("..picButtonFm a:first");
	// 	// 	}
	// 	// 	number=$active.attr("rel");
	
 //       $(".picWarpFm").animate({left:-width*number+"px"},500);
 //       // $("..picButtonFm a").removeClass();
 //       // $active.addClass("active");
	// }
	rotateSwitchFm=function(){
		playFm=setInterval(function(){
			$activeFm=$(".picButtonFm a.active").next();
			// console.log($active.attr("rel"));
			if(Number($activeFm.attr("rel"))===3){
				$(".picButtonFm a").removeClass("active");
			    $(".picButtonFm a:first").addClass("active");
                numberFm=$activeFm.attr("rel");
			   $(".picWarpFm").animate({left:-widthFm*numberFm+"px"},500,function(){
			   	$(".picWarpFm").css({"left":"0"});
			   });
			    $activeFm=$(".picButtonFm a:first");
				numberFm=$activeFm.attr("rel");
				 $(".picWarpFm").animate({left:-widthFm*numberFm+"px"},500);
			}else{
					numberFm=$activeFm.attr("rel");
					 $(".picWarpFm").animate({left:-widthFm*numberFm+"px"},500);
					$(".picButtonFm a").removeClass("active");
           			$activeFm.addClass("active");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonFm a").click(function(){
    	clearInterval(playFm);
    	$activeFm=$(this);
    	numberFm=$activeFm.attr("rel");
    	 $(".picWarpFm").animate({left:-widthFm*numberFm+"px"},500);

    	setTimeout("rotateSwitch()",1000);
    	return false;
    });
    $(".picWarpFm a").hover(
    	function(){
    		clearInterval(playFm);
    	},
    	function(){
    		rotateSwitchFm();
    	})
	rotateSwitchFm();

// 中部跑马灯end
}
)