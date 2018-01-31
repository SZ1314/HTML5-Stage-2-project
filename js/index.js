//商品导航显示 隐藏
$(function() {
    $("#catalog-list .cata-group").hover(function() {
        $(this).addClass("over-group");
		$(this).find(".j_navbg").css("visibility","visible");
    },function() {
        $(this).removeClass("over-group");
		$(this).find(".j_navbg").css("visibility","visible");
    });
});  
//轮播图（1）
var timer = setInterval(autoPlay,2500);
var index = 0;
var falg = true
function autoPlay(){
	if( flag ){
		flag = false;
		index++;
		if( index == $(".oul li").size() ){
			index = 0;
		}
		$(".oul li").eq(index)
				  	.addClass("on")
					.siblings()
				    .removeClass("on");
		$(".lub").animate({"marginLeft" : -529},800,function(){
					$(".lub").css("margin-left",0)
					   		.find( "li:first")
					   		.appendTo( $(".lub") );
			flag = true;
		})
	}
}
$(".obd").mouseenter(function(){
	$("#arr").css( "opacity" , 0.5 );
	clearInterval(timer);
	$(".lub ").stop(true,true);
	
})
$(".obd").mouseleave(function(){
	$("#arr").css( "opacity" , 0 );
	timer = setInterval(autoPlay,2500);
})
//点击右侧按钮 ul向左运动
var flag = true;// 如果值为真  可以点击 
$(".toRight").click(autoPlay)
	//点击左侧按钮 ul向右运动
	$(".toLeft").click(function(){
		if( flag ){
			flag = false;
			if( index == 0 ){
				index = 4;
			}
			index--;
			$(".oul li").eq(index)
				  	.addClass("on")
					.siblings()
				    .removeClass("on");
			//先将ul的最后一个li调整到最前面
			$(".lub li:last").prependTo( $(".lub") );
			//将ul的left值调整到-529
			$(".lub").css("margin-left",-529 );
			//以运动的方式  ul目标值调整到0
			$(".lub").animate({"marginLeft":0},800,function(){
				flag = true;
			})
		}
	})
 
 //轮播图(2)
	var time= setInterval(autoPla,2000);
	var two = 0;
	function autoPla(){
		two++;
		if( two == $(".tul li").size() ){
			two = 0;
		}
		$(".tul li").eq(two)
				    .addClass("on")
				    .siblings()
				    .removeClass("on");
		$(".two-con li").eq(two)
				  		.fadeIn(1000)
				  		.siblings()
				  		.fadeOut(1000);
	}
	$(".two-con li").mouseenter(function(){
		clearInterval(time);
		two = $(this).index()-1;
		autoPla();
		$(".two-con li").stop(true,true);
	})
	$(".two-con li").mouseleave(function(){
		time = setInterval(autoPla,1500);
	})


// //轮播图（3）


var falg = true;
var three = 0;
var timer3 = setInterval( aide,2500)
console.log( $(".onl li") )
function aide(){
	if( falg ){
		falg = false;
		three++
	}
	if( three == $(".onl li").size() ){
			three = 0;
		}
		$(".onl li").eq(index)
				  	.addClass("on")
					.siblings()
				    .removeClass("on");
		$(".picList").animate({"marginLeft" : -370},800,function(){
			$(".picList").css("marginLeft","0")
						 .find("li:first")
					 	 .appendTo( $(".picList") )
		})

	}
// 点击右侧按钮 ul向左运动
var flag = true;// 如果值为真  可以点击 
$(".next").click(aide)
//点击左侧按钮 ul向右运动
$(".prev").click(function(){
	if( flag ){
		flag = false;
		if( three == 0 ){
			three = 5;
		}
		three--;
		$(".onl li").eq(three)
			  	.addClass("on")
				.siblings()
			    .removeClass("on");
		//先将ul的最后一个li调整到最前面
		$(".picList li:last").prependTo( $(".picList") );
		//将ul的left值调整到-165
		$(".picList").css("margin-left",-165 );
		//以运动的方式  ul目标值调整到0
		$(".picList").animate({"marginLeft":0},800,function(){
			flag = true;
		})
	}
})
$(".bd").mouseenter(function(){
	clearInterval(timer3);
	$(".picList ").stop(true,true);
})
$(".bd").mouseleave(function(){
	timer3 = setInterval(aide,2500);
})


//登录栏 选项卡
$(".tabs li").mouseenter(function(){
	$(this).addClass("on")
			.siblings()
			.removeClass("on");
	var index = $(this).index()
	$(".tabs-ul ul").eq(index)
					.fadeIn(500)
				  	.siblings()
				  	.fadeOut(500);
});


// 显示隐藏友情链接
$('#dsdt_up').bind('click', function(){
    if($(this).parent().hasClass('visible')){
		$('.shop_partner').css("display","none");     	
        $(this).parent().removeClass('visible');
        $(this).html('<a href="javascript:void(0);">收起友情链接﹀</a>');		
        $('.shop_partner').slideDown(600);						
    }else{           
        $(this).parent().addClass('visible');
        $(this).html('<a href="javascript:void(0);">展开友情链接︿</a>');				
		$('.shop_partner').slideUp(600);
    }
});
