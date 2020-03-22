<template>
	<div>
		<van-nav-bar title="添加商品" left-text="返回" left-arrow @click-left="onClickLeft" />
		<!--//轮播图-->
		<div class="addGoodsuip">
			<div class="goods-add" @click="addpic">
				+
			</div>
			<!--<van-swipe :autoplay="3000" style='height: 160px;'>
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img v-lazy="image" style="width: 100%;height: 100%;" fit="cover"/>
				</van-swipe-item>
			</van-swipe>-->
		</div>
		<!--//主题内容-->
		<div class="addgood-main">
			<div>
				<van-field v-model="text" label="标题" placeholder="请输入标题" />
				<van-cell is-link @click="showPopup" style='border: none;'>分类</van-cell>

				<van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
					<van-picker show-toolbar title="商品分类" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
				</van-popup>
				<div v-for="(item,index) in addbtn" style="margin-bottom: 10px;">
					<van-field v-model="xinghao" label="型号" placeholder="请输入型号" />
					<van-field v-model="jiage" label="价格" placeholder="请输入价格" />
					<van-field v-model="ku" label="库存" placeholder="请输入库存" />
				</div>

			</div>
		</div>
		<div class="goods-add-btn">
			<div class="fl" @click="delbtn">
				-
			</div>
			<div class="fr" @click="addBtn">
				+
			</div>
		</div>
		<div class="addgoods-btn">
			<van-button type="warning">放入产库</van-button>
			<van-button type="danger">上架产库</van-button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	import { Lazyload } from 'vant';

	// options 为可选参数，无则不传
	Vue.use(Lazyload);
	Vue.use(Swipe).use(SwipeItem);
	export default {
		data() {
			return {
				addbtn: [1],
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				text: '',
				xinghao: '',
				jiage: '',
				ku: '',
				show: false, //弹出框
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			//点击弹出框
			showPopup() {
				this.show = true;
			},
			onConfirm(value, index) {
				Toast(`当前值：${value}, 当前索引：${index}`);
			},
			onCancel() {
				Toast('取消');
			},
			//点击添加
			addBtn(){
				let addbtn=this.addbtn
				addbtn.push(1)
				this.addbtn=addbtn
			},
			//点击减少
			delbtn(){
				let addbtn=this.addbtn
				addbtn.splice(addbtn.length-1,1)
				this.addbtn=addbtn
			},
			//点击跳转到addpic
			addpic(){
				this.$router.push('/addpic')
			},
		}
	};
</script>

<style>
	.addGoodsuip {
		width: 100%;
		height: 150px;
		position: relative;
	}
	
	.goods-add {
		font-size: 62px;
		line-height: 150px;
		text-align: center;
	}
	
	.addgood-main {
		padding: 10px 20px;
		background: white;
	}
	
	.van-popup--bottom {
		height: 200px!important;
	}
	
	.addgoods-btn {
		width: 100%;
		position: fixed;
		bottom: 0px;
		background: white;
		padding: 10px;
	}
	
	.addgoods-btn button {
		margin: 0 20px 0px 50px;
	}
	
	.goods-add-btn {
		height: 50px;
		width: 100%;
		box-sizing: border-box;
		line-height: 30px;
		padding: 8px 30%;
		margin-bottom: 80px;
	}
	
	.goods-add-btn .fl {
		float: left;
		margin-right: 20px;
		font-size: 44px;
		font-weight: 600;
		margin-right: 20px;
		border: 1px solid #999999;
		border-radius: 50%;
		height: 40px;
		width: 40px;
		text-align: center;
	}
	
	.goods-add-btn .fr {
		float: right;
		margin-right: 20px;
		font-size: 44px;
		font-weight: 600;
		border: 1px solid #999999;
		border-radius: 50%;
		height: 40px;
		width: 40px;
		text-align: center;
	}
</style>