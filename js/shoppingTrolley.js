class Car {
		constructor() {
			this.render(); // 根据loaclstorage 渲染页面
		}
		// 渲染页面
		render() {
			// 获取localStorage
			var goodsData = JSON.parse(localStorage.getItem('data'));
			// 获取存放商品的大盒子
			var shopBox = document.getElementsByClassName('shop_car_list')[0]
			var shopBoxcar=document.getElementsByClassName("shop_car_list_total")
			console.log(goodsData);
			// 没有商品的盒子
			var noGoods = document.getElementsByClassName('no_goods')[0]
			// 没数据
			if (goodsData == null) { // 没存进来值
				noGoods.style.display = 'block';
				shopBox.style.border = 'none';
				shopBoxcar.style.display = 'none';
			} else {
				noGoods.style.display = 'none';
				shopBox.style.border = 'block';
				// 循环每一条数据 有几条数据 创建几个小盒子
				for (var i = 0; i < goodsData.length; i++) {
					// 将小盒子添加到大盒子中 修改数据
					shopBox.innerHTML +=
						`
							<div class="shop_car_list_each clearFix">
								<ul>
									<li><img src="${goodsData[i].imgSrc}"></li>
									<li>${goodsData[i].title}</li>
									<li class="shop_car_list_each_price">￥<span>${goodsData[i].price}</span></li>
									<li>
										<button class="shop_car_list_each_reduce_num">-</button>
										<input type="text" value="${goodsData[i].num}" class="shop_car_list_each_num">
										<button class="shop_car_list_each_add_num">+</button>
									</li>
									<li class="shop_car_list_each_total_price">￥<span>${goodsData[i].totalPrice}</span></li>
									<li class="shop_car_list_each_delete_goods">
										<a href="#"> <b>X</b> </a>
									</li>
									<li style="display: none;">${goodsData[i].goodId}</li>
								</ul>
							</div>	
					`
				}
			}
			// 渲染后 修改总价和总数量
			this.getTotalPrice();
			this.getTotalNum();
		}
		// 改变存储数据
		changeNumStoage(value, goodId) {
			// 获取localStorage
			let goodsData = JSON.parse(localStorage.getItem('data'));
			// 循环取出每一条数据
			for (var i = 0; i < goodsData.length; i++) {
				// 根据当前点击按钮的数据对应的id和所有的数据进行比对
				if (goodsData[i].goodId == goodId) { // 有相等的
					goodsData[i].num = value; // 改变这条数据对应的数量
					goodsData[i].totalPrice = goodsData[i].price * goodsData[i].num; // 以及总价
				}
			}
			// 重新存
			localStorage.setItem('data', JSON.stringify(goodsData));
		}
		// 改变总数量
		getTotalNum() {
			// this.render();
			let nums = document.getElementsByClassName('shop_car_list_each_num');
			let totalNum = document.getElementById('goods-total-nums');
			let sum = 0;
			for (let i = 0; i < nums.length; i++) {
				sum += +nums[i].value;
			}
			totalNum.innerHTML = sum;
		}
		// 改变总价格
		getTotalPrice() {
			let price = document.getElementsByClassName('shop_car_list_each_total_price');
			let totalPrice = document.getElementById('goods-totla-prices');
			let sum = 0;
			for (let i = 0; i < price.length; i++) {
				sum += +price[i].firstElementChild.innerHTML;
			}
			totalPrice.innerHTML = sum.toFixed(2);
		}
		// 增加数量
		addGoodsNum(btn) {
			let num = btn.previousElementSibling;
			let goodId = btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
			num.value = Number(num.value) + 1;
			this.getXiaoji(btn, num.value);
			this.getTotalNum();
			this.getTotalPrice();
			// 增加数量的去增加goodId对应的那条数据的数量
			this.changeNumStoage(num.value, goodId);
		}
		// 减少数量
		reduceGoodsNum(btn) {
			let num = btn.nextElementSibling;
			let goodId = btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
			if (num.value <= 1) {
				alert('已经减到最小啦')
			} else {
				num.value = Number(num.value) - 1;
				this.getXiaoji(btn,
					num.value);
				this.getTotalNum();
				this.getTotalPrice();
				// 减少数量的去减少goodId对应的那条数据的数量
				this.changeNumStoage(num.value, goodId);
			}
		}
		// 删除货物
		deleteGoods(btn) {
			let tr = btn.parentNode.parentNode;
			let goodId = btn.nextElementSibling.innerHTML;
			tr.remove();
			this.getTotalNum();
			this.getTotalPrice();
			// 取出所有的数据
			let goodsData = JSON.parse(localStorage.getItem('data'));
			for (var i = 0; i < goodsData.length; i++) {
				// 根据删除的当前这条数的id和数据库进行比对
				if (goodsData[i].goodId == goodId) { // 找到后
					// localStorage.removeItem();
					goodsData.splice(i, 1); // 从整个数据中删除中条数据
				}
			}
			// 重新存
			localStorage.setItem('data', JSON.stringify(goodsData));
		}
		// 获取小计
		getXiaoji(btn, num) {
			// 单价
			let price = btn.parentNode.previousElementSibling.firstElementChild.innerHTML;
			// 小计
			let xiaoji = btn.parentNode.nextElementSibling.firstElementChild;
			// 小计的值
			xiaoji.innerHTML = (price * num).toFixed(2);
		}
		bindEvent() {
			let that = this;

			// 增加按钮
			let addBtn = document.getElementsByClassName('shop_car_list_each_add_num');
			for (let i = 0; i < addBtn.length; i++) {
				addBtn[i].onclick = function() {
					// this=>加号 
					that.addGoodsNum(this);
				}
			}
			// 减少数量 
			let reduceBtn = document.getElementsByClassName('shop_car_list_each_reduce_num');
			for (let i = 0; i < reduceBtn.length; i++) {
				reduceBtn[i].onclick = function() {
					that.reduceGoodsNum(this); // 删除 } }
				}
			}
			// 删除按钮
			let deleteBtn = document.getElementsByClassName('shop_car_list_each_delete_goods');
			for (let i = 0; i < deleteBtn.length; i++) {
				deleteBtn[i].onclick = function() {
					that.deleteGoods(this);
				}
			}
		}
	}
