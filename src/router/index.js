import Vue from 'vue'
import Router from 'vue-router'
import Myself from '../components/myself.vue'
import Setting from '../components/setting.vue'
import Modifypwd from '../components/modifypwd.vue'
import Admitation from '../components/admitation.vue'
import UserInfomation from '../components/userInfomation.vue'
import Addadmitation from '../components/addAdmitation.vue'
import Account from '../components/account.vue'
import Rotation from '../components/rotation.vue'
import Goods from '../components/goods.vue'
import Order from '../components/order.vue'
import Discount from '../components/discount.vue'
import Modifyrotation from '../components/modifyrotation.vue'
import Modifycoupon from '../components/modifycoupon.vue'
import Addrotation from '../components/addrotation.vue'
import Orderdetail from '../components/orderdetail.vue'
import addGood from '../components/addGood/addGood.vue'
import addpic  from '../components/addGood/addpic/addpic.vue'
import pigoods  from '../components/pigoods/pigoods.vue'
import type from '../components/type/type.vue'
import gaunli from '../components/gaunli/guanli.vue'
import Login from '../components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/myself'},
    {
      path: '/myself',
      name: 'Myself',
      component: Myself,
      meta:{requireAuth:true}
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta:{requireAuth:true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/modifypwd',
      name: 'Modifypwd',
      component: Modifypwd,
    },
    {
      path: '/admitation',
      name: 'Admitation',
      component: Admitation,
    },
    {
      path: '/userInfomation',
      name: 'UserInfomation',
      component: UserInfomation,
    },
    {
      path: '/addAdmitation',
      name: 'Addadmitation',
      component: Addadmitation,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/rotation',
      name: 'Rotation',
      component: Rotation,
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/discount',
      name: 'Discount',
      component: Discount,
    },
    {
      path: '/modifyrotation',
      name: 'Modifyrotation',
      component: Modifyrotation,
    },
    {
      path: '/modifycoupon',
      name: 'Modifycoupon',
      component: Modifycoupon,
    },
    {
      path: '/addrotation',
      name: 'Addrotation',
      component: Addrotation,
    },
    {
      path: '/orderdetail',
      name: 'Orderdetail',
      component: Orderdetail,
    },
    {
    	 path: '/addGood',
      name: 'addGood',
      component: addGood,
    },
    {
    	path: '/addpic',
      name: 'addpic',
      component: addpic,
    },
    {
      path: '/goods',
      name: 'goods',
      component: pigoods,
      children: [
            { path: 'pigoods', name: 'pigoods', component: pigoods },
        ],
       
    },
     {
      path: '/goods',
      name: 'goods',
      component: type,
      children: [
            { path: 'type', name: 'type', component: type },
        ],
       
    },
    {
      path: '/goods',
      name: 'goods',
      component: gaunli,
      children: [
            { path: 'gaunli', name: 'gaunli', component: gaunli },
        ],
       
    }
  ],
})
