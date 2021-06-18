<template>
    <el-row style="line-height: 60px; color: #ecf5ff">
        <el-col :span="2">
            <div class="title-icon"></div>
        </el-col>
        <el-col :span="10">员工之家</el-col>
        <el-col :span="2">欢迎登陆</el-col>
        <el-col :span="2">{{nowDate}}</el-col>
        <el-col :span="2">
            <el-link icon="el-icon-setting" :underline="false" type="primary" href="/password"
                >修改密码</el-link
            >
        </el-col>
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false" type="primary" href="/faceRegister"
                >人脸注册</el-link
            ></el-col
        >
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false" type="primary" href="/login"
                >退出登录</el-link
            >
            </el-col
        >
    </el-row>
</template>

<script>
export default {
    computed:{
        nowDate(){
            return new Date().toLocaleDateString()
        }
    },
};
</script>

<style>
.title-icon::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("https://img1.baidu.com/it/u=3271466112,2989683044&fm=26&fmt=auto&gp=0.jpg");
    background-position: center center;
    background-size: 60% 60%;
    background-repeat: no-repeat;
}
.title-icon{
    height: 60px;
}
</style>