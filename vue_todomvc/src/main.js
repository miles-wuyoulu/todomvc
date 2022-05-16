import Vue from 'vue'
import App from './App.vue'

//引入组件库
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Card,
  Input,
  Button,
  Form,
  FormItem,
  Message
} from 'element-ui';

// 引入组件库插件
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside)
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);

Vue.prototype.$message = Message

// 引入并使用路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入路由配置文件
import router from './router'

// 将网络请求设置为全局
import { getReq,postReq,loginReq } from "./common/myRequest";




Vue.prototype.$getReq = getReq
Vue.prototype.$postReq = postReq
Vue.prototype.$loginReq = loginReq

import VueCookies from "vue-cookies";
Vue.use(VueCookies)

// 引入状态管理文件vuex
import store from "./store"



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 声明路由对象，全局使用
  router,
  // 声明store
  store
}).$mount('#app')
