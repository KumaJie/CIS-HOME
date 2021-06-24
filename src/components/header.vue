<template>
    <el-row style="line-height: 60px; color: #ecf5ff">
        <el-col :span="1">
            <div class="title-icon"></div>
        </el-col>
        <el-col :span="4"><div class="title-logo"></div></el-col>
        <el-col :span="2" :offset="3"
            ><div id="he-plugin-simple" style="weather"></div
        ></el-col>
        <el-col :span="2" :offset="2">欢迎登陆 {{ userName }}</el-col>
        <el-col :span="2">{{ nowDate }}</el-col>
        <el-col :span="2">
            <el-link
                icon="el-icon-setting"
                :underline="false"
                type="primary"
                href="/password"
                >修改密码</el-link
            >
        </el-col>
        <el-col :span="2"
            ><el-link
                icon="el-icon-setting"
                :underline="false"
                type="primary"
                href="/faceRegister"
                >人脸注册</el-link
            ></el-col
        >
        <el-col :span="2"
            ><el-link
                icon="el-icon-setting"
                :underline="false"
                type="primary"
                href="/login"
                >退出登录</el-link
            >
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["userName"]),
        nowDate() {
            return new Date().toLocaleDateString();
        },
    },
    created() {
        window.WIDGET = {
            CONFIG: {
                modules: "31204",
                background: "4",
                backgroundColor: "35404D",
                tmpColor: "FFFFFF",
                tmpSize: "16",
                cityColor: "FFFFFF",
                citySize: "16",
                aqiColor: "FFFFFF",
                aqiSize: "16",
                weatherIconSize: "24",
                alertIconSize: "18",
                padding: "17px 20px 10px 20px",
                shadow: "0",
                language: "auto",
                fixed: "false",
                vertical: "center",
                horizontal: "center",
                key: "72554aaa11464f5398ab10875b349e2a",
            },
        };
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
        document.getElementsByTagName("head")[0].appendChild(script);
    },
};
</script>

<style>
.title-icon::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("https://img1.baidu.com/it/u=3271466112,2989683044&fm=26&fmt=auto&gp=0.jpg");
    background-position: center right;
    background-size: 90% 60%;
    background-repeat: no-repeat;
}
.title-logo::before {
    content: "";
    display: block;
    height: 100%;
    background-image: url("../assets/icon.png");
    background-position: center left;
    background-size: 60% 60%;
    background-repeat: no-repeat;
}

.title-icon,
.title-logo {
    height: 60px;
}
</style>