$(".all-nav-cate").hover(function(){
	$(".all-nav-cate em").css({"border-top":0,"border-bottom":"5px solid #fff"})
			console.log($(".all-nav-cit em"))
	$(".catalog-list").css("display","block")
	    $(".catalog-list .cata-group").mouseover(function() {
	        $(this).addClass("over-group");
			$(this).find(".j_navbg").css("visibility","visible");
	    $(".catalog-list .cata-group").mouseout(function() {
	        $(this).removeClass("over-group");
			$(this).find(".j_navbg").css("visibility","visible");
	    });
	});  
},function(){
	$(".catalog-list").css("display","none")
	$(".all-nav-cate em").css({"border-bottom":0,"border-top":"5px solid #fff"})
})
