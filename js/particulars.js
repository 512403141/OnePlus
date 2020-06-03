let goodsDatas = JSON.parse(localStorage.getItem('data'));
console.log(goodsDatas);

for (var i = 0; i < goodsDatas.length; i++) {
    var p = goodsDatas[i];
    for(var key in p){
		
		
		// $("#smallBox").css("background-image","url(p.imgSrcs)");
		$("#h3").html(p.titles);
		$(".text_span2").html(p.prices);
    }
}

	
	var pic = document.getElementById('smallBox'); // pic为大图片div的id
	var pics = document.getElementById('bigBox');
	pic.style.backgroundImage = 'url(' + p.imgSrcs + ')';
	pics.style.backgroundImage = 'url(' + p.imgSrcs + ')';
	pic.style.backgroundSize="cover";
	// pic.style.backgroundPositionX="-10px";
	pic.style.backgroundRepeat="no-repeat";
	// console.log(p.imgSrcs);
// localStorage.setItem('data', JSON.stringify(goodsDatas));