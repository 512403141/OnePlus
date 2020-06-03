$(function() {


	// banners-------------------------------------------------
	let index = 0;
	let time = null

	function autoplay() {
		time = setInterval(function() {
			nextimg()
		}, 3000)
	}

	function nextimg() {
		index++;
		if (index > 1) {
			index = 0;
		}
		let num = index + 1
		if (num > 1) {
			num = 0
		}
		$(".bannerimg img").eq(index).stop().animate({
			"opacity": 0
		}, 1000)
		$(".bannerimg img").eq(num).stop().animate({
			"opacity": 1
		}, 1000)
	}

	function preimg() {
		index--;
		if (index < 0) {
			index = 2
		}
		let num = index - 1
		if (num < 0) {
			num = 1
		}
		$(".bannerimg img").eq(index).stop().animate({
			"opacity": 0
		}, 1000)
		$(".bannerimg img").eq(num).stop().animate({
			"opacity": 1
		}, 1000)
	}


	$(".next").click(function() {
		nextimg()
	})
	$(".pre").click(function() {
		preimg()
	})

	$(".bannerimg").mouseover(function() {
		clearInterval(time)
	})
	$(".bannerimg").mouseout(function() {
		autoplay()
	})
	autoplay()



	//---------------------------------------------------------
	let icongwd = $('.icon-gwd');
	let navheaderBox2 = $('.header_navB2');
	icongwd.mouseenter(function() {
		$('.header_navBox').show();
		$('.header_navBox div').hide();
		navheaderBox2.eq($(this).index()).show();
	})
	icongwd.mouseleave(function() {
		$('.header_navBox').hide();
	})
	$('.header_navBox').mouseenter(function() {
		$('.header_navBox').show();
		$(this).show();
	})
	$('.header_navBox').mouseleave(function() {
		$(this).hide();
	})




	let icondl = $('.icon-dl');
	let navheaderBox = $('.header_navB1');
	icondl.mouseenter(function() {
		$('.header_navBox').show();
		$('.header_navBox div').hide();
		navheaderBox.eq($(this).index()).show();
	})
	icondl.mouseleave(function() {
		$('.header_navBox').hide();
	})
	$('.header_navBox').mouseenter(function() {
		$('.header_navBox').show();
		$(this).show();
	})
	$('.header_navBox').mouseleave(function() {
		$(this).hide();
	})





	//-------------------------------------------------------------
	// 获取有二级导航的li
	let aBox = $('.nav');
	// 获取一级导航对应的二级导航盒子
	let contentBox = $('.navcontentBox div');
	// 鼠标滑入一级导航
	aBox.mouseenter(function() {
		// 大盒子显示
		$('.navcontentBox').show();
		// 排他
		$('.navcontentBox div').hide();
		// 自身显示
		contentBox.eq($(this).index()).show();
	})
	// 离开选择的导航时 隐藏包裹二级导航的盒子
	// 必须使用mouseleave
	aBox.mouseleave(function() {
		$('.navcontentBox').hide();
	})
	// 划入二级导航 依旧显示
	$('.navcontentBox').mouseenter(function() {
		$('.navcontentBox').show();
		$(this).show();
	})
	// 划出二级导航 隐藏包裹二级导航的盒子
	$('.navcontentBox').mouseleave(function() {
		$(this).hide();
	})

	// ----------------------------
	$(".vx_box").click(function() {
		$(".vxs_boxs,.zzc").css({
			display: "block",
		});
		$(".vx_box").css({
			display: "none",
		});
		$(".vxs_boxs").animate({
			top: 60
		}, 500)
	});

	$(".btn").click(function(evt) {
		$(".vxs_boxs,.zzc").css({
			display: "none"
		});
		$(".vx_box").css({
			display: "block",
		});
		$(".vxs_boxs").animate({
			top: 800
		}, 500)
	});



	//微信二维码显示
	$(".imgss").mouseover(function() {
		$(".iimgss").css({
			display: "block"
		})
	})
	$(".imgss").mouseout(function() {
		$(".iimgss").css({
			display: "none"
		})
	});
	//微信二维码显示------750
	// $(".imgss_750").mouseover(function(){
	// 	$(".iimgss_750").css({
	// 		display:"block"
	// 	})
	// })
	// $(".imgss_750").mouseout(function(){
	// 	$(".iimgss_750").css({
	// 		display:"none"
	// 	})
	// });


	$(".fbp_1").click(function(){
		if($(".box1-li_750 .fbu_1").css("display")=="none"){
			$(".fbu_1").show(500);
		}else{
			$(".fbu_1").hide(500);
		}
	});
	$(".fbp_2").click(function(){
		if($(".box1-li_750 .fbu_2").css("display")=="none"){
			$(".fbu_2").show(500);
		}else{
			$(".fbu_2").hide(500);
		}
	});
	$(".fbp_3").click(function(){
		if($(".box1-li_750 .fbu_3").css("display")=="none"){
			$(".fbu_3").show(500);
		}else{
			$(".fbu_3").hide(500);
		}
	});
	$(".fbp_4").click(function(){
		if($(".box1-li_750 .fbu_4").css("display")=="none"){
			$(".fbu_4").show(500);
		}else{
			$(".fbu_4").hide(500);
		}
	});







})
