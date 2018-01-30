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


    $(document).ready(function(){
        $(".ljbm").click(function(){
            aid = $(this).find(".goods_id").text();
            $(".party").fadeIn(500);
        });
        $(".close").click(function(){
            $(".party").fadeOut(500);
        })

        var oBox=$('.news_jj');
        for(var i=0;i<oBox.length;i++){
            var demoHtml = oBox[i].innerHTML.slice(0,27)+'...';
            oBox[i].innerHTML = demoHtml;
        }

        $('.pro li').click(function(){
            ind = $(this).index();
            $('.zzz').css('display','none');
            $('.zzz').eq(ind).css('display','block');
            //先把区域快隐藏
            $('.show_pro').css('display','none');
            $('.show_pro').eq(ind).css('display','block');
            $('#block_id').attr('data-id',ind);
            console.log('block==='+ind);
        })




        var ie6 = document.all;
        var dcv = $('#body_left'), st;
        dcv .attr('otop', dcv .offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dcv .attr('otop'))) {
                if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dcv .css({ position: 'absolute', top: st });
                }
                else if (dcv .css('position') != 'fixed') dcv .css({ 'position': 'fixed', top: 0 });
            } else if (dcv .css('position') != 'static') dcv .css({ 'position': 'static' });
        });

        var dv = $('.top_nav'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dv.attr('otop'))) {
                if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dv.css({ position: 'absolute', top: st });
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 });
            } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' });
        });

        var oBox=$('.pro_title');
        for(var i=0;i<oBox.length;i++){
            var demoHtml = oBox[i].innerHTML.slice(0,29);
            oBox[i].innerHTML = demoHtml;
        }

        $('.top_nav li').click(function(){
            $(this).css({'background':'#d71e00','color':'#fff'}).find('a').css('color','#fff').parent().siblings().css({'background':'#fff','color':'#000'}).find('a').css('color','#000');
        })
    })
    
	//上架篮	
	$(function(){
	$('.img_a').click(function () {
	    $.getJSON('/index.php?app=f_member&act=has_login', function(user){
	        if (user==null || user=='') {
	        	show_login_box();
	        	
	        } else {
	        	
	        	window.location.href = '/fenxiao_home/index.php?app=shop_cart';
	            
	        }
	    });
	});
});
		
		$(function() {
			$('#kefu .close').click(function(){
				$('#kefu .kefu').animate({"width":0},500,function(){
					$('#kefu .open').animate({width:42},200);
				})
			})

			$('#kefu .open').click(function(){
				$('#kefu .open').animate({"width":0},200,function(){
					$('#kefu .kefu').animate({'width':210});
				})
				
			})
		});
		//在线留言弹窗
	$(".liuyan").click(
	  function(){
	    $(".mengban").show();
	    $(".tanchuang").show();
	    $.get('/new_index.php?app=channel&act=get_user_info_ajax',function(data){
	    	if(data.status == 200) {
	    		$("#user_info").val(1);
	    		if(data.data.email != '') {
	    			$("#user_email").val(1);
	    		} else {
	    			$("#user_email").val(0);
	    		}
	    		if(data.data.phone_mob != '') {
	    			$("#user_phone").val(1);
	    		} else {
	    			$("#user_phone").val(0);
	    		}
	    	} else {
	    		$("#user_info").val(0);
	    		$("#user_email").val(0);
	    		$("#user_phone").val(0);
	    	}
	    	//console.log(data);
	    });
	  }
	);

$('.btn_input').click(function(){
	   var type = $(".txt_click").attr('item');
	   var content = $(".area").val();
	   var len = content.length;
	   
	   var user_info = $("#user_info").val();
	   var email = $("#user_email").val();
	   var phone = $("#user_phone").val();
	   
	   if(user_info == 0) {
		   alert("请登录后再留言");
	       window.location.href = '/login/';
	       return;
	   }
	   
   	   if(user_phone==0){
		  alert("请绑定手机号码");
		  return;
   	   }
   	   if(user_email==0){
		  alert("请绑定电子邮箱");
		  return;
	   }
	   if(len > 200){
			alert("不能超过200个字数");
			return;
	   }
	   if(len <1) {
		   alert("留言不能为空");
		   $(".area").focus();
		   return;
	   }
	   if(len < 10){
		   alert("留言不能低于10个字");
		   //$(".area").focus();
		   return;
	   }
  	  
	   $.post('/new_index.php?route=buyer&app=comment&act=add', {'type':type, 'content': content, 'phone':phone, 'email':email, 'sub':0}, function(data){
	    	if(data.status == 200){
	    		alert(data.msg);
 			window.location.href=window.location.href;
				return;
	    	}else{
	    		alert(data.msg);
	    		return;
	    	}
	   },'json')
});





$(".area").bind('focus',function(){
	 $(".area").val("");
});
$(".txt_input").click(
  function(){
    $(this).addClass("txt_click").siblings(".txt_input").removeClass("txt_click")
    //$(this).attr('item','item').siblings(".txt_input").removeAttr('item');
  }
);

//返回顶部
$(".qq_top").hover(
	function(){
        $(this).addClass("qqtopbg");
	},
	function(){
        $(this).removeClass("qqtopbg");
	}
);
$('.top').click(function(){$('html,body').animate({scrollTop: '0px'}, 300);return false;});

//隐藏在线留言弹窗
$(".close_end").click(
  function(){
    $(".mengban").hide();
    $(".tanchuang").hide();
  }
);

		
		
		
		
		