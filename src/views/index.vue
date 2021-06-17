<template>
  <el-container>
      <el-header class="header">
          <Header></Header>
      </el-header>
      <el-container>
          <el-aside>
              <Aside></Aside>
          </el-aside>
          <el-main>
              <router-view/>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/aside.vue'
import Header from '../components/header.vue'
export default {
    components:{
        Aside,
        Header
    }
}
</script>

<style>
.header::before{
    content: "";
    display: block;
    height: 60px;
    width: 100%;
    left: 0;
    position: absolute;
    background-color: #35404D;
}
</style>