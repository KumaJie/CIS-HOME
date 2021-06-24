<template>
    <el-menu
        class="aside"
        style="width:245px"
        unique-opened
        router
        background-color="#2A3542"
        text-color="#ecf5ff"
        active-text-color="#ffd04b"
        @select="select"
    >
        <el-submenu
            v-for="(menu, index) in menus"
            :key="menu.title"
            :index="'' + index"
        >
            <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{ menu.title }}</span>
            </template>
            <el-menu-item-group
                v-for="subMenu in menu.subMenus"
                :key="subMenu.title"
            >
                <el-menu-item :index="subMenu.path">{{
                    subMenu.title
                }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    title: "用户管理",
                    icon: "el-icon-user",
                    subMenus: [
                        {
                            title: "用户查询",
                            path: "/index/user",
                        },
                        {
                            title: "添加用户",
                            path: "/index/userAdd",
                        },
                    ],
                },
                {
                    title: "部门管理",
                    icon: "el-icon-s-cooperation",
                    subMenus: [
                        {
                            title: "部门查询",
                            path: "/index/department",
                        },
                        {
                            title: "添加部门",
                            path: "/index/departmentAdd",
                        },
                    ],
                },
                {
                    title: "职位管理",
                    icon: "el-icon-s-order",
                    subMenus: [
                        {
                            title: "职位查询",
                            path: "/index/job",
                        },
                        {
                            title: "添加职位",
                            path: "/index/jobAdd",
                        },
                    ],
                },
                {
                    title: "员工管理",
                    icon: "el-icon-s-custom",
                    subMenus: [
                        {
                            title: "员工查询",
                            path: "/index/employee",
                        },
                        {
                            title: "添加员工",
                            path: "/index/employeeAdd",
                        },
                    ],
                },
                {
                    title: "公告管理",
                    icon: "el-icon-date",
                    subMenus: [
                        {
                            title: "公告查询",
                            path: "/index/notice",
                        },
                        {
                            title: "添加公告",
                            path: "/index/noticeAdd",
                        },
                    ],
                },
                {
                    title: "下载中心",
                    icon: "el-icon-document",
                    subMenus: [
                        {
                            title: "文档查询",
                            path: "/index/downLoad",
                        },
                        {
                            title: "上传文档",
                            path: "/index/upLoad",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        select(index, indexPath) {
            let breadcrumb = {
                url: index,
                path: this.menus[indexPath[0]],
            };
            this.$store.commit("changePath", breadcrumb);
        },
    },
};
</script>
<style>
.aside{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 100px;
}
</style>