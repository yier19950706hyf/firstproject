<template>
  <div class="goods">
    <van-nav-bar
      :fixed="true"
      :Zindex="3"
      safe-area-inset-top="true"
      title="商品列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="padd46"></div>
    <!--//导航栏-->
    <van-tabs v-model="active" @click="getBtn" custom-class="poList">
      <van-tab title="出售中(0)">
        <!-- 顶部的第二个选项卡 -->
        <div class="sort-box">
          <div class="sort-item" @click="sameBtn(0)">
            <p :class="index==0?'acti':''">添加时间</p>
            <img
              v-if="index==0&&timeAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==0&&timeAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="sameBtn(1)">
            <p :class="index==1?'acti':''">总销量</p>
            <img
              v-if="index==1&&salesAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==1&&salesAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="sameBtn(2)">
            <p :class="index==2?'acti':''">库存</p>
            <img
              v-if="index==2&&stockAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==2&&stockAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="sameBtn(3)">
            <p :class="index==3?'acti':''">排序</p>
            <img
              v-if="index==3&&sortAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==3&&sortAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
        </div>
        <div v-if="index==0">
          <div>
            <List :Good="Good"></List>
          </div>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==1">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==2">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==3">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <!-- 顶部的第二个选项卡 -->
      </van-tab>

      <van-tab title="已下架(0)">
        <!-- 顶部的第二个选项卡 -->
        <div class="sort-box">
          <div class="sort-item" @click="twoBtn(0)">
            <p :class="index==0?'acti':''">添加时间</p>
            <img
              v-if="index==0&&timeAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==0&&timeAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="twoBtn(1)">
            <p :class="index==1?'acti':''">总销量</p>
            <img
              v-if="index==1&&salesAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==1&&salesAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="twoBtn(2)">
            <p :class="index==2?'acti':''">库存</p>
            <img
              v-if="index==2&&stockAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==2&&stockAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
          <div class="sort-item" @click="twoBtn(3)">
            <p :class="index==3?'acti':''">排序</p>
            <img
              v-if="index==3&&sortAsc===false"
              width="16"
              height="16"
              src="../assets/img/top.png"
              alt
            />
            <img
              v-if="index==3&&sortAsc===true"
              width="16"
              height="16"
              src="../assets/img/bottom.png"
              alt
            />
          </div>
        </div>
        <div v-if="index==0">
          <div>
            <List :Good="Good"></List>
          </div>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==1">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==2">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <div v-if="index==3">
          <List :Good="Good"></List>
          <Data :noContent="noContent" :none="none"></Data>
        </div>
        <!-- 顶部的第二个选项卡 -->
      </van-tab>
    </van-tabs>
    <!--//主题-->
    <!--//底部-->
    <div class="goods-bottom">
      <van-col span="24">
        <van-col span="8">
          <div @click="addGood">添加商品</div>
        </van-col>
        <van-col span="8" style="border-left: 1px solid #999999;" @click="pigoods">批量管理</van-col>
        <van-col span="8" style="border-left: 1px solid #999999;" @click="type">分类管理</van-col>
      </van-col>
    </div>
  </div>
