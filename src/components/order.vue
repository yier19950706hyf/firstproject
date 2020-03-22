<template>
	<div class="order">
		<!-- NavBar导航栏 -->
		<van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft" />
		<!-- 底部内容 -->
		<van-row class="accountList">
			<van-col span="12" class="acclist mar10">
				<van-row class="ot">
					<van-col class="one">2789</van-col>
				</van-row>
				<van-row class="dt">
					<van-col class="do"></van-col>
					<van-col class="total">总订单数</van-col>
				</van-row>
			</van-col>
			<van-col span="12" class="acclist">
				<van-row class="ot">
					<van-col class="one">￥2789</van-col>
				</van-row>
				<van-row class="dt">
					<van-col class="do"></van-col>
					<van-col class="total">总消费金额</van-col>
				</van-row>
			</van-col>
		</van-row>
		<!-- 每个订单 -->
		<van-row class="order_box" @click="orderDetail">
			<van-row>
				<van-col span="8">
					<van-image height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</van-col>
				<van-col span="16">
					<van-cell-group>
						<van-cell class="noP" title="99朵玫瑰" value-class="hlight" value="实付￥99" />
						<van-cell class="noP" title="规格红色" />
					</van-cell-group>
					<van-cell class="noP" value="订单号201910101010" />
					<van-cell class="noP" value="下单 2019-01-2 14:22:30" />
				</van-col>
			</van-row>
			<div class="van-ellipsis">配送 2020-01-07 09:00-11:00</div>
			<div class="van-ellipsis">地址：广东省广州市的冯绍峰的</div>
			<div class="van-ellipsis">
				备注 打发打发的的地方大幅度发的地方都大幅度等丰富的非
			</div>
		</van-row>

	</div>
</template>
<script>
	export default {
		data() {
			return {};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			orderDetail() {
				this.$router.push('/orderdetail')
			}
		}
	};
</script>
<style>
	.accountlist {
		padding: 10px;
		box-sizing: border-box;
	}
	
	.accountList {
		/* margin: 10px; */
		border: rgba(233, 233, 233, 1);
		margin-bottom: 16px;
		margin-left: 12px;
	}
	
	.acclist {
		width: 170px;
		border: 1px solid rgba(233, 233, 233, 1);
		height: 90px;
		/* margin-right:2px; */
		padding: 16px;
	}
	
	.mar10 {
		margin-right: 10px;
	}
	
	.ot {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}
	
	.one {
		font-size: 24px;
		color: #666666;
	}
	
	.two {
		color: #666666;
		font-size: 14px;
	}
	
	.dt {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.do {
		background: #58a3f7;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-right: 4px;
	}
	
	.total {
		color: rgba(0, 0, 0, 0.427450980392157);
		font-size: 14px;
	}
	
	.noP {
		padding: 0 10px;
	}
	
	.hlight {
		font-size: 14px;
		color: #ff0000;
		font-weight: bold;
	}
	
	.order_box {
		padding: 10px;
		width: 350px;
		margin: 10px auto;
		box-shadow: 1px 1px 5px #333;
	}
	
	.van-ellipsis {
		font-size: 14px;
		margin-top: 4px;
	}
</style>