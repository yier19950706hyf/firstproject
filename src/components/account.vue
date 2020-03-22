<template>
  <div class="account">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="账户"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 选项卡 -->
    <van-tabs v-model="active" sticky="true">
      <van-tab title="今天">
          <!-- 使用组件写 -->
          <accountList></accountList>
      </van-tab>
      <van-tab title="昨天">
          <accountList></accountList>
      </van-tab>
      <van-tab title="近7天">
          <accountList></accountList>
      </van-tab>
      <van-tab title="近30天">
          <accountList></accountList>
      </van-tab>
      <van-tab title="自定义">
          <accountList></accountList>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import accountList from '../base/accountlist.vue'
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  components:{
      accountList
  }
};
</script>
<style>
.tab {
  flex: 1;
}
.van-tabs__line{
    background: #0079fe;
}
</style>
