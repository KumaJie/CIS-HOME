<template>
    <el-row style="line-height: 60px; color: #ecf5ff">
        <el-col :span="3">
            <div class="title-icon"></div>
        </el-col>
        <el-col :span="9">员工之家</el-col>
        <el-col :span="2">欢迎登陆</el-col>
        <el-col :span="2">{{nowDate}}</el-col>
        <el-col :span="2">
            <el-link icon="el-icon-setting" :underline="false" type="primary"
                >修改密码</el-link
            >
        </el-col>
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false" type="primary"
                >人脸注册</el-link
            ></el-col
        >
        <el-col :span="2"
            ><el-link icon="el-icon-setting" :underline="false" type="primary"
                >退出登录</el-link
            ></el-col
        >
    </el-row>
</template>

<script>
export default {
    computed:{
        nowDate(){
            return new Date().toLocaleDateString()
        }
    }
};
</script>

<style>
.title-icon::before{
    content: "1";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("https://s4.aconvert.com/convert/p3r68-cdx67/aig89-xzv7a.png");
    background-position: center center;
    background-size: 100% 100%;
}
</style>