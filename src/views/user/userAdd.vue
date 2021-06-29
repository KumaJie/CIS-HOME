<template>
  <div class="form-wrap">
    <template v-if="isAdmin">
      <el-form :model="userFrom" class="demo-form-inline">
        <el-form-item label="员工编号">
          <el-input v-model="userFrom.empId" placeholder="员工编号"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="userFrom.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="登录名">
          <el-input v-model="userFrom.loginName" placeholder="登录名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userFrom.userPwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="userFrom.status" placeholder="状态">
            <el-option
              v-for="status in statusAndCode"
              :key="status.code"
              :label="status.permName"
              :value="status.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addUser">添加</el-button>
        </el-form-item>
      </el-form>
    </template>
    <div v-else>你没有权限</div>
  </div>
</template>

<script>
import { settingMixin } from "./statusSettingMixin";
import { mapGetters } from "vuex";
export default {
  mixins: [settingMixin],
  data() {
    return {
      userFrom: {
        userName: "",
        loginName: "",
        empId: "",
        status: "",
        userPwd: ""
      }
    };
  },
  methods: {
    addUser() {
      if (
        this.userFrom.userName === "" ||
        this.userFrom.loginName === "" ||
        this.userFrom.empId === "" ||
        this.userFrom.status === ""
      ) {
        this.$message("输入字段不能为空");
        return;
      }
      this.$http({
        url: "/addUser",
        method: "POST",
        data: {
          userName: this.userFrom.userName,
          loginName: this.userFrom.loginName,
          status: this.userFrom.status,
          empId: this.userFrom.empId,
          userPwd: this.userFrom.userPwd
        }
      }).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.$message({ type: "success", message: "添加成功" });
        } else {
          this.$message({ type: "warning", message: data.message });
        }
      });
    }
  },
  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>

<style lang="css" scoped>
/* .form-wrap {
  display: flex;
  align-items: center;
} */
</style>