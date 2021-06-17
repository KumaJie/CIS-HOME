<template>
    <el-form
        :model="formData"
        label-position="left"
        label-width="100px"
    >
        <el-row>
            <el-col :span="10"
                ><el-form-item label="姓名">
                    <el-input
                        v-model="formData.employeeName"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="身份证号码">
                    <el-input
                        v-model="formData.cardId"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>

        <el-row>
            <el-col :span="10"
                ><el-form-item label="性别">
                    <el-select v-model="formData.sex">
                        <el-option label="男" value="0"></el-option>
                        <el-option label="女" value="1"></el-option>
                    </el-select> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="职位">
                    <el-select v-model="formData.jobName">
                        <el-option
                            label="java中级开发工程师"
                            value="0"
                        ></el-option>
                        <el-option
                            label="java高级开发工程师"
                            value="1"
                        ></el-option>
                    </el-select> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="学历">
                    <el-input
                        v-model="formData.education"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="邮箱">
                    <el-input
                        v-model="formData.email"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="手机">
                    <el-input v-model="formData.tel"></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="电话">
                    <el-input
                        v-model="formData.phone"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="政治面貌">
                    <el-input
                        v-model="formData.party"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="QQ号码">
                    <el-input
                        v-model="formData.qqNum"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="联系地址">
                    <el-input
                        v-model="formData.address"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="邮政编号">
                    <el-input
                        v-model="formData.postCard"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="出生日期">
                    <el-input
                        v-model="formData.birthday"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="民族">
                    <el-input v-model="formData.race"></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="所学专业">
                    <el-input
                        v-model="formData.speciality"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="爱好">
                    <el-input
                        v-model="formData.hobby"
                    ></el-input> </el-form-item
            ></el-col>
        </el-row>
        <el-row>
            <el-col :span="10"
                ><el-form-item label="备注">
                    <el-input
                        v-model="formData.remark"
                    ></el-input> </el-form-item
            ></el-col>
            <el-col :span="10" :offset="2"
                ><el-form-item label="所属部门">
                    <el-select v-model="formData.deptName">
                        <el-option label="研发部" value="0"></el-option>
                        <el-option label="营销部" value="1"></el-option>
                    </el-select> </el-form-item
            ></el-col>
        </el-row>
        <el-form-item>
            <el-button>搜索</el-button>
            <el-button>删除</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                employeeName: "",
                cardId: "",
                sex: "",
                jobName: "",
                education: "",
                email: "",
                tel: "",
                phone: "",
                party: "",
                qqNum: "",
                address: "",
                postCard: "",
                birthday: "",
                race: "",
                speciality: "",
                hobby: "",
                remark: "",
                deptName: "",
            },
        };
    },
};
</script>

<style>
</style>