<template>
  <el-form ref="deptAddForm" :model="addDeptForm" label-width="80px">
    <el-form-item label="部门名称">
      <el-input v-model="addDeptForm.deptName"></el-input>
    </el-form-item>

    <el-form-item label="详细描述">
      <el-input v-model="addDeptForm.deptRemark"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="addDept">立即添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      addDeptForm: {
        deptName: "",
        deptRemark: ""
      }
    };
  },
  methods: {
    addDept() {
      this.$http({
        url: "/addDept",
        method: "POST",
        data: {
          deptName: this.addDeptForm.deptName,
          deptRemark: this.addDeptForm.deptRemark
        }
      }).then(res => {
				const data = res.data;
        if ((data.status >= 200 && data.status < 300) || data.status === 304) {
					this.$message({ type: "success", message: data.message });
        } else {
					this.$message({ type: "warning", message: data.message });
        }
				this.resetForm();
      });
    },
		resetForm() {
			this.addDeptForm.deptName = "";
			this.addDeptForm.deptRemark = "";
		}
  }
};
</script>

<style>
</style>
