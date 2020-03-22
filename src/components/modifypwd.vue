<template>
  <div class="modify">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 底部内容 -->
    <van-tabs v-model="active" :border="false" title-style="">
      <!-- 选项卡一的内容 -->
      <van-tab background="#fff" title="1、验证旧密码">
        <van-cell-group class="marT">
            <van-field
              v-model="oldPwd"
              clearable
              left-icon="lock"
              placeholder="请输入旧密码"
              type="password"
              class="one"
            />
            <van-field
              v-model="oldPwdd"
              clearable
              left-icon="lock"
              placeholder="请再次输入旧密码进行验证"
              type="password"
              class="one"
            />
          </van-cell-group>
          <van-button class="submit" type="primary" @click="verifyPwd" block>提交</van-button>
      </van-tab>
      <!-- 选项卡二的内容 -->
      <van-tab background="#fff" title="2、设置新密码">
          <van-cell-group class="marT">
            <van-field
              v-model="newpwd"
              clearable
              left-icon="lock"
              placeholder="请设置6-20位新的登录密码"
              type="password"
              class="one"
            />
            <van-field
              v-model="newpwdd"
              clearable
              left-icon="lock"
              placeholder="请再次输入新的登录密码"
              type="password"
              class="one"
            />
          </van-cell-group>
          <van-button class="submit" type="primary" @click="updatePwd"  block>提交</van-button>
      </van-tab>
      <!-- 点击按钮 -->
      
    </van-tabs>
  </div>
</template>
<script>
import { apiLink, post, get } from "../api/api.js";
export default {
  data() {
    return {
      active:0,
      oldPwd:"",
      oldPwdd:"",
      newpwd:"",
      newpwdd:'',
      validcode:''
    };
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    // 验证旧密码
    verifyPwd:function(){
      if(this.oldPwd==""||this.oldPwdd==""){
        this.$toast('请输入完整的信息');
        return;
      }
      if(this.oldPwd.length<6||this.oldPwdd.length<6){
        this.$toast('密码的长度需要大于6');
        return;
      }
      if(this.oldPwdd.length>20||this.oldPwdd.length>20){
        this.$toast('密码长度不能大于20位')
        return;
      }
      if(this.oldPwd!==this.oldPwdd){
        this.$toast('两次输入密码不一样');
        return;
      }
      post(apiLink.verifyPwd,{
        oldpasswd:this.oldPwd
      }).then((res)=>{
        console.log(1)
        console.log(res)
        if(res.meta.code==200){
          this.$toast('验证码密码成功');
          this.validcode=res.data.validcode;
          this.oldPwd="";
          this.oldPwdd="";
        }else if(res.meta.code==31){
          this.$toast('验证密码失败')
        }
      })
    },
    // 设置旧密码
    updatePwd(){
      if(this.newpwd==""||this.newpwdd==""){
        this.$toast('请输入完整的信息');
        return;
      }
      if(this.newpwd.length<6||this.newpwdd.length<6){
        this.$toast('密码的长度需要大于6');
        return;
      }
      if(this.newpwd.length>20||this.newpwdd.length>20){
        this.$toast('密码长度不能大于20位')
        return;
      }
      if(this.newpwd!==this.newpwdd){
        this.$toast('两次输入密码不一样');
        return;
      }
      post(apiLink.updatePwd,{
        newpasswd:this.newpwd,
        validcode:this.validcode
      }).then((res)=>{
        console.log(res)
        if(res.meta.code==32){
          this.$toast('验证编号过期，请重新验证密码后再修改密码')
        }else if(res.meta.code==200){
          this.$toast('修改密码成功');
          this.newpwd="";
          this.newpwdd="";
        }
      })
    }

  }
};
</script>
<style>
body{
  background: #fff;
}
.van-nav-bar {
  border-bottom: 1px solid #e4e4e4;
}
.van-nav-bar .van-icon {
  color: #56a5fd;
}
.van-nav-bar__text {
  color: #56a5fd;
}
.one{
  font-weight: 400;
  padding: 10px 0px;
  width: 343px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;
}
/* .van-cell {
  font-weight: 400;
  padding: 10px 0px;
  width: 343px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;
} */
.van-nav-bar__title {
  color: #171717;
  font-weight: 600;
}

/* 选项卡 */
.van-tabs__line {
  background: #fff;
}
.van-tab--active {
  color: #2189fd;
  font-size: 16px;
}
.van-cell{
  border:1px solid #e4e4e4;
  padding: 12px 20px;
  margin-bottom: 10px;
}
.van-icon van-icon-lock{
  width: 24px;
  height: 24px;
}
.submit{
  width: 336px;
  height: 50px;
  background: #0079fe;
  margin: 20px auto;
  font-size: 16px;
  border:#fff;
  border-radius: 8px;
}
.marT{
  margin-top: 20px;
}
</style>
