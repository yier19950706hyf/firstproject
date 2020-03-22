<template>
    <div class="list">
        <div class="goods-main" v-for="(item,index) in Good" :key="index">
          <van-row gutter="20">
            <van-col span="24">
              <van-col span="9">
                <img
                  :src="item.imgInfo"
                />
              </van-col>
              <van-col span="13">
                <div style="font-size: 16px;line-height: 16px;margin-bottom: 8px;">{{item.title}}</div>
                <div
                  style="color: #FF0000;font-size: 12px;line-height: 16px;margin-bottom: 8px;"
                >￥{{item.minPrice}}</div>
                <div style="font-size: 12px;color: #999999;line-height: 16px;margin-bottom: 8px;">
                  <span style="margin-right: 10px;">总销量 {{item.sales}}</span>
                  <span>库存 {{item.stock}}</span>
                </div>
                <div style="font-size: 12px;color: #999999;line-height: 16px;">添加 {{item.addTime}}</div>
              </van-col>
              <van-col span="1">
                <van-icon name="arrow" style="line-height: 110px;" />
              </van-col>
            </van-col>
          </van-row>

          <div class="goods-main-bottom">
            <van-row gutter="20">
              <van-col span="6">
                <div style=" text-align: center;line-height: 12px;">
                  <van-icon name="closed-eye" />
                </div>
                <div style=" text-align: center;line-height: 22px;font-size: 14px;">浏览</div>
              </van-col>
              <van-col span="6">
                <div style=" text-align: center;line-height: 12px;">
                  <van-icon name="closed-eye" />
                </div>
                <div style=" text-align: center;line-height: 22px;font-size: 14px;">置顶</div>
              </van-col>
              <van-col span="6">
                <div style=" text-align: center;line-height: 12px;">
                  <van-icon name="closed-eye" />
                </div>
                <div style=" text-align: center;line-height: 22px;font-size: 14px;">上架</div>
              </van-col>
              <van-col span="6">
                <div style=" text-align: center;line-height: 12px;">
                  <van-icon name="closed-eye" />
                </div>
                <div
                  style="color: #FF0000; text-align: center;line-height: 22px;font-size: 14px;"
                  @click="delBtn(index,item.gid)"
                >删除</div>
              </van-col>
            </van-row>
          </div>
        </div>
    </div>
</template>

<script>
import { post, get, apiLink } from "../api/api";
export default {
    data(){
        return{

        }
    },
    props:{
        Good:{
            type:Array,
            default:''
        }
    },
    methods:{
      delBtn(index,id){
        console.log(index,id)
        get(apiLink.delGoodInf,{
          id:id
        }).then((res)=>{
          console.log(res)
          if(res.meta.code==200){
            this.Good.splice(index,1)
          }
        })
      }
    }
}
</script>

<style>

</style>