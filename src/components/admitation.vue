<template>
  <div class="admitation">
    <!-- 顶部的navBar -->
    <van-nav-bar
      title="管理员列表"
      left-text="返回"
      :fixed="true"
      :Zindex="3"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <div class="padd46"></div>
    <!-- 搜索 -->
    <van-search @change="onChange" placeholder="请输入搜索关键词" v-model="searchValue" />
    <!-- 管理员信息  搜索有内容-->
    <div v-if="isShow===false">
      <van-row class="list-box" v-for="(item,index) in admiList" :key="index">
        <van-col span="8">
          <van-col class="big">
            <van-image width="48" height="48" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-col class="namePwd">
              <p class="userName">{{item.mname}}</p>
              <p class="pwd">{{item.account}}</p>
            </van-col>
          </van-col>
        </van-col>
        <van-col span="8" class="list-time textAlign">{{item.registTime}}</van-col>
        <van-col span="8" class="textAlign" @click="delBtn(item.mid,index)">
          <van-button type="default">删除</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 没有更多内容了 -->
    <div v-if="noContent===true">
      <van-row class="noContent">没有更多内容了</van-row>
    </div>
    <!-- 搜索没有内容 -->
    <div v-else>
      <van-row class="noContent">搜索内容为空</van-row>
    </div>
  </div>
</template>
<script>
import { apiLink, post, get } from "../api/api.js";
export default {
  data() {
    return {
      searchValue: "",
      data: [1, 2, 3, 4],
      admiList: [],
      isShow: false,
      noContent: false
    };
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    onClickRight: function() {
      this.$router.push("/addAdmitation");
    },
    getList() {
      get(apiLink.findAdmi).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          this.admiList = res.data.managers;
          this.noContent = true;
        } else if (res.meta.code == 1) {
          this.$toast("请求失败");
        }
      });
    },
    // 删除数据
    delBtn(id, index) {
      console.log(id);
      console.log(index);
      get(apiLink.deleteAdmi, {
        id
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          this.admiList.splice(index, 1);
        }
      });
    },

    // 搜索内容
    onChange(e) {
      console.log(e);
      let searchV = e.target.value;
      if (searchV == "") {
        // this.$toast('输入内容为空')
        this.isShow = false;
        this.getList();
        return;
      }
      get(apiLink.searchAdmi, {
        search: this.searchValue
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.managers === null) {
            this.isShow = true;
          } else {
            this.admiList = res.data.managers;
            this.isShow = false;
          }
        }
      });
    }
  },
  created: function() {
    this.getList();
  }
};
</script>
<style>
.list-box {
  height: 70px;
  /* display: flex;
    justify-content: center;
    align-items: center; */
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
  overflow: hidden;
  width: 66px;
}
.pwd {
  font-size: 12px;
  color: #999999;
}
.list-time {
  font-size: 13px;
  color: #999;
  text-align: center;
}
.van-button--default {
  background: #58a3f7;
  width: 70px;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.textAlign {
  text-align: center;
  margin-top: 10px;
}
.van-nav-bar .van-icon {
  font-size: 16px;
  font-weight: bolder;
}
/* 搜索内容为空 */
.noContent {
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  padding-bottom: 40px;
}
</style>
