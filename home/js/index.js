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
	leftLi=$(this).position().left;
	$(".slider").animate({"left":leftLi+"px"},100);
	$(".logoWallHeadLi").not(this).css({"color":"#000"});
	$(this).css({"color":"#dd102e"});
	$(".logoWallTail").not($(this).find(".logoWallTail")).hide();
	$(this).find(".logoWallTail").show();
});
// 界面转化end
// logo墙end
// 右边侧导航条start
heightNav=$(window).height();
$(".rightNav").css({"height":heightNav+"px"});
// 滑动特效start
$(".rightNav li").mouseenter(function(){
	indexNum=$(".rightNav li").index(this);
	numX=$(this).find("i").css("background-position");
	topNum=-indexNum*40-20+"px";
	newNum=topNum+" "+"-163px";
	$(this).find("i").css({"background-position":newNum});
	$(this).css({"background-color":"#cf1c23","color":"#fff"});
	navLeft=$(this).position().left-271;
	navTop=$(this).position().top;
	$(this).find(".rightNavPop").show();
	$(this).find(".rightNavPop").css({"left":navLeft+"px","top":navTop+"px"});

});
$(".rightNav li").mouseleave(function(){
	indexNum=$(".rightNav li").index(this);
	topNum=-indexNum*40+"px";
	newNum=topNum+" "+"-163px";
	$(this).find("i").css({"background-position":newNum});
	$(this).css({"background-color":"#fff","color":"#000"});
	$(this).find(".rightNavPop").hide();
});
// 滑动特效end

// 右边侧导航条end
// 左侧导航条start
// 导航第一图标start
$(".leftNav .floorOne").mouseenter(function(){
      $(this).find(".floorOneBg").hide();
      $(this).find(".floorOneOn").css({"display":"block"});
      htmlName1=$(this).find(".floorOneOn").attr("name");
      $(this).find(".floorOneOn").html(htmlName1);
      $(this).find(".floorOneOn").animate({"width":"70px"},500);
});

$(".leftNav .floorOne").mouseleave(function(){
      
      htmlName1=$(this).find(".floorOneOn").attr("ref");
      
      $(this).find(".floorOneOn").animate({"width":"30px"},500,function(){
      	$(this).html(htmlName1);
      	$(this).hide();
      	$(".leftNav .floorOne").find(".floorOneBg").show();
      	myscroll();
      });
      
});   
 // 导航第1图标end 
 // 导航第2图标start
$(".leftNav .floorTwo").mouseenter(function(){
      $(this).find(".floorTwoBg").hide();
      $(this).find(".floorTwoOn").css({"display":"block"});
      htmlName2=$(this).find(".floorTwoOn").attr("name");
      $(this).find(".floorTwoOn").html(htmlName2);
      $(this).find(".floorTwoOn").animate({"width":"90px"},500);
});

$(".leftNav .floorTwo").mouseleave(function(){
      
      htmlName2=$(this).find(".floorTwoOn").attr("ref");
      
      $(this).find(".floorTwoOn").animate({"width":"30px"},500,function(){
      	$(this).html(htmlName2);
      	$(this).hide();
      	$(".leftNav .floorTwo").find(".floorTwoBg").show();
      	myscroll();
      });
      
});   
 // 导航第2图标end 
 // 导航第3图标start
$(".leftNav .floorThree").mouseenter(function(){
      $(this).find(".floorThreeBg").hide();
      $(this).find(".floorThreeOn").css({"display":"block"});
      htmlName3=$(this).find(".floorThreeOn").attr("name");
      $(this).find(".floorThreeOn").html(htmlName3);
      $(this).find(".floorThreeOn").animate({"width":"70px"},500);
});

$(".leftNav .floorThree").mouseleave(function(){
      
      htmlNam3=$(this).find(".floorThreeOn").attr("ref");
      
      $(this).find(".floorThreeOn").animate({"width":"30px"},500,function(){
      	$(this).html(htmlName3);
      	$(this).hide();
      	$(".leftNav .floorThree").find(".floorThreeBg").show();
      	myscroll();
      });
      
});   
 // 导航第3图标end 
  // 导航第4图标start
