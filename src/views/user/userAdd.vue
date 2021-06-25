<template>
  <div class="form-wrap">
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="登录名">
        <el-input v-model="formInline.user" placeholder="登录名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.user" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="状态">
          <el-option label="管理员" value="1"></el-option>
          <el-option label="员工" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser">添加</el-button>
        <el-button type="danger" @click="onSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        userName: "",
        loginName: "",
        region: ""
      }, 
    };
  },
  methods: {
    addUser() {
      this.$http({
        url: "http://localhost:8080/addUser",
        method: 'POST',
        data: {
          userName: this.formInline.userName,
          loginName: this.formInline.loginName,
          status: this.formInline.region,
        }
      }).then(res =>{
        const data = res.data;
          this.$message({type: 'warning',message:data.message})
      })
    }
  }
};
</script>

<style lang="css" scoped>
/* .form-wrap {
  display: flex;
  align-items: center;
} */
</style>