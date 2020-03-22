<template>
  <div class="addAdmitation">
    <!-- navBar -->
    <!-- NavBar导航栏 -->
    <van-nav-bar  title="添加管理员" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 底部内容 -->
    <van-row class="backImage">
      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" :round="true" />
    </van-row>
    <van-cell-group class="marT">
      <van-field
        v-model="number"
        clearable
        left-icon="lock"
        type="tel"
        placeholder="请输入注册手机号码"
        class="add-cell"
        maxlength="11"
        :value="number"
        @blur="blurphone($event,number)"
      />
      <van-field
        v-model="adminiName"
        clearable
        left-icon="lock"
        placeholder="请输入管理员真实姓名"
        class="add-cell"
      />
      <van-field
        v-model="pwd"
        clearable
        type="password"
        left-icon="lock"
        placeholder="请设置6-20位登录密码"
        class="add-cell"
        maxlength="20"
        :value="pwd"
        @blur="pwdBtn($event,pwd)"
      />
      <van-field
        v-model="confirmpwd"
        clearable
        type="password"
        left-icon="lock"
        placeholder="请再次确认登录密码"
        class="add-cell"
        maxlength="20"
        :value="confirmpwd"
        @blur="confirmpwdBtn($event,confirmpwd)"
      />
    </van-cell-group>
    <van-button class="submit" type="primary" block @click="addAdmini">确定添加</van-button>
  </div>
</template>
<script>
import { apiLink, post, get } from "../api/api.js";
export default {
  data() {
    return {
      number: "", //手机号码
      adminiName: "", //管理员真实名称
      pwd: "", //密码
      confirmpwd: "" //确认密码
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },

    blurphone(e, number) {

    },
    pwdBtn(e, pwd) {
    
    },
    confirmpwdBtn(e, confirmpwd) {
     
    },
    addAdmini() {
      if(this.number==''&&this.adminiName==''&&this.pwd==''||this.confirmpwd==''){
        this.$toast('请输入完整的信息');
        return
      }
      if (this.number.length < 11) {
        this.$toast("手机号码格式错误");
        return;
      }
      if (this.pwd.length < 6||this.confirmpwd.length<6) {
        this.$toast("密码小于6位");
        return;
      }
      if(this.pwd!=this.confirmpwd){
        this.$toast('确认密码和密码不一致');
        return;
      }
      post(apiLink.addAdmi,{
        account:this.number,
        name:this.adminiName,
        passwd:this.pwd
      }).then((res)=>{
        console.log(res)
        if(res.meta.code==200){
          this.$toast('添加管理员成功')
          this.$router.go(-1)
        }else if(res.meta.code==1){
          this.$toast('添加管理员失败')
        }
      })
    }
  }
};
</script>
<style>
.backImage {
  text-align: center;
  margin: 28px auto;
}
.add-cell {
  border: 1px solid #e4e4e4;
  padding: 12px 20px;
  margin-bottom: 10px;
  font-weight: 400;
  padding: 10px 0px;
  width: 343px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.van-icon van-icon-lock {
  width: 24px;
  height: 24px;
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
.van-field__control {
  padding-left: 10px;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  padding-left: 6px;
}
</style>