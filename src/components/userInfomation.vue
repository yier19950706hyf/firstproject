<template>
  <div class="userInfomation">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="用户列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 底部内容 -->
    <div v-for="(item,index) in userInfos" :key="index">
      <van-row class="list-box">
      <van-col span="8">
        <van-col class="big">
          <van-image
            width="48"
            height="48"
            round
            src="item.icon"
          />
          <van-col class="namePwd">
            <p class="userName">{{item.wechatName}}</p>
            <p class="pwd">15622736776</p>
          </van-col>
        </van-col>
      </van-col>
      <van-col span="8" class="list-time textAlign"></van-col>
      <van-col span="8" class="textAlign"
        ><van-button type="default">订单详情</van-button></van-col
      >
    </van-row>
    </div>
    <Data :noContent="noContent" :none="none"></Data>
  </div>
</template>
<script>
import { apiLink, post, get } from "../api/api.js";
import Data from '../base/data'
export default {
  data() {
    return {
      noContent:false,
      none:false,
      userInfos:[]
    };
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    getuserList(){
      get(apiLink.findUserInfo).then(res=>{
        console.log(res)
        if(res.meta.code==200){
          if(res.data.userInfos===null){
            this.none=true;
            this.noContent=false;
            return;
          }else{
            this.userInfos=res.data.userInfos;
            this.noContent=true;
            this.none=false
          }
        }
      })
    }
  },
  components:{
    Data
  },
  created: function() {
    console.log()
    this.getuserList();
  }
};
</script>
<style>
#app{
  height: 100%;
}
.list-box {
  height: 70px;
  display: flex;
    justify-content: center;
    align-items: center;
}
.big {
  height: 70px;
  display: flex;
  padding-left: 18px;
  justify-content: center;
  align-items: center;
}
.namePwd {
  margin-left: 10px;
}
.userName {
  font-size: 14px;
  margin-bottom: 10px;
}
.pwd {
  font-size: 12px;
  color: #999999;
}

.van-button--default {
  background: rgba(0, 121, 254, 1);
  width: 70px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 12px;
}
.textAlign {
  text-align: center;
  margin-top: 10px;
}
.van-button--normal{
    padding: 0;
}
</style>
