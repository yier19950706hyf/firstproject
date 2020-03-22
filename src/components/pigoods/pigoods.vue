<template>
	<div>
		<van-nav-bar title="批量管理" left-text="返回" left-arrow @click-left="onClickLeft" />
	
	<div class="pigoods-main">
		<div class="pigoods-con">
			<div class="pi-juan">
				<div class="juan">
					
				</div>
			</div>
			<div class="pi-tu">
				<img src="../../../build/logo.png"/>
			</div>
			<div class="text-pi">
				<div style="font-weight: 600;"> 
					99喧哗
				</div>
				<div style="color: red;margin-top: 8px;font-size: 18px;font-weight: 600;">
					￥99
				</div>
				<div style="margin-top:10px;font-size: 14px;color: #999999;">
					<span>总销量88</span>
					<span>库存88</span>
				</div>
			</div>
		</div>
	</div>

	<div class="goods-bottom">
		<van-col span="24">
			<van-col span="12" >
				上架
			</van-col>
			<van-col span="12" style='border-left: 1px solid #999999;'>
				分类
			</van-col>
		</van-col>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},

		}
	};
</script>

<style>
.goods-bottom{
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 40px;
		background: white;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		box-sizing: border-box;
		padding: 0 20px;
	}
	.pigoods-con{
		display: flex;
		height: 80px;
	}
	.pigoods-main{
		padding: 10px 20px;
		width: 100%;
		margin-bottom: 20px;
	}
	.pi-juan{
		height: 80;
		width: 20px;
		margin-right: 8px;
	}
	.juan{
		height: 20px;
		width: 20px;
		background: white;
		border-radius: 50%;
		margin-top: 30px;
	}
	.pi-tu{
		height: 80px;
		width: 80px;
		margin-right: 8px;
	}
	.pi-tu img{
		width: 80px;
		height: 80px;
	}
	.text-pi{
		flex: 1;
	}
	.text-pi{
		font-size: 16px;
	}
</style>