<template>
	<div>
		<van-nav-bar title="管理分类" left-text="返回" left-arrow @click-left="onClickLeft" />
		
		<div class="guanli" v-for="(item,index) in [1,1,1]">
			<div class="fl">
				新年
			</div>
			<div class="fr" style="margin-left: 20px;">
				<van-icon name="delete" />
			</div>
			<div class="fr" style="margin-left: 20px;">
				<van-icon name="edit" />
			</div>
			<div class="fr" style="transform:rotate(180deg);">
				<van-icon name="down" />
			</div>
		</div>
		
		<div class="addfen" @click='xinjian'>
			新建分类
		</div>
		
		<div style="margin: 0 auto;text-align: center;" v-if="show">
			<div class="typebox" @click="del">
				
			</div>
			<div class="typebox-main">
				<div style="margin: 10px 0px;">新建分类</div>
				<div style="margin: 10px 0px;">
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
	.guanli{
		padding: 0 20px;
		height: 40px;
		font-size: 16px;
		line-height: 40px;
		background: white;
		margin-top: 20px;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.addfen{
		width: 200px;
		height: 30px;
		position: fixed;
		text-align: center;
		bottom: 20px;
		left: 50%;
		margin-left: -100px;
		border-radius: 12px;
		font-size: 16px;
		line-height: 30px;
		background: #0079FE;
		color: white;
	}
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
		font-size: 16px;
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