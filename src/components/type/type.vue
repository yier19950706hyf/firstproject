<template>
	<div>
		<van-nav-bar title="分类管理" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="type">
			<div class="type-con" style="overflow: hidden;">
				<div>新年</div>
				<div style='float: right;line-height: 60px;color: #999999'><span>0件商品</span><van-icon size='16' name="arrow"/></div>
			</div>
		</div>
		
		<div class="goods-bottom">
		<van-col span="24">
			<van-col span="12" @click='xinjian'>
				新建分类
			</van-col>
			<van-col span="12" style='border-left: 1px solid #999999;' @click='tiaozhuan'>
				管理分类
			</van-col>
		</van-col>
		
		<div v-if="show">
			<div class="typebox" @click="del">
				
			</div>
			<div class="typebox-main">
				<div>新建分类</div>
				<div>
					<input type="text" placeholder="新建分类" style="border: 1px solid #999999;height: 30px;padding-left: 10px;"/>
				</div>
				<div class="typtn">
					<div class="btnlet" style="float: left;margin-right: 10px;color: #999999;" @click="del">
						取消
					</div>
					<div style="float: left;color: #0079FE;">
						确定
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			};
		},
		methods: {
			tiaozhuan(){
				this.$router.push({name: 'gaunli'})
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			xinjian(){
				this.show=true
			},
			del(){
				this.show=false
			},
		}
	};
</script>

<style>
	.type{
		width: 100%;
		padding: 0px 20px;
		height: 60px;
		line-height: 60px;
		margin-top: 20px;
		background: white;
	}
	.type-con div{
		font-size: 16px;
		float: left;
	}
	.typebox{
		width: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,0.3);
		left: 0px;
		right: 0;
	}
	.typebox-main{
		height: 140px;
		width: 300px;
		position: fixed;
		left: 50%;
		margin-left: -150px;
		bottom: 50%;
		margin-bottom: -50px;
		background: white;
		border-radius: 4px;
	}
	.typtn{
		height: 40px;
		margin-top: 20px;
		width: 100px;
		margin: 0 auto;
	}
</style>