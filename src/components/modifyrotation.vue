<template>
	<div class="modify">
		<!-- NavBar导航栏 -->
		<van-nav-bar title="修改轮播图" left-text="返回" left-arrow @click-left="onClickLeft" />
		<!-- 底部布局 -->
		<van-row class="modify_box">
			<!-- 选择跳转类型 -->
			<!-- 选择类型 -->
			<van-field v-model="type[0]+type[1]" placeholder="选择跳转类型" @focus="selectType" right-icon="arrow" class="nummber_box padr" />
			<van-field v-model="message" rows="4" autosize type="textarea" maxlength="20" placeholder="标题信息" show-word-limit />
		</van-row>
		<van-row class="upLoad">
			<van-row class="title">上传图片（最多一张）</van-row>
			<van-uploader :after-read="afterRead" />
		</van-row>
		<!-- 跳转类型类型选择 -->
		<van-popup v-model="show" position="bottom">
			<van-picker show-toolbar title="选择类型" :columns="columns" @change="onChange" @cancel="onCancel" @confirm="onConfirm" />
		</van-popup>
		<van-button class="submit" type="primary" block>确定修改</van-button>
	</div>
</template>
<script>
	const citys = {
		浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
		福建: ["福州", "厦门", "莆田", "三明", "泉州"]
	};

	export default {
		data() {
			return {
				show: false,
				type: ["选择跳转类型", ""],
				message: "",
				columns: [{
						values: Object.keys(citys),
						className: "column1"
					},
					{
						values: citys["浙江"],
						className: "column2",
						defaultIndex: 2
					}
				]
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1); //返回上一层
			},
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
			},
			selectType() {
				this.show = true
			},
			// 显示跳转类型
			onChange(picker, values) {
				picker.setColumnValues(1, citys[values[0]]);
			},
			onConfirm(value, index) {
				console.log(value)
				this.show = false;
				this.type = value
			},
			onCancel() {
				this.show = false
			}
		}
	};
</script>
<style>
	.modify_box {
		width: 335px;
		margin: 10px auto 28px;
	}
	
	.van-cell__value {
		border: 1px solid #000;
		padding: 8px;
	}
	
	.van-cell {
		padding: 0;
	}
	
	.title {
		font-size: 14px;
		color: #444;
		margin-bottom: 10px;
	}
	
	.van-uploader__upload {
		height: 179px;
		width: 335px;
		border: 1px solid #000;
	}
	
	.upLoad {
		width: 335px;
		margin: 0 auto;
	}
	
	.submit {
		width: 336px;
		height: 50px;
		background: #0079fe;
		margin: 20px auto;
		font-size: 16px;
		border: #fff;
		border-radius: 8px;
	}
	
	.padr {
		margin-bottom: 10px;
	}
</style>