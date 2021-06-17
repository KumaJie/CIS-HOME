<template>
    <el-form :model="formData">
        <el-form-item label="姓名">
            <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-select v-model="formData.status">
                <el-option value="0"></el-option>
                <el-option value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="登录名">
            <el-input v-model="formData.loginName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formData.userPwd"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                userName: "",
                status: "",
                loginName: "",
                userPwd: "",
            },
        };
    },
};
</script>

<style>
</style>