</template>
<script>
import { post, get, apiLink } from "../api/api";
import Data from "../base/data";
import List from "../base/list";
export default {
  data() {
    return {
      active: 0,
      select: 0,
      state: true,
      noContent: false,
      none: false,
      Good: [],
      timeAsc: false,
      salesAsc: false,
      stockAsc: false,
      sortAsc: false,
      index: 0,
      active1: false,
      totalsales:0,
      totalxiajia:0
    };
  },
  components: {
    Data,
    List
  },
  methods: {
    sameBtn(index) {
      console.log(index);
      console.log(this.salesAsc);
      this.index = index;
      // 添加时间的
      if (this.index == 0 && this.timeAsc === false) {
        this.timeAsc = true;
        this.getTime();
        return;
      } else {
        this.timeAsc = false;
        this.getTime();
        return;
      }
      // 总销量
      if (this.index == 1 && this.salesAsc === false) {
        this.salesAsc = true;
        this.getsales();
 
      } else {
        this.salesAsc = false;
        this.getsales();
        return;
      }

      // 库存
      if (this.index == 2 && this.stockAsc === false) {
        this.stockAsc = true;
        this.getStock();
        return;
      } else {
        this.stockAsc = false;
        this.getStock();
        return;
      }

      // 排序
      if (this.index == 3 && this.sortAsc === false) {
        this.sortAsc = true;
        this.getsortAsc();
        return;
      } else {
        this.sortAsc = false;
        this.getsortAsc();
        return;
      }
    },

    // 下架
    twoBtn(index) {
      console.log(index);
      console.log(this.salesAsc);
      this.index = index;
      // 添加时间的
      if (this.index == 0 && this.timeAsc === false) {
        this.timeAsc = true;
        this.getTime();
      } else {
        this.timeAsc = false;
        this.getTime();
      }
      // 总销量
      if (this.index == 1 && this.salesAsc === false) {
        this.salesAsc = true;
        this.getsales();
      } else {
        this.salesAsc = false;
        this.getsales();
      }

      // 库存
      if (this.index == 2 && this.stockAsc === false) {
        this.stockAsc = true;
        this.getStock();
      } else {
        this.stockAsc = false;
        this.getStock();
      }

      // 排序
      if (this.index == 3 && this.sortAsc === false) {
        this.sortAsc = true;
        this.getsortAsc();
      } else {
        this.sortAsc = false;
        this.getsortAsc();
      }
    },

    // 获取时间
    getTime() {
      get(apiLink.findGood, {
        state: this.state,
        timeAsc: this.timeAsc
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.goods.length == 0) {
            this.noContent = false;
            this.none = true;
            return;
          }
          this.Good = res.data.goods;
          this.noContent = true;
          this.none = false;
        } else {
        }
      });
    },
    // 获取中销量
    getsales() {
      get(apiLink.findGood, {
        state: this.state,
        salesAsc: this.salesAsc
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.goods.length == 0) {
            this.noContent = false;
            this.none = true;
            return;
          }
          this.Good = res.data.goods;
          this.noContent = true;
          this.none = false;
        } else {
        }
      });
    },
    // 库存
    getStock() {
      get(apiLink.findGood, {
        state: this.state,
        stockAsc: this.stockAsc
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.goods.length == 0) {
            this.noContent = false;
            this.none = true;
            return;
          }
          this.Good = res.data.goods;
          this.noContent = true;
          this.none = false;
        } else {
        }
      });
    },
    // 排序
    getsortAsc() {
      get(apiLink.findGood, {
        state: this.state,
        sortAsc: this.sortAsc
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.goods.length == 0) {
            this.noContent = false;
            this.none = true;
            return;
          }
          this.Good = res.data.goods;
          this.noContent = true;
          this.none = false;
        } else {
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    //跳转到添加商品
    addGood() {
      this.$router.push("/addGood");
    },
    //批量
    pigoods() {
      this.$router.push({ name: "pigoods" });
    },
    //分类type
    type() {
      //				this.$router.replace({name:'type'})
      this.$router.push({ name: "type" });
    },
    // 查询商品
    getBtn(e) {
      console.log(e);
      if ((e = 0)) {
        this.state = true;
      }
      if ((e = 1)) {
        this.state = false;
        this.index=0;
      }
      this.getGood();
    },

    // 商品
    getGood() {
      get(apiLink.findGood, {
        state: this.state,
        timeAsc: this.timeAsc
      }).then(res => {
        console.log(res);
        if (res.meta.code == 200) {
          if (res.data.goods.length == 0) {
            this.noContent = false;
            this.none = true;
            return;
          }
          if(this.state===true){
            this.totalsales=res.data.length
          }
          if(this.state===false){
            this.totalxiajia=res.data.length
          }
          this.Good = res.data.goods;
          this.noContent = true;
          this.none = false;
        } else {
        }
      });
    }
  },
  created: function() {
    this.getGood();
  }
};
</script>
<style>
#app {
}
.sort-box {
  display: flex;
}
.sort-item {
  flex: 1;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.acti {
  color: blue;
  font-weight: bold;
}
.nav-con {
  background: white;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}

.goods-main {
  padding: 10px 20px;
  background: white;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 20px;
}

.goods-main .goods-main-bottom .van-col {
  border: 1px solid #f5f5f5;
}

.goods-main .goods-main-bottom img {
  height: 110px;
  width: 100px;
}
.goods-bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background: white;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
}
.van-tab--active {
  font-weight: bold;
}
.van-tabs__line {
  background: #58a3f7;
}
.poList {
  margin-top: 50px;
}
.select {
  width: 20px;
  height: 10px;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
}
</style>