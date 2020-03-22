<template>
    <div class="myself">
        <!-- 顶部导航栏 -->
    <van-row class="yhq_header">
      <van-row>
        <van-col span="8" class="homePage">首页</van-col>
        <van-col span="8"></van-col>
        <van-col span="8" class="message-box">
          <van-icon class="message" name="chat-o" dot />
        </van-col>
      </van-row>
    </van-row>
    <!-- 底部布局 -->
    <van-row class="yhq_haeder_con">
      <van-row class="yhq_header_back">
        <van-col span="24"></van-col>
      </van-row>
      <!-- 个人信息介绍 -->
      <van-row span="24" class="yhq_infomation">
        <van-col span="24" class="yhq_info_box">
          <van-image
            class="userAvatar"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <van-row class="userName"></van-row>
          <van-row class="userPhone"></van-row>
          <van-icon @click="settingPage" class="setting" name="setting-o" />
        </van-col>
      </van-row>
      <!-- 订单、商品、账号 -->
      <van-grid :column-num="3" icon-size="20">
        <van-grid-item icon="home-o" text="订单" @click="goOrder" dot />
        <van-grid-item icon="search" text="商品" @click="goGoods"/>
        <van-grid-item icon="search" @click="goAccount" text="账号" />
      </van-grid>
      <!-- 轮播图、优惠券、管理员 -->
      <van-cell
        v-for="(item, index) in JumpList"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :to="item.url"
        class="cell"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
          slot="right-icon"
          :name="item.name"
          style="line-height: inherit;"
        />
      </van-cell>
    </van-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      JumpList: [
        {
          icon: "star",
          title: "轮播图",
          name: "arrow",
          url: "rotation"
        },
        {
          icon: "star",
          title: "优惠券",
          name: "arrow",
          url: "discount"
        },
        {
          icon: "star",
          title: "管理员",
          name: "arrow",
          url: "admitation"
        },
        {
          icon: "star",
          title: "用户信息",
          name: "arrow",
          url: "userInfomation"
        }
      ],
      
    };
  },
  props:{
  	userInfo:Object
  },
  methods: {
        settingPage(){
          this.$router.push("/setting");
        },
        // 跳转到账户
        goAccount(){
          this.$router.push("/account");
        },
        // 跳转到商品
        goGoods(){
          this.$router.push("/goods");
        },
        // 跳转到订单
        goOrder(){
          this.$router.push("/order");
        }
      }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
/* 顶部导航栏的样式 */
.yhq_haeder_con {
  width: 100%;
}
.yhq_header {
  padding: 14px 20px 10px 20px;
}
.homePage {
  font-size: 20px;
  font-weight: bold;
}
.message-box {
  text-align: right;
}
.message {
  width: 20px;
  height: 20px;
}

/* 底部的 */
.yhq_header_back {
  top: 52px;
  width: 100%;
  height: 208px;
  background: #58a3f7;
  position: absolute;
  z-index: 0;
}
/* 个人信息 */
.yhq_infomation {
  width: 358px;
  margin: 0 auto;
}
.van-info--dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.yhq_info_box {
  margin-top: 98px;
  width: 358px;
  background: #fff;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 6px;
  border-radius: 8px 8px 0px 0px;
}
.userAvatar {
  margin-top: -41px;
  width: 82px;
  height: 82px;
  border-radius: 50%;
}
.userName {
  margin-top: 6px;
  color: #bfbfbf;
  font-size: 14px;
}
.userPhone {
  margin-top: 10px;
  color: #bfbfbf;
  font-size: 14px;
}

.setting {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 24px;
  right: 24px;
}

/* 订单 */
.van-grid-item__text {
  font-size: 14px;
  color: #666;
}
.van-grid-item__icon + .van-grid-item__text {
  margin-top: 10px;
}
.van-cell__left-icon,
.van-cell__right-icon {
  width: 25px;
  height: 25px;
}
.cell {
  border:none;
  border-bottom: 1px solid #eee;
  padding: 12px 32px;
}
</style>