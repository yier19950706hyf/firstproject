// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/amfe-flexible/index.js'
import "./assets/css/base.css"

Vue.config.productionTip = false

/**
 * vue中怎样实现 路由拦截器（当用户没有登录的时候，跳转到登录页面，
 * 已经登录的时候，不能跳转到登录页，除非后台token失效）
 */
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  if(to.meta.requireAuth){//判断路由是否需要登录权限
    if(localStorage.getItem('token')){//判断本地是否存在token
      next();
    }else{
      if(to.path==='/login'){
        next();
      }else{
        next({
          path:'/login'
        })
      }
    }
  }
  else{
    next();
  }
  // 如果本地存在token则不允许直接跳转到登录页面
  if(to.fullPath=='/login'){
    if(localStorage.getItem('token')){
      next({
        path:from.fullPath
      })
    }else{
      next();
    }
  }
})




// vant组件库引入
import { Row, Col } from 'vant';
import { Image } from 'vant';
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import { Field } from 'vant';
import { Search } from 'vant';
import { Uploader } from 'vant';
import { Picker } from 'vant';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(Uploader);
Vue.use(Search);
Vue.use(Field);
Vue.use(Tab).use(Tabs);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Cell).use(CellGroup);
Vue.use(Grid).use(GridItem);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Row).use(Col);



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
