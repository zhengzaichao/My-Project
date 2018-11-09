/**折叠导航栏 */

$("div.top2>ul>li:nth-child(2)>a.updown")
.mouseenter(function(){$("div.top2>ul>li:nth-child(2)>div").slideDown(500)})
.mouseleave(function(){$("div.top2>ul>li:nth-child(2)>div").slideUp(500)})
$("div.top2>ul>li:nth-child(3)>a.updown").parent()
.mouseenter(function(){$("div.top2>ul>li:nth-child(3)>div").slideDown(500)})
.mouseleave(function(){$("div.top2>ul>li:nth-child(3)>div").slideUp(500)})
