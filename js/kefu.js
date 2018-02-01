<script>
	
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
	    $(".tanchuang").show()
	    	//console.log(data);
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
</script>