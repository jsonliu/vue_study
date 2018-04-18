<template>
    <div class="wx-main-view">
	    <div class="canvas-out">
		    <canvas  id="radar-id"></canvas>
	    </div>
	    <div class="canve-in">
		    <canvas  id="radar-idba"></canvas>
	    </div>

	    <div class="canve-text">
		    <p class="number">750</p>
		    <p class="level">信用极好</p>
	    </div>


		    <!--<canvas  id="radar-id"></canvas>-->

		    <!--<canvas  id="radar-idba"></canvas>-->

    </div>
</template>

<script type="text/ecmascript-6">
		import radarMap from 'services/radarChart.js'
    export default {
        components: {},
        data(){
            return {}
        },
		    mounted(){
			    /*
			     *   id：canvas-id（底部canvas加ba）
			     *   	height
			     *  	  width
			     *  	  mColorPolygon 边
			     * 		mColorLines 线
			     * 		mColorText 文字
			     * 		mColorRegion 背景
			     * 		rotate 旋转角度
			     * 		mData  数据（一百分为标准）
			     * 		注：因涉及两个canvas，样式要调整层叠
			     */

			    var windesW = document.body.clientWidth*0.8

			    radarMap.init(
				    {
					    id:'radar-id',
					    height:windesW,
					    width:windesW,
					    mColorLines:'#f0f',
					    mColorPolygon:'#f0f',
					    mColorText:'#fff',
					    mColorRegion:'#00f',
					    rotate:0,
					    mData:[['行为',100],['信用',90],['资产',80],['消费',70],['身份',60]]
				    }
			    )

		    },
        created(){



        }
    }
</script>

<style lang="less" rel="stylesheet/less">

	.canvas-out {

		width: 300px;
		height: 300px;
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: red;
		z-index: 88888;

		#radar-id {
			/*position: absolute;*/
			/*top: 0;*/
			/*bottom: 0;*/
			/*left: 0;*/
			/*right: 0;*/
			/*margin: 0 auto;*/

		}



	}
	.canve-in {
		/*width: 300px;*/
		/*height: 300px;*/
		//background-color: yellow;

		/*background-color: transparent;*/

		width: 300px;
		height: 300px;
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 99999;

		#radar-idba {

			/*position: absolute;*/
			/*top: 0;*/
			/*bottom: 0;*/
			/*left: 0;*/
			/*right: 0;*/
			/*margin: 0 auto;*/

		}

	}

	.canve-text {
		width: 300px;
		height: 300px;
		line-height: 300px;
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
		z-index: 100000;
		/*background-color: yellow;*/

	}



</style>
