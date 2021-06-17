<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职位名称：">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>

            <el-form-item label="详细描述：">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>  
        </el-form>

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
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
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>