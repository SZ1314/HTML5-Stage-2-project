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
//轮播图 淡入浅出（2）
	// var time= setInterval(autoP,2000);
	// var inde = 0;
	// function autoP(){
	// 	inde++;
	// 	if( inde == $(".tul li").size() ){
	// 		inde = 0;
	// 	}
	// 	$(".tul li").eq(inde)
	// 			  .addClass("on")
	// 			  .siblings()
	// 			  .removeClass("on");
	// 	$(".two-con li").eq(inde)
	// 			  .fadeIn(1000)
	// 			  .siblings()
	// 			  .fadeOut(1000);
	// }
	// console.log($(".tul"))
	// $(".tul").mouseenter(function(){
	// 	clearInterval(time);
	// 	inde = $(this).index()-1;
	// 	autoP();
	// })
	// $(".tul").mouseleave(function(){
	// 	time = setInterval(autoP,1500);
	// })
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