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
// 一楼左侧部分start
$(".firstFloorWHead .headLi").hover(function(){
     $(".firstFloorWHead .headLi").not(this).find(".firstFloorWTail").hide();
     $(".firstFloorWHead .headLi").not(this).css({"border-top":"1px solid #ccc"});
     $(this).find(".firstFloorWTail").show();
     $(this).css({"border-top":"2px solid #f00"});
});
// 一楼左侧部分end
// 一楼右侧部分start
$(".firstl .firstFloorW-right-up-inside:last").hide();
$(".firstFloorW-right-up .firstl").hover(function(){
$(".firstFloorW-right-up .firstl").not(this).find(".firstFloorW-right-up-inside").hide();
$(".firstFloorW-right-up li").not(this).css({"border-top":"1px solid #fff"});
$(this).find(".firstFloorW-right-up-inside").show();
$(this).css({"border-top":"2px solid #f00"});
})

// 一楼右侧部分end
// 中部跑马灯start
    widthFm=$(".picWarpFm img:first").width();
	heightFm=$(".picWarpFm img:first").height();
	sizeFm=$(".picWarpFm img").length; 
	
	totalWidthFm=widthFm*sizeFm;
	$(".picButtonFm a:first").addClass("activeFm");
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
			$activeFm=$(".picButtonFm a.activeFm").next();
			// console.log($active.attr("rel"));
			if(Number($activeFm.attr("rel"))===3){
				$(".picButtonFm a").removeClass("activeFm");
			    $(".picButtonFm a:first").addClass("activeFm");
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
					$(".picButtonFm a").removeClass("activeFm");
           			$activeFm.addClass("activeFm");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonFm a").click(function(){
    	clearInterval(playFm);
    	$activeFm=$(this);
    	numberFm=$activeFm.attr("rel");
    	 $(".picWarpFm").animate({left:-widthFm*numberFm+"px"},500);

    	setTimeout("rotateSwitchFm()",1000);
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
// 底部跑马灯start
    widthFb=$(".picWarpFb img:first").width();
	heightFb=$(".picWarpFb img:first").height();
	sizeFb=$(".picWarpFb img").length; 
	
	totalWidthFb=widthFb*sizeFb;
	$(".picButtonFb a:first").addClass("activeFb");
	$(".mainFb .picWarpFb").css({"width":totalWidthFb+"px"});
	$(".mainFb").css({"width":widthFb+"px","height":heightFb+"px"});
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
	rotateSwitchFb=function(){
		playFb=setInterval(function(){
			$activeFb=$(".picButtonFb a.activeFb").next();
			// console.log($active.attr("rel"));
			if(Number($activeFb.attr("rel"))===3){
				$(".picButtonFb a").removeClass("activeFb");
			    $(".picButtonFb a:first").addClass("activeFb");
                numberFb=$activeFb.attr("rel");
			   $(".picWarpFb").animate({left:-widthFb*numberFb+"px"},500,function(){
			   	$(".picWarpFb").css({"left":"0"});
			   });
			    $activeFb=$(".picButtonFb a:first");
				numberFb=$activeFb.attr("rel");
				 $(".picWarpFb").animate({left:-widthFb*numberFb+"px"},500);
			}else{
					numberFb=$activeFb.attr("rel");
					 $(".picWarpFb").animate({left:-widthFb*numberFb+"px"},500);
					$(".picButtonFb a").removeClass("activeFb");
           			$activeFb.addClass("activeFb");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonFb a").click(function(){
    	clearInterval(playFb);
    	$activeFb=$(this);
    	numberFb=$activeFm.attr("rel");
    	 $(".picWarpFb").animate({left:-widthFb*numberFb+"px"},500);

    	setTimeout("rotateSwitchFb()",1000);
    	return false;
    });
    $(".picWarpFb a").hover(
    	function(){
    		clearInterval(playFb);
    	},
    	function(){
    		rotateSwitchFb();
    	})
	rotateSwitchFb();

// 底部跑马灯end
// 倒计时start
time=18000;
countTime=function(){
     time=time-1;
     hour="0"+parseInt(time/3600);
     minute=parseInt((time%3600)/60);
     second=(time%3600)%60;
     if(parseInt(second/10)<1){
     	second="0"+second;
     }
     $(".spanH").html(hour);
     $(".spanM").html(minute);
     $(".spanS").html(second);
}
play1=setInterval("countTime()",1000);

// 倒计时end
// 优惠促销跑马灯start
$(".fourthADIconLi:first").css({"background-color":"#f00"});
$(".fourthADIconLi:first").addClass("ADActive");
$(".fourthADIconLi").click(function(){
	$(".fourthADIconLi").removeClass("ADActive");
	$(this).addClass("ADActive");
	$(".fourthADIconLi").css({"background-color":"#ccc"});
	$(this).css({"background-color":"#f00"});
    numberLi=$(this).attr("rel")-1;
    numberLift=numberLi*1200;
    $(".fourthADTail").animate({left:-numberLift+"px"},1000);
});
// 优惠左箭头指示灯start
$(".fourthADLeft").click(function(){
	activeIconSE=$(".ADActive").prev();
	$(".fourthADIconLi").css({"background-color":"#ccc"});
	if(activeIconSE.length===0){
		activeIconSE=$(".fourthADIconLi:first");
		
	}
  
	$(".fourthADIconLi").removeClass("ADActive");
	activeIconSE.addClass("ADActive");
	activeIconSE.css({"background-color":"#f00"});
	numberLi=activeIconSE.attr("rel")-1;
	numberLift=numberLi*1200;
    $(".fourthADTail").animate({left:-numberLift+"px"},1000);
})
// 优惠左箭头指示灯end
// 优惠右箭头指示灯start
$(".fourthADRight").click(function(){
	activeIconSE=$(".ADActive").next();
	$(".fourthADIconLi").css({"background-color":"#ccc"});
	if(activeIconSE.length===0){
		activeIconSE=$(".fourthADIconLi:last")
		
	}
	
	$(".fourthADIconLi").removeClass("ADActive");
	activeIconSE.addClass("ADActive");
	activeIconSE.css({"background-color":"#f00"});
	numberLi=activeIconSE.attr("rel")-1;
	numberLift=numberLi*1200;
    $(".fourthADTail").animate({left:-numberLift+"px"},1000);
})
// 优惠右箭头指示灯end
// 优惠促销跑马灯end
}
)