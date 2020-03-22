<template>
  <div>
    <van-nav-bar
      title="商品图片"
      left-text="返回"
      :fixed="true"
      :Zindex="3"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon class="suceess" name="success" slot="right" />
    </van-nav-bar>
    <!-- 底部内容 -->
    <div class="swiper">
      <van-swipe @change="onChange" class="swiper-container">
        <van-swipe-item v-for="(item,index) in SwiperImg" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }} / {{totalLength}}</div>
      </van-swipe>
    </div>
    <div class="morePic">
      <p class="title">长按图片可拖动排序，视频固定显示在第一个位置</p>
      <div class="posting-uploader">
        <div class="posting-uploader-item" v-for="(item,index) in SwiperImg" :key="index">
          <img width="74" height="74" :src="item" alt @click="changeBtn(index)"/>
          <van-icon name="close" class="delte" @click="delBtn(index)"/>
        </div>
        <van-uploader :after-read="onRead" class="posting-uploader-right"/>
      </div>
    </div>
  </div>
</template>
<script>  
// import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.x.x/js/swiper.js"
// var mySwiper = new Swiper('.swiper-container',{
// })
export default {
  data() {
    return {
	  totalLength:0,
      current: 0,
      SwiperImg: [],
    };
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1); //返回上一层
    },
    onClickRight: function() {
      this.$router.push("/addAdmitation");
    },
    onChange(index) {
      console.log(index);
      this.current = index;
	},
	onRead(e){
		console.log(e)
		this.SwiperImg.push(e.content);
		console.log(this.SwiperImg.length)
		this.totalLength=this.SwiperImg.length
	},
	// 删除按钮
	delBtn(index){
		console.log(index)
		this.SwiperImg.splice(index,1);
		this.totalLength=this.SwiperImg.length;
	},
	// 改变图片
	changeBtn(index){
		console.log(index)
		// this.current = index;
		mySwiper.swiperTo(index,1000,false)
	}
  }
};
</script>

<style>
.suceess {
  font-size: 28px;
}
.swiper {
  width: 100%;
  height: 407px;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.van-swipe img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.custom-indicator {
  position: absolute;
  bottom: 20px;
  left: 45%;
  color: #fff;
  font-size: 18px;
}
.morePic{
	width: 336px;
	margin: 10px auto;
}
.title{
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 20px;
}
.posting-uploader{
	width: 100%;
	float: left;
	/* overflow-x: scroll; */
}
.posting-uploader-item{
	position: relative;
	float: left;
	margin-right: 10px;
}
.delte{
	position: absolute;
	top: 4px;
	right: 4px;
}
.posting-uploader-right{
	float: left;
	width: 74px;
	height: 74px;
}
.van-uploader__upload{
	width: 74px;
	height: 74px;
}
</style>