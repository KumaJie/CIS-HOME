<template>
    <div>
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
            <el-form-item>
                <el-button type="primary" @click="onSubmit">取消</el-button>
            </el-form-item>
        </el-form>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          jobName: '',
          jobRemark: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      onAdd() {
        this.$http.post("/AddJob", {
            jobName: this.formInline.jobName,
            jobRemark: this.formInline.jobRemark
        }).then(res => {
          const data = res.data;
          this.$message({ type: 'info', message: data.message })
        })
      }
    }
  }
</script>