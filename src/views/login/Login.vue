<template>
  <div class="face-container">
    <el-card class="form-wrap">
      <el-form :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.username" placeholder="用户名"></el-input>
        </el-form-item>
        
        <el-form-item label="密码">
          <el-input type="password" v-model="formInline.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="faceLogin">刷脸</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      console.log("submit!");
      this.$router.replace({ path: '/index' })
    },
    faceLogin() {
      this.$router.push({ path: '/faceLogin' })
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("需要初始化");
    next();
  },
};
</script>

<style lang="css" scoped>
.face-container {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  background-color: #eee;
  overflow: hidden;
}
.form-wrap {
  width: 400px;
  margin: 100px auto 0 auto;
}
</style>