<template>
  <div class="modifycoupon">
    <!-- NavBar导航栏 -->
    <van-nav-bar
      title="修改优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed='true'
      :zIndex="20"
    />
    <!-- 底部内容 -->
    <van-row class="coupon_box">
      <van-row class="base_info">
        基本信息
      </van-row>
      <van-row class="modifycoupon_box">
        <van-field
          v-model="userInfo"
          rows="3"
          autosize
          label="描述"
          type="textarea"
          maxlength="30"
          placeholder="请输入介绍信息"
          show-word-limit
          class="info_pad"
        />
        <!-- 选择类型 -->
        <van-field
          v-model="type"
          label="选择类型"
          placeholder="请选择类型"
          @focus="selectType"
          right-icon="arrow"
          class="nummber_box padr"
        />
        <van-field
          class="nummber_box"
          v-model="number"
          type="number"
          label="发送数量"
          placeholder="发送发放数量 1为无限数量"
        />
        <van-field
          v-model="discount"
          label="折扣"
          right-icon="warning-o"
          placeholder="显示图标"
          class="nummber_box padr"
        />
        <!-- 金额满 -->
        <van-field
          class="nummber_box"
          v-model="money"
          type="number"
          label="金额满"
          placeholder="输入金额满"
        />
        <!-- 减金额 -->
        <van-field
          class="nummber_box"
          v-model="delmoney"
          type="number"
          label="减金额"
          placeholder="输入减金额"
        />
        <!-- 开始时间和结束时间 -->
        <van-cell-group>
          <van-field
            v-model="starttime"
            label="开始时间"
            placeholder="请输入开始时间"
            @focus="start"
            right-icon="arrow"
            class="nummber_box padr"
          />
          <van-field
            v-model="endtime"
            label="结束时间"
            placeholder="请输入结束时间"
            @focus="end"
            right-icon="arrow"
            class="nummber_box padr"
          />
        </van-cell-group>
        <!-- 开始时间控件 -->
        <van-popup v-model="show" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @cancel="cancel"
            :formatter="formatter"
          />
        </van-popup>
        <!-- 结束时间控件 -->
        <van-popup v-model="show1" position="bottom">
          <van-datetime-picker
            v-model="currentDate1"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm1"
            @cancel="cancel1"
            :formatter="formatter"
          />
        </van-popup>
        <!-- 选择类型 -->
        <van-popup v-model="show2" position="bottom">
          <van-picker 
          show-toolbar
          title="优惠券类型"
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
        </van-popup>
        <van-button class="submit" type="primary" block>确定添加</van-button>
      </van-row>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: "",
      number: "",
      discount: "",
      money: "",
      delmoney: "",
      show: false, //开始时间弹窗
      show1: false, //结束时间弹窗
      show2:false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2030, 11, 31),
      currentDate: new Date(), //开始标准时间
      currentDate1: new Date(), //结束标准时间
      starttime: "", //开始时间
      starttime1: "", //开始时间时间戳
      endtime: "", //结束时间
      endtime1: "", //结束时间时间戳
      type:"",
      columns:['满减','折扣']
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    // / 选择开始时间
    start() {
      this.show = true;
    },
    // 选择结束时间
    end() {
      this.show1 = true;
    },
    // 点击确定
    confirm() {
      this.show = false;
      this.starttime =
        this.currentDate.getFullYear() +
        "年" +
        (Number(this.currentDate.getMonth()) + 1) +
        "月" +
        this.currentDate.getDate() +
        "日 ";
      // +
      //   this.currentDate.getHours() +
      //   ":" +
      //   this.currentDate.getMinutes();
      // this.starttime1 = new Date(this.currentDate).getTime() / 1000;
    },
    // 点击取消
    cancel() {
      this.show = false;
    },
    confirm1() {
      this.show1 = false;
      this.endtime =
        this.currentDate1.getFullYear() +
        "年" +
        (Number(this.currentDate1.getMonth()) + 1) +
        "月" +
        this.currentDate1.getDate() +
        "日 ";
      // +
      // this.currentDate1.getHours()
      // +
      // ":"
      //   +
      //   this.currentDate1.getMinutes();
      // this.endtime1 = new Date(this.currentDate1).getTime() / 1000;
    },
    cancel1() {
      this.show1 = false;
    },
    // 处理控件显示的时间格式
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      }
      return value;
    },
    // 选择类型进行处理
    selectType() {
      this.show2=true
    },
    onConfirm(value, index) {
      this.show2=false;
      console.log(value,index)
      this.type=value;
    },
    onCancel() {
      this.show2=false;
    }
  }
};
</script>
<style>
.coupon_box {
  width: 335px;
  margin: 0 auto;
}
.base_info {
  font-size: 16px;
  font-weight: 600;
  color: #444;
  margin-top: 10px;
  margin-bottom: 20px;
}
.info_pad {
  padding: 4px 10px 10px 0px;
  border: 1px solid #666;
  margin-bottom: 10px;
}
.van-field__label {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nummber_box {
  border: 1px solid #666;
  padding: 10px 0px;
  margin-bottom: 10px;
}
.padr {
  padding-right: 10px;
}
/* 确定添加 */
.submit {
  width: 336px;
  height: 50px;
  background: #0079fe;
  margin: 40px auto;
  font-size: 16px;
  border: #fff;
  border-radius: 60px;
}
</style>
