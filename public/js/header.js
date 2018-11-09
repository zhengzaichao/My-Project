// 引入头部
$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
	$.ajax({
		url:"header.html",
		type:"get",
		success: function(res){
			//console.log(res)
			$(res).replaceAll("#header")
			$(`<script src="js/nav.js"></script>`).appendTo("head");
		}
	})
	$("#log_id>img").click(function () {
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		
	  });
})
