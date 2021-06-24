<template>
    <div class="face-container">
        <el-card class="form-wrap">
            <el-form :model="formInline" class="demo-form-inline">
                <el-form-item label="用户名">
                    <el-input
                        v-model="formInline.username"
                        placeholder="用户名"
                    ></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input
                        type="password"
                        v-model="formInline.password"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="isShow = true"
                        >登录</el-button
                    >
                    <el-button type="primary" @click="faceLogin"
                        >刷脸</el-button
                    >
                </el-form-item>
            </el-form>
            <Vcode :show="isShow" @success="login" @close="isShow = false" />
        </el-card>
    </div>
</template>

<script>
import { setTokenToStorage } from "@/utils/storage";
import Vcode from "vue-puzzle-vcode";
export default {
    name: "Login",
    data() {
        return {
            formInline: {
                username: "",
                password: "",
            },
            isShow: false,
        };
    },
    methods: {
        login() {
            this.$http({
                url: "login",
                method: "POST",
                data: this.formInline,
            }).then((res) => {
                const data = res.data;
                if (
                    (data.status >= 200 && data.status < 300) ||
                    data.status === 304
                ) {
                    this.$store.commit("initUserInfo", data.data.user);
                    setTokenToStorage(data.data.token);
                    this.$message({ type: "success", message: "登录成功" });
                    this.isShow = false;
                    const that = this;
                    setTimeout(() => {
                        that.$router.replace({ path: "/index" });
                    }, 1500);
                } else {
                    this.$message({ type: "warning", message: data.message });
                }
            });
        },
        faceLogin() {
            this.$router.push({ path: "/faceLogin" });
        },
    },
    components: {
        Vcode,
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.$store.commit("initUserInfo", null);
        });
    },
};
</script>

<style lang="css" scoped>
.face-container {
    margin: 0;
    height: 100vh;
    box-sizing: border-box;
    background-color: #eee;
    overflow: hidden;
}
.form-wrap {
    width: 400px;
    margin: 100px auto 0 auto;
}
</style>