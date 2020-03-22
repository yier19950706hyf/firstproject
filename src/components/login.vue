<template>
	<div class="login">
		<Nav></Nav>
		<van-row span="24" class="userImage">
			<van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		</van-row>
		<van-cell-group>
			<van-field class="van-username" v-model="userName" clearable left-icon="smile-o" placeholder="请输入登录账号" />
			<van-field v-model="pwd" type="password" clearable left-icon="music-o" placeholder="请输入密码" />
		</van-cell-group>
		<van-row span="24" class="loginBtn">
			<van-button type="primary" size="large" @click="loginBtn">登录</van-button>
		</van-row>
	</div>
</template>

<script>
	import Nav from './base/nav.vue'
	import {apiLink,post} from '../api/api.js'
	export default {
		data() {
			return {
				userName: '',
				pwd: ''
			}
		},
		methods: {
			loginBtn() {
				if(this.userName == '') {
					this.$toast('账号为空')
					return;
				}
				if(this.pwd==''){
					this.$toast('密码不能为空');
					return;
				}else{
					post(apiLink.login,{
						account:this.userName,
						passwd:this.pwd
					}).then(res=>{
						console.log(res)
						if(res.meta.code==200){
							//本地存储
							let token=res.data.jwt;//token 请求头参数
							let userId=res.data.manager.mid;//管理员id 请求头参数
							localStorage.setItem('token',token);
							localStorage.setItem('userId',userId)
							let userInfo=res.data.manager;
							console.log(userInfo)
							this.$router.push({
								name:'Myself',
								params:{
									userInfo
								}
							})
						}else if(res.meta.code==1002){
							this.$toast('密码错误');
						}
					})
				}
			}
		},
		components: {
			Nav
		}
	}
</script>

<style>
	.userImage {
		width: 100px;
		margin: 40px auto;
	}
	
	.van-username {
		margin-bottom: 10px;
	}
	
	.loginBtn {
		width: 320px;
		margin: 20px auto;
	}
</style>