$(".leftNav .floorFour").mouseenter(function(){
      $(this).find(".floorFourBg").hide();
      $(this).find(".floorFourOn").css({"display":"block"});
      htmlName4=$(this).find(".floorFourOn").attr("name");
      $(this).find(".floorFourOn").html(htmlName4);
      $(this).find(".floorFourOn").animate({"width":"130px"},500);
});

$(".leftNav .floorFour").mouseleave(function(){
      
      htmlName4=$(this).find(".floorFourOn").attr("ref");
      
      $(this).find(".floorFourOn").animate({"width":"30px"},500,function(){
      	$(this).html(htmlName4);
      	$(this).hide();
      	$(".leftNav .floorFour").find(".floorFourBg").show();
      	myscroll();
      });
      
});   
 // 导航第4图标end 
 // 导航第5图标start
$(".leftNav .floorFive").mouseenter(function(){
      $(this).find(".floorFiveBg").hide();
      $(this).find(".floorFiveOn").css({"display":"block"});
      htmlName5=$(this).find(".floorFiveOn").attr("name");
      $(this).find(".floorFiveOn").html(htmlName5);
      $(this).find(".floorFiveOn").animate({"width":"70px"},500);
});

$(".leftNav .floorFive").mouseleave(function(){
      
      htmlName5=$(this).find(".floorFiveOn").attr("ref");
      
      $(this).find(".floorFiveOn").animate({"width":"30px"},500,function(){
        $(this).html(htmlName5);
      	$(this).hide();
      	$(".leftNav .floorFive").find(".floorFiveBg").show();
      	myscroll();
      });
      
});   
// 导航第5图标end 
 // 导航第6图标start
$(".leftNav .floorSix .floorSixBg").mouseenter(function(){
    $(".leftNav .floorSix").find(".newindexIcon").css({"background-position":"-95px -190px"});
});

$(".leftNav .floorSix").mouseleave(function(){
      $(".leftNav .floorSix .floorSixBg").find(".newindexIcon").css({"background-position":"-74px -190px"});
      
     
      
});  
$(".floorSix").click(function(){
	$(window).scrollTop(0);
});
// 右侧导航条楼层灯开始
function myscroll(){
		st=$(window).scrollTop();
		osFirst=$(".wineFloor:first").offset().top;
		if(st>osFirst){
			$(".leftNav").fadeIn();
		   	$(".wineFloor").each(function(){
		   	os=$(this).offset().top;
		   	if(st>os){
	   		// $(".leftNav").show();
	   		nameTitle=$(this).find("i").html();
	   		document.title=nameTitle;
	   		$(".leftNav").find("a[ref="+nameTitle+"]").next().hide();
	        $(".leftNav").find("a[ref="+nameTitle+"]").show();
	        $(".leftNav").find("a[ref]").not($(".leftNav").find("a[ref="+nameTitle+"]")).hide();
	        $(".floorOn").not($(".leftNav").find("a[ref="+nameTitle+"]").next()).show();
	   	    }
    });
 }else{
 	$(".leftNav").fadeOut();
 }; 
}
$(window).scroll(function(){
	myscroll();
  
});
// 右侧导航条楼层灯结束

// 导航第6图标end
 // 左侧导航条隐身start
// minTop=$(".whiteWine").offset().top;
// $(window).scroll(function(){
	
// 	scrollTop=$(window).scrollTop();
// 	num=$(".leftNav").attr("ref");
// 	if(scrollTop<minTop-100&&num===1){
//        $(".leftNav").attr("ref")=0;
//        $(".leftNav").stop().transition({"scaleY":"1.5","opacity":"0"},1000);
		
// 	};
// 	if(scrollTop>=minTop-100&&num===0){
// 		$(".leftNav").attr("ref")=1;
//         $(".leftNav").stop().transition({"scaleY":"1","opacity":"1"},1000);

// 	};
// });
// $(".leftNav").click(function(){
	
// 	$(this).stop().transition({"scaleY":"1.5","opacity":"0"},1000);
// });


 // 左侧导航条隐身end
// 左侧导航条end
}
)