<template>
    <el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="登录名" prop="loginName"> </el-table-column>
        <el-table-column label="密码" prop="userPwd"> </el-table-column>
        <el-table-column label="用户名" prop="userName"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
        <el-table-column label="创建时间" prop="userCreate"> </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" size="small" @click="edit(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            talbeData: [
                {
                    loginName: "测试员",
                    userPwd: "123",
                    userName: "重庆理工大学",
                    status: 0,
                    userCreate: "2021年6月17日",
                },
            ],
        };
    },
    methods:{
        edit(userInfo){
            console.log(userInfo)
        }
    }
};
</script>

<style>
</style>