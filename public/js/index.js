/*第二块图片点击效果*/
$("div.f2>div.f2_details>ul")
    .on("mouseover","[data-toggle=item]",function(e){
        e.preventDefault();
        var $item=$(this);
        $item.parent().addClass("active").siblings().removeClass("active");
        var id=$item.attr("data-target");
        $(id).addClass("active").siblings().removeClass("active");
    })
    /**轮播图效果 */
$div=$("#main>div.f1>div");
var w=1000;
var num=0;
setInterval(function(){
    num++;
    if(num==5){
        $div.css("transition","none");
        $div.css("transform","translate(0,0)");
        setTimeout(function(){
            $div.css("transition","all 1s ease")
        },0)
        num=1;
        setTimeout(function(){
            $div.css("transform","translate(-"+num*w+"px,0)")
        },0)
    }else
    $div.css("transform","translate(-"+num*w+"px,0)");
},2000);
/**鼠标悬停 图片上滑 */
var step=document.getElementsByClassName("step");
var c1=document.getElementsByClassName("c1");
for(var i=0;i<step.length;i++){
    (function(i){
        step[i].onmouseover=function(){
            c1[i].style.marginTop="-100px";
        }
        step[i].onmouseout=function(){
            c1[i].style.marginTop="0px";
        }
    })(i)
}
