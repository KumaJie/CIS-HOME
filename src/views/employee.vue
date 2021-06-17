<template>
    <el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="姓名" prop="employeeName"> </el-table-column>
        <el-table-column label="性别" prop="sex"> </el-table-column>
        <el-table-column label="手机号码" prop="tel"> </el-table-column>
        <el-table-column label="邮箱" prop="email"> </el-table-column>
        <el-table-column label="职业" prop="jobId"> </el-table-column>
        <el-table-column label="学历" prop="education"> </el-table-column>
        <el-table-column label="身份证号码" prop="postCard"> </el-table-column>
        <el-table-column label="部门" prop="deptId"> </el-table-column>
        <el-table-column label="联系地址" prop="address"> </el-table-column>
        <el-table-column label="建档日期" prop="employeeCreate"> </el-table-column>
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
    methods: {
        edit(detailInfo) {
            console.log(detailInfo);
        }
    },
};
</script>
<style>
</style>