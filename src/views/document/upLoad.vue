<template>
    <el-form :model="formData">
        <el-form-item label="文档标题">
                <el-input v-model="formData.documentTitle" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="文档描述">
                <el-input type="textarea" rows="10" v-model="formData.documentRemark"></el-input>
            </el-form-item>
            <el-form-item label="文档">
                 <br/><el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                    accept="text"
                    >
                    <el-button size="small" type="primary">选择文件</el-button>
                    <span v-if="!flag" slot="tip" class="el-upload__tip">未选择任何文件</span>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">上传</el-button>
                <el-button @click="resetForm('formData')">重置</el-button>
            </el-form-item>
    </el-form>
</template>
<script>
export default {
    data(){
        return{
            formData:{
                documentTitle:"文档哈",
                documentName:"",
                documentRemark:"这是一个文件"
            },
            flag:false,
            fileList: [],
        }
    },
    methods:{
        resetForm(formName){
           this.formData={
                documentTitle:"",
                documentName:"",
                documentRemark:""
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
}
</script>
<style >
.el-upload__tip{
    margin-left: 10px;
}
</style>