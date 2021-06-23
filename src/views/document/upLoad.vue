<template>
  <el-form :model="formData">
    <el-form-item label="文档标题">
      <el-input
        v-model="formData.documentTitle"
        style="width: 300px"
      ></el-input>
    </el-form-item>
    <el-form-item label="文档描述">
      <el-input
        type="textarea"
        rows="10"
        v-model="formData.documentRemark"
      ></el-input>
    </el-form-item>
    <el-form-item label="文档">
      <br /><el-upload
        class="upload-demo"
        action="http://localhost:8080/addDocs"
        :data="formData"
        :headers="headers"
        ref="upLoad"
        :limit="1"
        :auto-upload="false"
        :on-change="fileChange"
        :before-remove="flagFalse"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">选择文件</el-button>
        <span v-if="!flag" slot="tip" class="el-upload__tip"
          >未选择任何文件</span
        >
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitUpload">上传</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { getTokenFromStorage } from '@/utils/storage';
export default {
  data() {
    return {
      formData: {
        documentTitle: "",
        documentName: "",
        documentRemark: "",
        userId: 0,
      },
      headers:{
        Authorization: getTokenFromStorage()
      },
      flag: false,
      fileList: [],
    };
  },
  methods: {
    resetForm() {
      this.formData = {
        documentTitle: "",
        documentName: "",
        documentRemark: "",
      };
      console.log(this.fileList);
      this.fileList = [];
    },
    submitUpload() {
      this.formData.userId = 1;
      this.$refs.upLoad.submit();
      this.$message.success("上传成功");
      this.resetForm();
    },
    fileChange(file,fileList) {
        this.flag = true;
        this.fileList = fileList;
    },
    flagFalse() {
        this.fileList = [];
        this.flag = false;
    },
  },
};
</script>
<style >
.el-upload__tip {
  margin-left: 10px;
}
</style>