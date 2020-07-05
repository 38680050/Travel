// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// reset.css 重置浏览器样式
// border.css 解决手机像素较高，可能会是二倍屏或三倍屏时，1px可能会根据css像素变成2px或3px的物理像素，引入可解决此问题
// fastClick 移动端直接使用click事件时可能会有300毫秒延迟，引入可解决此问题
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
