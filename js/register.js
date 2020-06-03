//window.onload页面加载完调用
window.onload = function() {
	//事件:滑块1.按下  onmousedown
	//2.拖动 onmousemove
	//3.松开 onmouseup
	var flag = false; //处理验证是否通过  默认是不通过
	var box = document.getElementById('box_hk'); //大盒子
	var btn = document.getElementsByClassName('btn_hk')[0]; //滑块
	var text = document.getElementsByClassName('text_hk')[0]; //文字
	var bg = document.getElementsByClassName('bg_hk')[0]; //背景
	//按下
	btn.onmousedown = function(e) {
		var downX = e.clientX; //按下按钮后与窗口的x轴间距
		//移动
		btn.onmousemove = function(e) {
			var moveX = e.clientX - downX; //滑动的时候距离窗口的x轴的间距  滑动的x-按下的x             
			//只有在大于0的时候才拖动
			if (moveX > 0) {
				btn.style.left = moveX + 'px'; //滑块与左边的距离
				bg.style.width = moveX + 'px'; //背景的宽度就是滑块距离左边的位置
				//验证成功 条件 不能> 盒子的宽度-滑块的宽度 
				if (moveX >= (box.offsetWidth - btn.offsetWidth)) {
					text.innerText = '验证通过';
					text.style.color = '#fff';
					btn.onmousemove = null; //清除拖动事件
					btn.onmousedown = null; //清除按下事件
					flag = true; //通过的时候设置为true
				}
			}

		}
	}
	//松开
	btn.onmouseup = function() {
		//为假的时候
		if (flag == false) {
			btn.onmousemove = null; //清除事件
			btn.style.left = 0;
			bg.style.width = 0;
		}
	}
}


// 密码的隐藏与显示
var ipt = document.querySelector('#input_psd');
var imgs = document.querySelector('#box_input_psd img');
//注册事件
//方法1：
var flag = 0;
imgs.onclick = function() {
	if (flag == 0) {
		ipt.type = 'text';
		imgs.src = 'img/open.jpg';
		flag = 1;
	} else {
		ipt.type = 'password';
		imgs.src = 'img/close.jpg';
		flag = 0;
	}
}
//方法2：
// imgs.onclick = function() {
// 	if (ipt.type === 'password') {
// 		ipt.type = 'text';
// 		imgs.src = 'open.jpg';
// 	} else {
// 		ipt.type = 'password';
// 		imgs.src = 'close.jpg';
// 	}
// }
