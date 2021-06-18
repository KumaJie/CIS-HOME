<template>
  <div class="face-container">
    <el-card class="form-wrap">
      <el-form :model="formInline" class="demo-form-inline">
        <el-form-item label="新密码">
          <el-input v-model="formInline.newpassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="formInline.newpassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="当前密码">
          <el-input v-model="formInline.newpassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">提交</el-button>
          <el-button type="primary" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      formInline: {
        newpassword: "",
        password: ""
      }
    };
  },
  methods: {
    cancel() {
      this.$router.back();
    }
  }
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