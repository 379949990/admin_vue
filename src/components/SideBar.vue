<template id="sideBar">
  <keep-alive>
    <!-- <el-row class="tac"> -->
    <el-col :span="4" class="sideBar_list">
      <el-menu
        default-active=1
        class="el-menu-vertical-demo"
        @select="selectOn"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div id="sidebarTitle">
          <img style="cursor: pointer;" id="toHome" src="https://du.hupucdn.com/FlkMCSkNXyR8hXVWkVaAWhtwfEIW" width="25" height="25">
          <h5>后台管理系统</h5>
        </div>
        <el-menu-item index="1" @click="$router.push('/admin')">
          <i class="el-icon-menu"></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/goods')">
            <i class="el-icon-document"></i>
            <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push('/user')">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push('/cart')">
          <i class="el-icon-s-ticket"></i>
          <span slot="title">购物车管理</span>
        </el-menu-item>
        <el-menu-item index="5" @click="$router.push('/order')">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="6" @click="$router.push('/message')">
          <i class="el-icon-share"></i>
          <span slot="title">消息管理</span>
        </el-menu-item>
        <el-menu-item index="7" @click="$router.push('/banner')">
          <i class="el-icon-picture"></i>
          <span slot="title">轮播图管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!-- </el-row> -->
  </keep-alive>
</template>

<script>

export default {
  data () {
    return {
      index: 1
    }
  },
  computed: {
  },
  methods: {
    selectOn (res) {
      console.log(res)
      this.index = res
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #39485d;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .sideBar_list {
    // height: 100%;
    height: calc(100vh - 61px);
    background: #76818a;
  }
  .el-menu {
    width: 100%;
  }
  #sidebarTitle {
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px double #888;
    img {
      margin: 10px;
    }
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
    }
  }
</style>
