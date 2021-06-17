<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添 加</el-button>
        <el-button>重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AddNotice",
  data() {
    return {
      form: {
        name: "",
        desc: "",
      },
    };
  },
  methods:{
      onSubmit() {
        console.log('submit!');
      }
  }
};
</script>

<style>
</style>