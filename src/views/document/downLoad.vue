<template>
    <div>
        <el-form :inline="true" :model="formData">
            <el-form-item label="标题">
                <el-input v-model="formData.documentTitle"></el-input>
            </el-form-item>    
            <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button type="danger">删除</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="talbeData" border >
            <el-table-column type="selection"> </el-table-column>
            <el-table-column label="标题" prop="documentTitle" align="center"> </el-table-column>
            <el-table-column label="创建时间" prop="documentCreate" align="center">
            </el-table-column>
            <el-table-column label="创建人" prop="userId" align="center"> </el-table-column>
            <el-table-column label="描述" prop="docementRemark" align="center"> </el-table-column>
            <el-table-column label="操作" width="90px" align="center">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" @click="edit(scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
            <el-table-column label="下载" width="90px" align="center">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="small"
                        @click="downLoad(scope.row)"
                        >下载</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="dialogFormVisible">
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
            <div slot="footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="change">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData:{
                documentTitle:"文档哈",
                documentName:"",
                documentRemark:"这是一个文件"
            },
            talbeData: [
                {
                    documentTitle:"文件哈",
                    documentCreate:"2019年4月6日",
                    userId:"拉阿拉",
                    docementRemark:"这是一个文件",
                }
            ],
            flag:false,
            fileList: [],
            dialogFormVisible: false,
        };
    },
    methods: {
        edit(detailInfo) {
            this.dialogFormVisible = true;
            console.log(detailInfo);
        },
        change(){
            this.dialogFormVisible = false;
        },
        downLoad(detailInfo) {
            console.log(detailInfo);
        },

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
    },
};
</script>
<style>
</style>