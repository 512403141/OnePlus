class Magnifier {
		constructor(newSmallBox, newMask, newBigBox) {
			this.sB = newSmallBox; //小盒子
			this.mask = newMask; //遮罩层
			this.bBox = newBigBox; //大盒子
		}
		//鼠标滑进小盒子显示遮罩层和大盒子
		onmouseover() {
			let that = this;
			that.sB.onmouseover = function() {
				that.mask.style.display = "block";
				that.bBox.style.display = "block";
			}
		}
		//鼠标移出小盒子，隐藏遮罩层和大盒子
		onmouseout() {
			let that = this;
			that.sB.onmouseout = function() {
				that.mask.style.display = "none";
				that.bBox.style.display = "none";
			}
		}

		onmousemove() {
			let that = this;
			this.sB.onmousemove = function(evt) {
				let e = evt || event;
				let left = e.pageX - this.offsetLeft - that.mask.offsetWidth / 2;
				let top = e.pageY - that.sB.offsetTop - that.mask.offsetHeight / 2;

				if (left < 0) {
					left = 0;
				}

				let maxLeft = this.offsetWidth - that.mask.offsetWidth;

				if (left > maxLeft) {
					left = maxLeft;
				}

				if (top < 0) {
					top = 0;
				}

				let maxTop = this.offsetHeight - that.mask.offsetHeight;

				if (top > maxTop) {
					top = maxTop;
				}

				let x = left * that.bBox.offsetWidth / that.mask.offsetWidth;
				let y = top * that.bBox.offsetHeight / that.mask.offsetHeight;

				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";

				that.bBox.style.backgroundPositionX = -x + "px";
				that.bBox.style.backgroundPositionY = -y + "px";
			}
		}
		eventBind() {
			this.onmouseover();
			this.onmouseout();
			this.onmousemove();
		}
	}
