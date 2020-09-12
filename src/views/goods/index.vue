<template>
  <div>
    <main id="main-box">
      <h2>商品管理</h2>
      <div>
        <el-button round>添加商品</el-button>
        <el-button round>查找商品</el-button>
      </div>
      <el-card shadow="hover" v-for="index of 20" :key="index">
        <div class="card_box">
          <el-checkbox v-model="checked"/>
          <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/115618/2/8355/196212/5ecc96cdEd40aff11/7f8fbaf32a60f5b0.jpg" alt="">
          <p>{{ index }}</p>
        </div>
      </el-card>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="scss" scoped>
#main-box {
  padding: 16px;
  max-height: calc(100vh - 93px);
  background: #eee;
  overflow: auto;
  h2 {
    padding: 20px 8px;
    border-bottom: 2px solid #555;
  }
  .el-card {
    margin: 8px;
    height: 100px;
    .card_box {
      display: flex;
      align-items: center;
      .el-checkbox {
        // display: block;
        margin-right: 20px ;
      }
      // img {
      //   // display: block;
      //   margin: 12px;
      // }
    }
  }
}
</style>
