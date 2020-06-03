$(".shop_span_a2").click(function() {
	$(".zhiffs,.zzc").css({
		display: "block",
	});
	$(".zhiffs").animate({
		top: 60
	}, 500)
});

$(".zhiffs button").click(function(evt) {
	alert("这么好的商品确定不买吗?");
	alert("价格太高了还是款式不喜欢?");
	alert("真的不买了吗?");
	alert("要退出了吗?");
	alert("真的要退出吗?");
	alert("不再考虑一下吗?");
	alert("好吧!!!");
	$(".zhiffs,.zzc").css({
		display: "none"
	});
	$(".zhiffs").animate({
		top: 800
	}, 500)
});
