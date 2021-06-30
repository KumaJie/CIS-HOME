<template>
  <div>
    <template v-if="isAdmin">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称：">
          <el-input v-model="formInline.jobName"></el-input>
        </el-form-item>

        <el-form-item label="详细描述：">
          <el-input v-model="formInline.jobRemark"></el-input>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" @click="onAdd">添加</el-button>
        </el-form-item>
      </el-form>

    </template>
    <div v-else>你没有权限</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      formInline: {
        jobName: "",
        jobRemark: ""
      }
    };
  },
  methods: {
    onAdd() {
      if (this.formInline.jobName === "" || this.formInline === "") {
        this.$message({ type: "warning", message: "输入不能有空！" });
        return;
      }
      this.$http
        .post("/AddJob", {
          jobName: this.formInline.jobName,
          jobRemark: this.formInline.jobRemark
        })
        .then(res => {
          const data = res.data;
          if (
            (data.status >= 200 && data.status < 300) ||
            data.status === 304
          ) {
            this.$message({ type: "success", message: data.message });
            this.resetForm();
          } else {
            this.$message({ type: "warning", message: data.message });
          }
        });
    },
    resetForm() {
      this.formInline.jobName = "";
      this.formInline.jobRemark = "";
    }
  },
  computed: {
    ...mapGetters(['isAdmin'])
  }
};
</script>