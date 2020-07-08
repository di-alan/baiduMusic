import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//轮播图
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);


//TAB切换
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

import axios from './util/http'
import VueAxios from 'vue-axios'
//为vue安装插件
Vue.use(VueAxios, axios)

//下拉刷新
import { List } from 'vant';

Vue.use(List);
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
//单元格
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
//矢量图
import { Icon } from 'vant';

Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
