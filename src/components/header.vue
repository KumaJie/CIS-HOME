<template>
  <el-row style="line-height: 60px; color: #ecf5ff">
    <el-col :span="1">
      <div class="title-icon"></div>
    </el-col>
    <el-col :span="11"><div class="title-logo"></div></el-col>
    <el-col :span="2">欢迎登陆 {{ userName }}</el-col>
    <el-col :span="2">{{ nowDate }}</el-col>
    <el-col :span="2">
      <el-link
        icon="el-icon-setting"
        :underline="false"
        type="primary"
        href="/password"
        >修改密码</el-link
      >
    </el-col>
    <el-col :span="2"
      ><el-link
        icon="el-icon-setting"
        :underline="false"
        type="primary"
        href="/faceRegister"
        >人脸注册</el-link
      ></el-col
    >
    <el-col :span="2"
      ><el-link
        @click="logout"
        icon="el-icon-setting"
        :underline="false"
        type="primary"
        >退出登录</el-link
      >
    </el-col>
  </el-row>
</template>

<script>
import { deleteTokenFromStorage } from '@/utils/storage';
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["userName"]),
    nowDate() {
      return new Date().toLocaleDateString();
    }
  },
  methods: {
    logout() {
      this.$confirm("确定退出登录？").then(() => {
        this.$http.get("/logout").then(() =>{
          deleteTokenFromStorage();
          this.$router.replace("/login")
        })
      })
    }
  }
};
</script>

<style>
.title-icon::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("https://img1.baidu.com/it/u=3271466112,2989683044&fm=26&fmt=auto&gp=0.jpg");
  background-position: center right;
  background-size: 90% 60%;
  background-repeat: no-repeat;
}
.title-logo::before {
  content: "";
  display: block;
  width: 35%;
  height: 100%;
  background-image: url("../assets/icon.png");
  background-position: center left;
  background-size: 60% 60%;
  background-repeat: no-repeat;
}

.title-icon,
.title-logo {
  height: 60px;
}
</style>