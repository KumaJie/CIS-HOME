<template>
    <el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="职位名称" prop="jobName"> </el-table-column>
        <el-table-column label="详细信息" prop="jobRemark"> </el-table-column>
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