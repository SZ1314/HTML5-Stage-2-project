$(function(){
	/**********************
	传入自定义datatype类型【方式一】;
	$.extend($.Datatype,{
		"z2-4" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/
	});
	**********************/
	var demo1=$("#register_form").Validform({
		btnSubmit: '#regist',
		tiptype:4,
		datatype:{
			'username': function(gets,obj,curform,regxp){
				var reg1=regxp["m"], reg2=regxp["e"],
				username=curform.find("[name=name]").val();
				if(reg1.test(username)){
					$("#register_form").find("[name=dxyz]").attr('datatype', '*');
					$('#dxyzm').show();
					return true;
				}
				if(reg2.test(username)){
					$("#register_form").find("[name=dxyz]").attr('datatype', '');
					$('#dxyzm').hide();
					return true;
				}
				return false;
			},
			"pwd": function(gets,obj,curform,regxp){
			var reg=/^\S{8,20}$/,
				password=curform.find("[name=password]:visible").val();
				if(reg.test(password)){
					return true;
				}
				return false;
			}	
		},
		url :"/register_step2",
		beforeSubmit:function(curform){
			var myform_submit  = 0; 
			$.ajax({  
		        type : "post",  
		        url : "/new_index.php?app=member&act=new_register_ajax",  
		        data : $("#register_form").serialize(),  
		        async : false,  
		        dataType:"json",
		        success : function(data){  
                    if(data.status=='y'){
                    	myform_submit = 1;
                    }else{
                    	alert(data.msg);
                    	var num = Math.round(Math.random()*1000);
                    	$('#yanzheng').val('');
                    	$('#yanzheng_img').attr('src',"/index.php?app=captcha&act=index&num="+num);
                    } 
		        }  
			}); 

			if(myform_submit ==1){
				return true;
			}else{
				return false;
			}
		}
	});

	var demo2=$("#e-mail_form").Validform({
		btnSubmit: '#step2',
		tiptype:4,
		url:"/register_step3",
		beforeSubmit:function(curform){
			var myform_submit  = 0; 
			$.ajax({  
		        type : "post",  
		        url : "/new_index.php?app=member&act=new_register_ajax_step3",  
		        data : $("#e-mail_form").serialize(),  
		        async : false,  
		        dataType:"json",
		        success : function(data){  
                    if(data.status=='y'){
                    	myform_submit = 1;
                    }else{
                    	alert(data.msg+'验证码已刷新，请重新验证');
                    	var num = Math.round(Math.random()*1000);
                    	$('#yanzheng').val('');
                    	$('#yanzheng_img').attr('src',"/index.php?app=captcha&act=index&num="+num);
                    } 
		        }  
			}); 

			if(myform_submit ==1){
				return true;
			}else{
				return false;
			}
		}
	});
	//刷新验证码
    $('#refresh_img').click(function(){
    	var num = Math.round(Math.random()*1000);
    	$('#yanzheng').val('');
    	$('#yanzheng_img').attr('src',"/index.php?app=captcha&act=index&num="+num);
    });
    //获取手机验证码
    var delayTime = 120;
    var delayFlag = true;
 	 $(".dxyz").click(function(){
 		if(!delayFlag) return false;
 		 var param = $.trim($('[name=captcha]').val());
 		 if(param == ''){
 			$('[name=captcha]').focus();
 			return false;
 		 } 
		$.ajax({
			url: "/new_index.php?app=member&act=ajax_check",
			data:{"name":'captcha', 'param': param},
			 type: "POST",
			 dataType: "json",
			 success: function(data){
				 if(data.status == 'y'){
			 		var phone = $.trim($("[name=name]").val());
					  if(!(/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$/.test($.trim(phone)))){
							alert("手机号码格式不正确");
							return false;
					  }
					 delayFlag = false;
					  $.ajax({
						  url: "/new_index.php?app=member&act=ajax_sms_send",
						  data:{"phone":phone, 'param': param},
						 type: "POST",
						 dataType: "json",
						 success: function(data){
							 if(data.status == 200){
							  	 $(this).html(delayTime + '秒后重新获取');
							  	 setTimeout(countDown, 1000); 
							 }else{
								 delayFlag = true;
								 alert(data.msg);
							  	 $('#yanzheng').val('');
							  	 $('#yanzheng_img').attr('src','/new_index.php?app=captcha&t='+Math.random());
							 	 $('[name=captcha]').focus();
							 }
					 	 }
				 	 });
				 }else{
				 	 $('#yanzheng').val('');
				 	 $('#yanzheng_img').attr('src','/new_index.php?app=captcha&t='+Math.random());
					 $('[name=captcha]').focus();
				 }
		 	 }
	 	 });
	  });
 	 
 	 //邮箱注册时验证手机号码是否正确，发送短信验证码
 	var delayTime1 = 120;
    var delayFlag1 = true;
 	 $(".dxyzp").click(function(){
 		if(!delayFlag1) return false;
 		 var param = $.trim($('[name=phone_mob]').val());
 		 if(param == ''){
 			$('[name=phone_mob]').focus();
 			return false;
 		 } 
		$.ajax({
			url: "/new_index.php?app=member&act=ajax_check",
			data:{"name":'phone_mob', 'param': param},
			 type: "POST",
			 dataType: "json",
			 success: function(data){
				 if(data.status == 'y'){
			 		var phone = $.trim($("[name=phone_mob]").val());
					  if(!(/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$/.test($.trim(phone)))){
							alert("手机号码格式不正确");
							return false;
					  }
					 delayFlag = false;
						param = $.trim($('[name=captcha]').val());
					  $.ajax({
						  url: "/new_index.php?app=member&act=ajax_sms_send",
						  data:{"phone":phone, 'param': param},
						 type: "POST",
						 dataType: "json",
						 success: function(data){
							 if(data.status == 200){
							  	 $(this).html(delayTime1 + '秒后重新获取');
							  	 setTimeout(countDown1, 1000); 
							 }else{
								 delayFlag1 = true;
								 alert(data.msg);
							 }
					 	 }
				 	 });
				 }else{
					 $('[name=phone_mob]').focus();
				 }
		 	 }
	 	 });
	  });
 	 
 	 
 	 
 	 //倒计时
 	 function countDown() {
         delayTime--;
         $(".dxyz").html(delayTime + '秒后重新获取');
         if (delayTime == 0) {
             delayTime = 120;
             $(".dxyz").html("获取短信验证码");
             delayFlag = true;
         } else {
             delayFlag = false;
             setTimeout(countDown, 1000);
         }
     }
 	function countDown1() {
        delayTime1--;
        $(".dxyzp").html(delayTime1 + '秒后重新获取');
        if (delayTime1 == 0) {
            delayTime1 = 120;
            $(".dxyzp").html("获取短信验证码");
            delayFlag1 = true;
        } else {
            delayFlag1 = false;
            setTimeout(countDown1, 1000);
        }
    }
  	$("#cate_form").submit(function(){
  		  var data = $("#cate_form").serialize();
		  $.ajax({
			  url: "/new_index.php?app=member&act=ajax_register",
			  data:data,
			 type: "POST",
			 dataType: "json",
			 success: function(data){
				 if(data.status == 'y'){
					 $('.searchTxt p').hide();
					 $('p.hide').html('您的券号'+data.data.ticket);
					 $('p.hide').show();
					 $('p.shouming').show();
					$('.searchMenu').hide();
				 }else{
					 alert(data.msg);
				 }
		 	 }
	 	 });
 		return false;
 	});
 	 $('li[from-data]').click(function(){
 		var value = $(this).attr('from-data');
 		$("#cate_form").find("[name=from]").val(value);
 		var cate_id = $("#cate_form").find("[name=cate_id]").val();
 		if(cate_id != ''){
 			$("#cate_form").submit();
 		}
 	 });
 	 $('li[cate-data]').click(function(){
 		var value = $(this).attr('cate-data');
 		$("#cate_form").find("[name=cate_id]").val(value);
 		var from = $("#cate_form").find("[name=from]").val();
 		if(from != ''){
 			$("#cate_form").submit();
 		}
 	 });
})
