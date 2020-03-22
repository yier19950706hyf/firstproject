<template>
  <div class="rotation">
    <!-- 顶部的navBar -->
    <van-nav-bar
      title="轮播图列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <!-- 底部的内容 -->
    <div v-for="(item,index) in viewpagerVOS" :key="index"> 
      <van-row class="rotation-box">
      <van-image class="game-img" src="item.url" />
      <van-row>
        <van-row class="desc">{{item.title}}</van-row>
        <van-col span="8" class="pa20">
          <van-button @click="goModify" type="default">编辑</van-button>
        </van-col>
        <van-col span="8"></van-col>
        <van-col span="8">
          <van-button class="col" type="default" @click="delBtn(index,item.vid,item.title)">删除</van-button>
        </van-col>
      </van-row>
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
      viewpagerVOS:[],
      noContent:false,
      none:false,
    };
  },
  methods: {
    // 删除
    delBtn(index,id,title){
      console.log(index,id,title)
      get(apiLink.deleteRotation,{
        id:id,
        title:title
      }).then((res)=>{
        console.log(res)
        if(res.meta.code==200){
          this.viewpagerVOS.splice(index,1);
        }else{
          this.$toast('删除失败')
        }
      })
    },
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    onClickRight: function() {
      this.$router.push("/addrotation");
    },
    // 跳转到修改轮播图
    goModify:function(){
        this.$router.push("/modifyrotation");
    },
    // 获取轮播图
    getRotation(){
      get(apiLink.findRotation).then((res)=>{
        console.log(res)
        if(res.meta.code==200){
          if(res.data.viewpagerVOS==null){
            this.none=true;
            this.noContent=false;
            return;
          }
          this.viewpagerVOS=res.data.viewpagerVOS;
          this.noContent=true;
          this.none=false;
        }
      })
    }
  },
  components:{
    Data
  },
  created:function(){
    this.getRotation()
  }
};
</script>
<style>
.van-nav-bar .van-icon {
  font-size: 16px;
  font-weight: bolder;
}
.rotation-box{
    width: 335px;
    margin: 14px auto;
    padding-bottom: 14px;
    border: 1px solid #f5f5f5;
}
.game-img{
    height: 179px;
}
.pa20{
    padding-left: 20px;
}
.desc{
    font-size: 16px;
    font-weight: bold;
    color: #444;
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
}
.van-button--default{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #58a3f7;
    color: #fff;
}
.col{
    background: #ff0000;
    margin-left: 10px;
}
</style>
