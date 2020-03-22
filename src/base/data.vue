<template>
    <div class="data">
        <!-- 没有更多内容了 -->
    <div v-if="noContent===true">
      <van-row class="noContent" >
      没有更多内容了
    </van-row>
    </div>
    <!-- 搜索没有内容 -->
    <div v-if="none===true">
      <van-row class="noContent" >
      内容为空
    </van-row>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        none:{
            type:Boolean,
            default:''
        },
        noContent:{
            type:Boolean,
            default:''
        }
    }
}
</script>

<style>
/* 搜索内容为空 */
.data{
    padding-bottom: 100px;
}
.noContent{
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  padding-bottom: 40px;
}
</style>