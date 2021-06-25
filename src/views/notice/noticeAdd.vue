<template>
  <div>
    <el-form :model="form">
      <el-form-item label="公告标题" :label-width="formLabelWidth">
        <el-input
          v-model="form.noticeTitle"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="公告内容" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="form.noticeContent"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addNotice">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddNotice",
  data() {
    return {
      form: {
        noticeTitle: "",
        noticeContent: ""
      }
    };
  },
  computed: {
    ...mapGetters(['loginUserId'])
  },
  methods: {
    addNotice() {
      if (this.form.noticeTitle == "" || this.form.noticeContent == "") {
        this.$message("输入字段不能为空");
        return;
      }
      this.$http({
        url: "/addNotice",
        method: "POST",
        data: {
          noticeTitle: this.form.noticeTitle,
          noticeContent: this.form.noticeContent,
          userId: this.loginUserId
        }
      }).then(res => {
        const data = res.data;
        this.$message({ type: "warning", message: data.message });
      });
    }
  }
};
</script>

<style>
</style>