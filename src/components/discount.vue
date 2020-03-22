<template>
  <div class="discount">
    <!-- 顶部的navBar -->
    <van-nav-bar
      title="优惠券列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <!-- 底部内容 -->
    <van-row class="count_box" span="24">
      <van-row class="discount_box">
        <van-row class="discount_name">
            <van-col span="12">情人节优惠券</van-col>
            <van-col span="12" class="discount_price texlight"> ￥<span class="price">10</span> </van-col>
        </van-row>
        
        <van-button type="default" class="count_money">满100-10元</van-button>
        <van-row class="user_time">使用时间：2020-01-06到2020-01-06</van-row>
      </van-row>
      <!-- 底部按钮 -->
      <van-row class="editdel_box">
          <van-col span="12">
              <van-button class="co blue" type="default">编辑</van-button>
          </van-col>
          <van-col span="12" class="texlight">
              <van-button class="co red" type="default">删除</van-button>
          </van-col>
        
      </van-row>
    </van-row>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    onClickRight: function() {
      this.$router.push("/addAdmitation");
    }
  }
};
</script>
<style>
body{
    background: #fff;
}
.count_box{
    width: 338px;
    margin: 10px auto;
    border-bottom: 1px solid #ccc;
    background: #eee;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    margin-bottom: 20px;
    /* box-shadow:1px 1px 6px #333; */
}
.discount_box {
    border-bottom: 1px solid #444;
    padding-bottom: 10px;

}
.discount_name{
    font-size: 18px;
    font-weight: bold;
    color: #444;
}
.discount_price{
    font-size: 16px;font-weight: bold;
    color: #ff0000;
}
.price{
    font-size: 28px;

}
.count_money{
    color: #ff0000;
    font-size: 20px;
    /* background: #0079fe; */
    /* color: #; */
    border-radius: 50px;
    /* height: 20px; */
    padding: 0;
}
.van-button{
    height: 10px;
    line-height: 0;
}
.user_time{
    margin-top: 14px;
    font-size: 14px;
    text-align: right;
}
.editdel_box{
    /* width:335px; */
    margin: 0 auto;
    display: flex;
    padding-top: 10px;
}
.texlight{
    text-align: right;
}
.co{
    
    width: 70px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
}
.blue{
    background: #0079fe;
}
.red{
    background: #ff0000;
}
</style>
