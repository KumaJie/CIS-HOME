<template>
  <el-container>
      <el-header>
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
</style>