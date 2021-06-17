<template>
    <el-row style="line-height: 60px">
        <el-col :span="12">员工之家</el-col>
        <el-col :span="2">欢迎登陆</el-col>
        <el-col :span="2">日期</el-col>
        <el-col :span="2">
            <el-link icon="el-icon-setting" :underline="false">修改密码</el-link>
        </el-col>
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false">人脸注册</el-link></el-col
        >
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false">退出登录</el-link></el-col
        >
    </el-row>
</template>

<script>
export default {};
</script>

<style>
</style>