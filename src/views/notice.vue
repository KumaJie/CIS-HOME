<template>
    <el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="公告名称" prop="noticeTitle"> </el-table-column>
        <el-table-column label="公告内容" prop="noticeContent"> </el-table-column>
        <el-table-column label="创建时间" prop="noticeCreate"> </el-table-column>
        <el-table-column label="公告人" prop="userId"> </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" size="small" @click="edit(scope.row)"
                    >编辑</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            talbeData: [],
        };
    },
    methods:{
        edit(detailInfo){
            console.log(detailInfo)
        }
    }
};
</script>

<style>
</style>