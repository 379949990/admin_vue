<template>
  <main id="main-Box">
    <!-- <h3>hello world</h3> -->
    <router-view name="pageHead"></router-view>
    <el-row class="tac">
      <router-view name="sideBar"></router-view>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

export default {
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html, body, #container{
  width: 100%;
  height: 100%;
}
html{font-size: 26.66666666vw;}
@media all and (orientation: landscape){
  html{font-size: 100px;}
  #container {
  max-width: 640px;
  margin: 0 auto;
  }
}
body{font-size: 14px;}
#main-Box {
  height: 100vh;
  // display: flex;
}
</style>
