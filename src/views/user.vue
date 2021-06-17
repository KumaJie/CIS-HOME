<template>
    <div>
        <el-form :inline="true" :model="formData">
            <el-form-item label="用户名">
                <el-input v-model="formData.userName"></el-input>
            </el-form-item>
            <el-form-item label="用户状态">
                <el-select v-model="formData.status">
                    <el-option value="全部"></el-option>
                    <el-option value="0"></el-option>
                    <el-option value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button type="danger">删除</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="talbeData" border>
            <el-table-column type="selection"> </el-table-column>
            <el-table-column label="登录名" prop="loginName"> </el-table-column>
            <el-table-column label="密码" prop="userPwd"> </el-table-column>
            <el-table-column label="用户名" prop="userName"> </el-table-column>
            <el-table-column label="状态" prop="status"> </el-table-column>
            <el-table-column label="创建时间" prop="userCreate">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="danger"
                        size="small"
                        @click="edit(scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="dialogFormVisible">
            <el-form :model="selectedData">
                <el-form-item label="姓名">
                    <el-input v-model="selectedData.userName"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="selectedData.status">
                        <el-option value="0"></el-option>
                        <el-option value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="登录名">
                    <el-input v-model="selectedData.loginName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="selectedData.userPwd"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeUser">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                userName: "",
                status: "",
            },
            talbeData: [
                {
                    loginName: "测试员",
                    userPwd: "123",
                    userName: "重庆理工大学",
                    status: 0,
                    userCreate: "2021年6月17日",
                },
            ],
            selectedData: {},
            dialogFormVisible: false,
        };
    },
    methods: {
        edit(userInfo) {
            this.dialogFormVisible = true;
            this.selectedData = userInfo;
        },
        changeUser() {
            // 修改后台数据
            this.dialogFormVisible = false;
        },
    },
};
</script>

<style>
</style>