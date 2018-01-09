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
// whitewine中部跑马灯start
    widthWw=$(".picWarpWw img:first").width();
	heightWw=$(".picWarpWw img:first").height();
	sizeWw=$(".picWarpWw img").length; 
	
	totalWidthWw=widthWw*sizeWw;
	$(".picButtonWw a:first").addClass("activeWw");
	$(".mainWw .picWarpWw").css({"width":totalWidthWw+"px"});
	$(".mainWw").css({"width":widthWw+"px","height":heightWw+"px"});
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
	rotateSwitchWw=function(){
		playWw=setInterval(function(){
			$activeWw=$(".picButtonWw a.activeWw").next();
			// console.log($active.attr("rel"));
			if(Number($activeWw.attr("rel"))===sizeWw-1){
				$(".picButtonWw a").removeClass("activeWw");
			    $(".picButtonWw a:first").addClass("activeWw");
                numberWw=$activeWw.attr("rel");
			   $(".picWarpWw").animate({left:-widthWw*numberWw+"px"},500,function(){
			   	$(".picWarpWw").css({"left":"0"});
			   });
			    $activeWw=$(".picButtonWw a:first");
				numberWw=$activeWw.attr("rel");
				 $(".picWarpWw").animate({left:-widthWw*numberWw+"px"},500);
			}else{
					numberWw=$activeWw.attr("rel");
					 $(".picWarpWw").animate({left:-widthWw*numberWw+"px"},500);
					$(".picButtonWw a").removeClass("activeWw");
           			$activeWw.addClass("activeWw");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonWw a").click(function(){
    	clearInterval(playFb);
    	$activeWw=$(this);
    	numberWw=$activeWw.attr("rel");
    	 $(".picWarpWw").animate({left:-widthWw*numberWw+"px"},500);

    	setTimeout("rotateSwitchWw()",1000);
    	return false;
    });
    $(".picWarpWw a").hover(
    	function(){
    		clearInterval(playWw);
    	},
    	function(){
    		rotateSwitchWw();
    	})
	rotateSwitchWw();

// whitewine中部跑马灯end
$(".whiteWineBottomRightTop-right a").hover(function(){
   $(this).css({"color":"#cc0001","text-decoration":"underline"});
   $(".whiteWineBottomRightTop-right a").not(this).css({"color":"#666","text-decoration":"none"});
});
// 白酒馆底部js特效start
$(".whiteWineBottomRightTop-right a").hover(function(){
	refNum=$(".whiteWineBottomRightTop-right a").index(this);
	$(".whiteWineBottomRightBottom").eq(refNum).show();
	$(".whiteWineBottomRightBottom").not($(".whiteWineBottomRightBottom").eq(refNum)).hide();
});
// 白酒馆底部js特效end
// 红酒中部跑马灯start
    widthrW=$(".picWarprW img:first").width();
	heightrW=$(".picWarprW img:first").height();
	sizerW=$(".picWarprW img").length; 
	
	totalWidthrW=widthrW*sizerW;
	$(".picButtonrW a:first").addClass("activerW");
	$(".mainrW .picWarprW").css({"width":totalWidthrW+"px"});
	$(".mainrW").css({"width":widthrW+"px","height":heightrW+"px"});
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
	rotateSwitchrW=function(){
		playrW=setInterval(function(){
			$activerW=$(".picButtonrW a.activerW").next();
			// console.log($active.attr("rel"));
			if(Number($activerW.attr("rel"))===sizerW-1){
				$(".picButtonrW a").removeClass("activerW");
			    $(".picButtonrW a:first").addClass("activerW");
                numberrW=$activerW.attr("rel");
			   $(".picWarprW").animate({left:-widthrW*numberrW+"px"},500,function(){
			   	$(".picWarprW").css({"left":"0"});
			   });
			    $activerW=$(".picButtonrW a:first");
				numberrW=$activerW.attr("rel");
				 $(".picWarprW").animate({left:-widthrW*numberrW+"px"},500);
			}else{
					numberrW=$activerW.attr("rel");
					 $(".picWarprW").animate({left:-widthrW*numberrW+"px"},500);
					$(".picButtonrW a").removeClass("activerW");
           			$activerW.addClass("activerW");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonrW a").click(function(){
    	clearInterval(playFb);
    	$activerW=$(this);
    	numberrW=$activerW.attr("rel");
    	 $(".picWarprW").animate({left:-widthrW*numberrW+"px"},500);

    	setTimeout("rotateSwitchrW()",1000);
    	return false;
    });
    $(".picWarprW a").hover(
    	function(){
    		clearInterval(playrW);
    	},
    	function(){
    		rotateSwitchrW();
    	})
	rotateSwitchrW();

// redWine中部跑马灯end
$(".redWineBottomRightTop-right a").hover(function(){
   $(this).css({"color":"#cc0001","text-decoration":"underline"});
   $(".redWineBottomRightTop-right a").not(this).css({"color":"#666","text-decoration":"none"});
});
// 白酒馆底部js特效start
$(".redWineBottomRightTop-right a").hover(function(){
	refNum=$(".redWineBottomRightTop-right a").index(this);
	$(".redWineBottomRightBottom").eq(refNum).show();
	$(".redWineBottomRightBottom").not($(".redWineBottomRightBottom").eq(refNum)).hide();
});
// 红酒馆底部js特效end
// 洋酒中部跑马灯start
    widthyW=$(".picWarpyW img:first").width();
	heightyW=$(".picWarpyW img:first").height();
	sizeyW=$(".picWarpyW img").length; 
	
	totalWidthyW=widthyW*sizeyW;
	$(".picButtonyW a:first").addClass("activeyW");
	$(".mainyW .picWarpyW").css({"width":totalWidthyW+"px"});
	$(".mainyW").css({"width":widthyW+"px","height":heightyW+"px"});
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
	rotateSwitchyW=function(){
		playyW=setInterval(function(){
			$activeyW=$(".picButtonyW a.activeyW").next();
			// console.log($active.attr("rel"));
			if(Number($activeyW.attr("rel"))===sizeyW-1){
				$(".picButtonyW a").removeClass("activeyW");
			    $(".picButtonyW a:first").addClass("activeyW");
                numberyW=$activeyW.attr("rel");
			   $(".picWarpyW").animate({left:-widthyW*numberyW+"px"},500,function(){
			   	$(".picWarpyW").css({"left":"0"});
			   });
			    $activeyW=$(".picButtonyW a:first");
				numberyW=$activeyW.attr("rel");
				 $(".picWarpyW").animate({left:-widthyW*numberyW+"px"},500);
			}else{
					numberyW=$activeyW.attr("rel");
					 $(".picWarpyW").animate({left:-widthyW*numberyW+"px"},500);
					$(".picButtonyW a").removeClass("activeyW");
           			$activeyW.addClass("activeyW");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonyW a").click(function(){
    	clearInterval(playFb);
    	$activeyW=$(this);
    	numberyW=$activeyW.attr("rel");
    	 $(".picWarpyW").animate({left:-widthyW*numberyW+"px"},500);

    	setTimeout("rotateSwitchyW()",1000);
    	return false;
    });
    $(".picWarpyW a").hover(
    	function(){
    		clearInterval(playyW);
    	},
    	function(){
    		rotateSwitchyW();
    	})
	rotateSwitchyW();

// yangWine中部跑马灯end
$(".yangWineBottomRightTop-right a").hover(function(){
   $(this).css({"color":"#cc0001","text-decoration":"underline"});
   $(".yangWineBottomRightTop-right a").not(this).css({"color":"#666","text-decoration":"none"});
});
// 洋酒馆底部js特效start
$(".yangWineBottomRightTop-right a").hover(function(){
	refNum=$(".yangWineBottomRightTop-right a").index(this);
	$(".yangWineBottomRightBottom").eq(refNum).show();
	$(".yangWineBottomRightBottom").not($(".yangWineBottomRightBottom").eq(refNum)).hide();
});
// 洋酒馆底部js特效end
// 养生酒中部跑马灯start
    widthySWine=$(".picWarpySWine img:first").width();
	heightySWine=$(".picWarpySWine img:first").height();
	sizeySWine=$(".picWarpySWine img").length; 
	
	totalWidthySWine=widthySWine*sizeySWine;
	$(".picButtonySWine a:first").addClass("activeySWine");
	$(".mainySWine .picWarpySWine").css({"width":totalWidthySWine+"px"});
	$(".mainySWine").css({"width":widthySWine+"px","height":heightySWine+"px"});
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
	rotateSwitchySWine=function(){
		playySWine=setInterval(function(){
			$activeySWine=$(".picButtonySWine a.activeySWine").next();
			// console.log($active.attr("rel"));
			if(Number($activeySWine.attr("rel"))===sizeySWine-1){
				$(".picButtonySWine a").removeClass("activeySWine");
			    $(".picButtonySWine a:first").addClass("activeySWine");
                numberySWine=$activeySWine.attr("rel");
			   $(".picWarpySWine").animate({left:-widthySWine*numberySWine+"px"},500,function(){
			   	$(".picWarpySWine").css({"left":"0"});
			   });
			    $activeySWine=$(".picButtonySWine a:first");
				numberySWine=$activeySWine.attr("rel");
				 $(".picWarpySWine").animate({left:-widthySWine*numberySWine+"px"},500);
			}else{
					numberySWine=$activeySWine.attr("rel");
					 $(".picWarpySWine").animate({left:-widthySWine*numberySWine+"px"},500);
					$(".picButtonySWine a").removeClass("activeySWine");
           			$activeySWine.addClass("activeySWine");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonySWine a").click(function(){
    	clearInterval(playFb);
    	$activeySWine=$(this);
    	numberySWine=$activeySWine.attr("rel");
    	 $(".picWarpySWine").animate({left:-widthySWine*numberySWine+"px"},500);

    	setTimeout("rotateSwitchySWine()",1000);
    	return false;
    });
    $(".picWarpySWine a").hover(
    	function(){
    		clearInterval(playySWine);
    	},
    	function(){
    		rotateSwitchySWine();
    	})
	rotateSwitchySWine();

// yangShengWine中部跑马灯end
$(".yangShengWineBottomRightTop-right a").hover(function(){
   $(this).css({"color":"#cc0001","text-decoration":"underline"});
   $(".yangShengWineBottomRightTop-right a").not(this).css({"color":"#666","text-decoration":"none"});
});
// 养生酒馆底部js特效start
$(".yangShengWineBottomRightTop-right a").hover(function(){
	refNum=$(".yangShengWineBottomRightTop-right a").index(this);
	$(".yangShengWineBottomRightBottom").eq(refNum).show();
	$(".yangShengWineBottomRightBottom").not($(".yangShengWineBottomRightBottom").eq(refNum)).hide();
});
// 养生酒馆底部js特效end
// 食物中部跑马灯start
    widthfood=$(".picWarpfood img:first").width();
	heightfood=$(".picWarpfood img:first").height();
	sizefood=$(".picWarpfood img").length; 
	
	totalWidthfood=widthfood*sizefood;
	$(".picButtonfood a:first").addClass("activefood");
	$(".mainfood .picWarpfood").css({"width":totalWidthfood+"px"});
	$(".mainfood").css({"width":widthfood+"px","height":heightfood+"px"});
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
	rotateSwitchfood=function(){
		playfood=setInterval(function(){
			$activefood=$(".picButtonfood a.activefood").next();
			// console.log($active.attr("rel"));
			if(Number($activefood.attr("rel"))===sizefood-1){
				$(".picButtonfood a").removeClass("activefood");
			    $(".picButtonfood a:first").addClass("activefood");
                numberfood=$activefood.attr("rel");
			   $(".picWarpfood").animate({left:-widthfood*numberfood+"px"},500,function(){
			   	$(".picWarpfood").css({"left":"0"});
			   });
			    $activefood=$(".picButtonfood a:first");
				numberfood=$activefood.attr("rel");
				 $(".picWarpfood").animate({left:-widthfood*numberfood+"px"},500);
			}else{
					numberfood=$activefood.attr("rel");
					 $(".picWarpfood").animate({left:-widthfood*numberfood+"px"},500);
					$(".picButtonfood a").removeClass("activefood");
           			$activefood.addClass("activefood");
			 	};
			 	
			
			
		},1000);
	};
    $(".picButtonfood a").click(function(){
    	clearInterval(playFb);
    	$activefood=$(this);
    	numberfood=$activefood.attr("rel");
    	 $(".picWarpfood").animate({left:-widthfood*numberfood+"px"},500);

    	setTimeout("rotateSwitchfood()",1000);
    	return false;
    });
    $(".picWarpfood a").hover(
    	function(){
    		clearInterval(playfood);
    	},
    	function(){
    		rotateSwitchfood();
    	})
	rotateSwitchfood();

// food中部跑马灯end
// logo墙start
$(".logoWallTail a").mouseenter(function(){
	$(this).find("img").animate({"margin-left":"-100px"},500);
});
$(".logoWallTail a").mouseleave(function(){
	$(this).find("img").animate({"margin-left":"0px"},500);
});
// 界面转化start
$(".logoWallHeadLi").mouseover(function(){
	numberLi=$(".logoWallHeadLi").index(this);
	leftPx=numberLi*($(this).width()+0);
	$(".slider").animate({"left":leftPx+"px"},170);
	$(".logoWallHeadLi").not(this).css({"color":"#000"});
	$(this).css({"color":"#dd102e"});
	$(".logoWallTail").not($(this).find(".logoWallTail")).hide();
	$(this).find(".logoWallTail").show();
});
// 界面转化end
// logo墙end
}
)