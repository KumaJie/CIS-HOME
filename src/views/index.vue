<template>
    <el-container>
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside style="width: 245px; overflow: hidden" class="aside">
                <Aside></Aside>
            </el-aside>
            <el-main style="height: 700px">
                <el-breadcrumb
                    separator-class="el-icon-arrow-right"
                    style="margin-bottom: 50px"
                >
                    <el-breadcrumb-item :to="{ path: '/' }"
                        >首页</el-breadcrumb-item
                    >
                    <el-breadcrumb-item
                        v-for="item in breadcrumb"
                        :key="item"
                        >{{ item }}</el-breadcrumb-item
                    >
                </el-breadcrumb>
                <div style="padding: 0 20px">
                    <router-view />
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from "../components/aside.vue";
import Header from "../components/header.vue";
export default {
    components: {
        Aside,
        Header,
    },
    computed: {
        breadcrumb() {
            const breadcrumbPath = this.$store.state.breadcrumbPath;
            let breadcrumb = [];
            // 判断是否为空
            if (JSON.stringify(breadcrumbPath) !== "{}") {
                breadcrumb.push(breadcrumbPath.path.title);
                breadcrumbPath.path.subMenus.forEach((val) => {
                    if (val.path === breadcrumbPath.url) {
                        breadcrumb.push(val.title);
                    }
                });
            }
            return breadcrumb;
        },
    },
};
</script>

<style>
.header::before {
    content: "";
    display: block;
    height: 60px;
    width: 100%;
    left: 0;
    position: absolute;
    background-color: #35404d;
}
.aside::before {
    content: "";
    display: block;
    height: 92%;
    width: 245px;
    position: absolute;
    background-color: #2a3542;
}
</style>