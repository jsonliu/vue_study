/**
 * Created by jsonliu on 2017/12/7.
 */
/**
 * 雷达图统计
 * @author yangduanting
 * option id： canvas-id（底部canvas加ba）
 *   	height
 *  	width
 *  	mColorPolygon 边
 * 		mColorLines 线
 * 		mColorText 文字
 * 		mColorRegion 背景
 * 		rotate 旋转角度
 * 		mData  数据（一百分为标准）
 * 		注：因涉及两个canvas，样式要调整层叠
 *
 */
const statistics = {
	init(option){
		var canvas = document.getElementById(option.id);
		canvas.height = option.height;
		canvas.width = option.width;
		canvas.style.left= -option.height*0.25+'px';
		canvas.style.top=-option.height*0.25+'px';
		var mCtx = canvas.getContext('2d');
		mCtx.rotate(option.rotate*Math.PI/180);

		var canvasBa = document.getElementById(option.id+'ba');
		canvasBa.height = option.height;
		canvasBa.width = option.width;
		canvasBa.style.left= -option.height*0.25+'px';
		canvasBa.style.top=-option.height*0.25+'px';
		var mCtxBa = canvasBa.getContext('2d');
		mCtxBa.rotate(option.rotate*Math.PI/180);

		option.mCenter = option.width /2; //中心点
		option.mRadius = option.mCenter - document.body.clientWidth*0.15; //半径(减去的值用于给绘制的文本留空间)


		option.mCount = option.mData.length;//数据长度
		option.mAngle = Math.PI * 2 / option.mCount; //角度


		this.drawPolygon(mCtx,option);// 绘制多边形边
		this.drawLines(mCtx,option);//顶点连线


		this.drawText(mCtx,option);//绘制文本


		this.animateRegion(mCtxBa,option)


		//  add --- 1
		// option.mRadius = option.mCenter; //半径
		// this.drawPolygon(mCtx,option);// 绘制大的多边形边




	},
	drawPolygon(ctx,option){// 绘制多边形边
		ctx.save();
		ctx.strokeStyle = option.mColorPolygon;
		ctx.beginPath();
		for(var j = 0; j < option.mCount; j ++){
			var x = option.mCenter + option.mRadius * Math.cos(option.mAngle * j);

			var y = option.mCenter + option.mRadius * Math.sin(option.mAngle * j);
			ctx.lineTo(x, y);
		}
		ctx.closePath()
		ctx.stroke();
		ctx.restore();
	},
	drawLines(ctx,option){//顶点连线
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = option.mColorLines;
		for(var i = 0; i < option.mCount; i ++){
			var x = option.mCenter + option.mRadius * Math.cos(option.mAngle * i);
			var y = option.mCenter + option.mRadius * Math.sin(option.mAngle * i);
			ctx.moveTo(option.mCenter, option.mCenter);
			ctx.lineTo(x, y);
		}
		ctx.stroke();
		ctx.restore();
	},
	drawText(ctx,option){//绘制文本
		var fontSize = option.mCenter / 10;
		const distance = [[8,5],[-15,24],[-26,22],[-55,-10],[-19,-17]]
		for(var i = 0; i < option.mCount; i ++){
			ctx.save();
			ctx.font = fontSize + 'px Microsoft Yahei';
			ctx.fillStyle = option.mColorText;
			var x = option.mCenter + option.mRadius * Math.cos(option.mAngle * i);
			var y = option.mCenter + option.mRadius * Math.sin(option.mAngle * i);
			ctx.translate(x+distance[i][0], y+distance[i][1]);
			ctx.rotate(18*Math.PI/180)
			ctx.fillText(option.mData[i][0], 0, 0);
			ctx.restore();
		}
		// ctx.save();
		// ctx.font = fontSize + 'px Microsoft Yahei';
		// ctx.fillStyle = option.mColorText;
		// var fontSize = option.mCenter / 12;
		// for(var i = 0; i < option.mCount; i ++){
		//     var x = option.mCenter + option.mRadius * Math.cos(option.mAngle * i);
		//     var y = option.mCenter + option.mRadius * Math.sin(option.mAngle * i);
		//     if( option.mAngle * i >= 0 && option.mAngle * i <= Math.PI / 2 ){
		//         ctx.fillText(option.mData[i][0], x, y + fontSize);
		//     }else if(option.mAngle * i > Math.PI / 2 && option.mAngle * i <= Math.PI){
		//         ctx.fillText(option.mData[i][0], x - ctx.measureText(option.mData[i][0]).width, y + fontSize);
		//     }else if(option.mAngle * i > Math.PI && option.mAngle * i <= Math.PI * 3 / 2){
		//         ctx.fillText(option.mData[i][0], x - ctx.measureText(option.mData[i][0]).width, y);
		//     }else{
		//         ctx.fillText(option.mData[i][0], x, y);
		//     }
		// }
		// ctx.restore();


	},
	drawRegion(ctx,option,num){//画占比
		ctx.clearRect(0,0,option.width,option.height);
		ctx.save();
		ctx.beginPath();
		let interval ;
		for(var i = 0; i < option.mCount; i ++){
			var x = option.mCenter + option.mRadius * Math.cos(option.mAngle * i) * (num < option.mData[i][1]?num:option.mData[i][1]) / 100;
			var y = option.mCenter + option.mRadius * Math.sin(option.mAngle * i) * (num < option.mData[i][1]?num:option.mData[i][1]) / 100;
			ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.fillStyle = option.mColorRegion;
		ctx.fill();
		ctx.restore();
	},
	animateRegion(mCtx,option){//动画执行
		let interval;
		let num = 20;
		interval = setInterval(function(){
			statistics.drawRegion(mCtx,option,num);
			num +=5;
			if(num == 100){
				clearInterval(interval)
			}
		}, 50);
	}

}


export default statistics;