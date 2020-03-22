<template>
  <div class="accountlist">
    <van-row class="accountList">
      <van-col span="12" class="acclist mar10">
          <van-row class="ot">
              <van-col class="one">2789/</van-col>
              <van-col class="two">290014</van-col>
          </van-row>
          <van-row class="dt">
              <van-col class="do"></van-col>
              <van-col class="total">总用户量</van-col>
          </van-row>
      </van-col>
      <van-col span="12" class="acclist">
          <van-row class="ot">
              <van-col class="one">2789/</van-col>
              <van-col class="two">290014</van-col>
          </van-row>
          <van-row class="dt">
              <van-col class="do"></van-col>
              <van-col class="total">总收入</van-col>
          </van-row>
      </van-col>
    </van-row>
    <van-row class="accountList">
      <van-col span="12" class="acclist mar10">
          <van-row class="ot">
              <van-col class="one">2789/</van-col>
              <van-col class="two">290014</van-col>
          </van-row>
          <van-row class="dt">
              <van-col class="do"></van-col>
              <van-col class="total">总订单数</van-col>
          </van-row>
      </van-col>
      <van-col span="12" class="acclist">
          <van-row class="ot">
              <van-col class="one">2789/</van-col>
              <van-col class="two">290014</van-col>
          </van-row>
          <van-row class="dt">
              <van-col class="do"></van-col>
              <van-col class="total">总商品数量</van-col>
          </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.accountlist{
    padding: 10px;
    box-sizing: border-box;
}
.accountList{
    /* margin: 10px; */
    border: rgba(233, 233, 233, 1);
    margin-bottom: 16px;

}
.acclist{
    width: 170px;
    border:1px solid rgba(233, 233, 233, 1);
    height: 90px;
    /* margin-right:2px; */
    padding: 16px;
}
.mar10{
    margin-right: 10px;
}
.ot{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
}
.one{
    font-size: 24px;
    color: #666666;
}
.two{
    color: #666666;
    font-size: 14px;
}
.dt{
   display: flex;
   justify-content: flex-start;
   align-items: center; 
}
.do{
    background: #58A3F7;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 4px;
}
.total{
    color: rgba(0, 0, 0, 0.427450980392157);
    font-size: 14px;
}
</style>