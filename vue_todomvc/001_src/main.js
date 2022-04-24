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
Button} from 'element-ui';


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

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
