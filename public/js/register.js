/**更多登录方式显示收起**/
$("[data-toggle=more_ways]").click(function(){
    var $div=$("div.reg div.others_zh");
    if($div.is(":hidden")){
        $div.slideDown(1000);
        $(this).html("收起∧");
    }
    else{
        $div.slideUp(1000);
        $(this).html("更多第三方登录方式登录方式∨");
    }
})
/**手机邮箱注册方式切换**/
$("#phone").click(function(){
    $("#c2").css("display","none");
    $("#c1").css("display","block");
})
$("#email").click(function(){
    $("#c1").css("display","none");
    $("#c2").css("display","block");
})