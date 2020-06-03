function show(canshu1, canshu2) {
	var img_box = document.getElementById(canshu1); //参数1为小图片的id,参数2为大图片的src
	var pic = document.getElementById('smallBox'); // pic为大图片div的id
	var pics = document.getElementById('bigBox');
	img_box.onclick = function() {
		// pic.src = canshu2; // 把参数2设为新的src(路径)

		pic.style.backgroundImage = 'url(' + canshu2 + ')';
		pics.style.backgroundImage = 'url(' + canshu2 + ')';
	}
}
show("img_sbox1", "./img/666.png") //调用show()，用所有大小图片参数
show("img_sbox2", "./img/333.png")









// 定义一个存放数据的空数组
var saveArr = [];
//获取加入购物车的按钮
let oAddBtn = document.querySelector(".goca");
oAddBtn.onclick = function() {
	var flag = false;
	// 商品名
	let oAddName = $("#h3").html();
	// 商品单价
	let oAddPrice = $(".text_span2").html();
	//获取背景图地址
	let imgbgSrc = $("#smallBox").css("backgroundImage").replace('url(', '').replace(')', '');
	imgbgSrc = imgbgSrc.replace(/"/g, "");
	// let imgbgSrc = $("#smallBox").css("backgroundImage");
	// imgbgSrc = imgbgSrc.split("(")[1].split(")")[0];
	let goodId = this.nextElementSibling.innerHTML;
	// console.log(oAddName);
	// console.log(oAddPrice);
	console.log(imgbgSrc);
	let obj = {
		"imgSrc": imgbgSrc, //图片地址
		"title": oAddName, //标题
		"price": oAddPrice, // 单价
		"num": 1, //数量
		"totalPrice": oAddPrice, // 总价
		"goodId": goodId //id
	}
	// console.log(saveArr);
	// console.log(JSON.stringify(saveArr));
	// 循环所有的即将要存的数据
	for (var x = 0; x < saveArr.length; x++) {
		// 判断当前要存的这个条数据在整个数据存在与否
		if (saveArr[x].goodId == goodId) { // 存在只做修改
			saveArr[x].num++; // 修改数量
			// 修改总价
			saveArr[x].totalPrice = saveArr[x].price * saveArr[x].num;
			flag = true; // 有重复的标记置为true
		}
	}
	// 没重复的直接push
	if (flag == false) {
		saveArr.push(obj);
	}
	//saveArr = [{},{},{}]
	// 将处理完的数据转成字符串存在localstorage
	localStorage.setItem('data', JSON.stringify(saveArr));
	alert('加入购物车成功');
}
