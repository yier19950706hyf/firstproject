<template>
  <div class="setting">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 切换账号之类的 -->
    <van-cell title="修改密码" @click="modify" is-link/>
    <van-cell title="注销" />
    <!-- <van-col span="24" class="mar"  @click="logoutBtn">
        切换账号
    </van-col> -->
    <van-col span="24" class="mar" @click="logoutBtn">
        退出登录
    </van-col>
     
    
  </div>
</template>
<script>
import {apiLink,post,get} from '../api/api.js'
export default {
  data() {
    return {};
  },
  methods:{
    //   返回按钮
     onClickLeft() {
      this.$router.go(-1);//返回上一层
    },
    modify(){
      this.$router.push('/modifypwd')
    },
    logoutBtn(){
      post(apiLink.logout).then((res)=>{
        console.log(res)
        if(res.meta.code==200){
          var storage=window.localStorage;
          storage.clear()
          this.$router.push('login')
        }else if(res.meta.code==1001){
          this.$toast('退出失败');
        }
      })
    }
  }
};
</script>
<style>
#app{
  height: 100%;
}
body{
  background: #ededed;
}
.van-nav-bar{
  border-bottom: 1px solid #e4e4e4;
}
.van-nav-bar .van-icon{
  color: #171717;
}
.van-nav-bar__text{
  color: #171717;
}
/*.van-cell{
  font-weight:400;
  padding: 10px 0px;
  width: 343px;
  margin:0 auto;
  border-bottom: 1px solid #e4e4e4;
}*/
.van-nav-bar__title{
  color: #171717;
  font-weight: 600;
}
.mar{
  margin-top: 10px;
  background: #fff;
  border: #fff;
  color:#323233;
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;

}
</style>
