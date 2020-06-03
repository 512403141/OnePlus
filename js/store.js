// 定义一个存放数据的空数组
let saveArrs = [];
// let saveArrs1 = [];
//获取加入购物车的按钮

$(document).click(function(e) { // 在页面任意位置点击而触发此事件
$(e.target).attr("id"); // e.target表示被点击的目标
})


let oAddBtns = document.querySelector("#aqq1");
oAddBtns.onclick = function() {
	// 商品名
	let AddName = $("#spname").html();
	// 商品单价
	let AddPrice = $("#manney").html();
	//获取背景图地址
	let imgbgS = $("#imgstor").attr("src");

	let objs = {
		"imgSrcs": imgbgS, //图片地址
		"titles": AddName, //标题
		"prices": AddPrice // 单价
	}
	console.log(objs);
	saveArrs.push(objs);
	// 将处理完的数据转成字符串存在localstorage
	localStorage.setItem('data', JSON.stringify(saveArrs));
}
let oAddBtns1 = document.querySelector("#aqq2");
oAddBtns1.onclick = function() {
	// 商品名
	let AddName = $("#spname1").html();
	// 商品单价
	let AddPrice = $("#manney1").html();
	//获取背景图地址
	let imgbgS = $("#imgstor1").attr("src");

	let objs = {
		"imgSrcs": imgbgS, //图片地址
		"titles": AddName, //标题
		"prices": AddPrice // 单价
	}
	console.log(objs);
	saveArrs.push(objs);
	// 将处理完的数据转成字符串存在localstorage
	localStorage.setItem('data', JSON.stringify(saveArrs));
}

let oAddBtns2 = document.querySelector("#aqq3");
oAddBtns2.onclick = function() {
	// 商品名
	let AddName = $("#spname2").html();
	// 商品单价
	let AddPrice = $("#manney2").html();
	//获取背景图地址
	let imgbgS = $("#imgstor2").attr("src");

	let objs = {
		"imgSrcs": imgbgS, //图片地址
		"titles": AddName, //标题
		"prices": AddPrice // 单价
	}
	console.log(objs);
	saveArrs.push(objs);
	// 将处理完的数据转成字符串存在localstorage
	localStorage.setItem('data', JSON.stringify(saveArrs));
}
