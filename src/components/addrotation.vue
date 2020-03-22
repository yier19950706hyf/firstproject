<template>
  <div class="addmodify">
    <!-- NavBar导航栏 -->
    <van-nav-bar title="添加轮播图" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 底部布局 -->
    <van-row class="modify_box">
      <!-- 选择跳转类型 -->
      <!-- 选择类型 -->
      <van-field
        v-model="type[0]+type[1]"
        placeholder="选择跳转类型"
        @focus="selectType"
        right-icon="arrow"
        class="nummber_box padr"
      />
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="20"
        placeholder="标题信息"
        show-word-limit
      />
    </van-row>
    <van-row class="upLoad">
      <van-row class="title">上传图片（最多一张）</van-row>
      <van-uploader :after-read="afterRead" deletable>
        <img
          v-if="hasData==true"
          style="width:334px;height:178px"
          :src="imageUrl"
          alt
          ref="goodImg"
        />
      </van-uploader>
    </van-row>
    <!-- 跳转类型类型选择 -->
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        title="选择类型"
        :columns="columns"
        @change="onChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-button class="submit" type="primary" block @click="addBtn">确定添加</van-button>
  </div>
</template>
<script>
import { apiLink, post, get } from "../api/api.js";
const citys = {
  不跳转: [],
  商品: []
};

export default {
  data() {
    return {
      img:require("../assets/img/img.png"),
      show: false,
      hasData: false,
      type: ["选择跳转类型", ""],
      message: "",
      imageUrl: "",
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys["不跳转"],
          className: "column2",
          defaultIndex: 2
        }
      ]
    };
  },
  methods: {
    getGoodList(){
      get(apiLink.findSimple).then((res)=>{
        console.log(res)
        if(res.meta.code==200){
          this.goods=res.data.goods
          // citys.商品.push(res.data.goods)
        }
      })
    },
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.hasData = true;
      if (this.hasData == true) {
        // this.$refs.goodImg.src = file.content;
        this.imageUrl = file.content;
      }
    },
    selectType() {
      this.show = true;
    },
    // 显示跳转类型
    onChange(picker, values) {
      console.log(values)
      picker.setColumnValues(1, citys[values[0]]);
    },
    onConfirm(value, index) {
      console.log(value);type[1]
      this.show = false;
      this.type = value;
    },
    onCancel() {
      this.show = false;
    },
    // 确定添加
    addBtn() {
      console.log(this.type[0])
      console.log(this.type[1])
      console.log(this.message)
      console.log(this.imageUrl)
      if (this.type[1]==""||this.message == "" || this.imageUrl == "") {
        this.$toast("输入信息不完整");
      }else{
        post(apiLink.addRotation,{
          title:this.message,
          url:this.imageUrl,
          jumpType:this.type[1]
        }).then((res)=>{
          console.log(res)
        })
      }
    }
  },
  created:function(){
    this.getGoodList()
  }
};
</script>
<style>
.modify_box {
  width: 335px;
  margin: 10px auto 28px;
}
.van-cell__value {
  border: 1px solid #000;
  padding: 8px;
}
.van-cell {
  padding: 0;
}
.title {
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
}
.van-uploader__upload {
  height: 179px;
  width: 335px;
  border: 1px solid #000;
}
.upLoad {
  width: 335px;
  margin: 0 auto;
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
.padr {
  margin-bottom: 10px;
}
</style>
