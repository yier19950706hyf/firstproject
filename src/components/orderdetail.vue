<template>
  <div class="orderdetail">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 底部内容 -->
    <van-row class="order_box" @click="orderDetail">
      <van-row>
        <van-col span="8">
          <van-image
          height="100"
           src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col span="16">
          <van-cell-group>
            <van-cell
              class="noP"
              title="99朵玫瑰"
              value-class="hlight"
              value="实付￥99"
            />
            <van-cell class="noP" title="规格红色" />
          </van-cell-group>
        </van-col>
      </van-row>
      <div class="van-ellipsis">配送时间 2020-01-07 09:00-11:00</div>
      <div class="van-ellipsis">联系人：黄意芳</div>
      <div class="van-ellipsis">手机号码：15622736776</div>
      <div class="van-ellipsis">地址：广东省广州市的冯绍峰的</div>
      <div class="van-multi-ellipsis--l3">备注 ：打算打打范德萨范德萨是水水水水是电风扇</div>
       <div class="van-ellipsis">订单号：123323232233222</div>
        <div class="van-ellipsis">微信交易号：22323232323232</div>
        <div class="van-ellipsis">付款时间：22323232323232</div>
        <div class="van-ellipsis">发货时间：22323232323232</div>
        <div class="van-ellipsis">完成时间：22323232323232</div>
        <div class="van-ellipsis">应付： ￥22323232323232</div>
        <div class="van-ellipsis color">实付： ￥10</div>
        <div class="van-ellipsis color">优惠： ￥10</div>
        <div class="van-multi-ellipsis--l3">拒单理由 ：打算打打范德萨范德萨是水水水水是电风扇</div>
    </van-row>
    <van-row class="box">
        <van-button class="butt blue" type="default">确定发货</van-button>
        <van-button class="butt red" type="default">拒单</van-button>
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
  /* box-shadow: 1px 1px 5px #333; */
}
.van-ellipsis {
  font-size: 14px;
  margin-top: 8px;
}
.van-multi-ellipsis--l3{
    font-size: 14px;
    margin-top: 8px;
}
.box{
    width: 335px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.butt{
    width: 158px;
    height: 45px;
    color: #fff;
    border-radius: 8px;
}
.color{
    color: #ff0000;
}
.blue{
    background: #58a3f7;
}
.red{
    background: rgba(195, 10, 28, 1);
}
</style>

