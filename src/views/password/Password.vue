<template>
  <div class="face-container">
    <el-card class="form-wrap">
      <el-form :model="formInline" class="demo-form-inline">
        <el-form-item label="新密码">
          <el-input
            v-model="formInline.newPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="formInline.oncePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="当前密码">
          <el-input
            v-model="formInline.oldPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sumbit">提交</el-button>
          <el-button type="primary" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Password",
  data() {
    return {
      formInline: {
        newPassword: "",
        oncePassword: "",
        oldPassword: ""
      },
    };
  },
  computed: {
    ...mapGetters(['loginUserId'])
  },
  methods: {
    sumbit() {
      if (
        this.formInline.newPassword === '' ||
        this.formInline.oldPassword === ''
      ) {
        this.$message({ type: 'warning', message: '输入不能为空' })
        return;
      }

      if (this.formInline.newPassword !== this.formInline.oncePassword) {
        this.$message({ type: 'warning', message: '两次密码输入不正确' })
        return;
      }
      this.$http({
        url: 'http://localhost:8080/fix_psw',
        method: 'POST',
        data: {
          userId: this.loginUserId,
          oldPsw: this.formInline.oldPassword,
          newPsw: this.formInline.newPassword
        }
      }).then(res => {
        const data = res.data;
        if ((data.status >= 200 && data.status < 300) || data.status === 304 ) {
          this.$message({ type: 'success', message: '修改成功, 即将跳转到登录界面' });
          setTimeout(() => {
            this.$router.replace({ path: '/login' })
          }, 1500)
        } else {
          this.$message({ type: 'warning', message: data.message })
        }
      })
    },
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