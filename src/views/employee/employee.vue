<template>
    <div>
        <el-form :model="formData" :inline="true">
            <el-form-item label="职位">
                <el-select v-model="formData.jobName">
                    <el-option label="java中级开发工程师" value="0"></el-option>
                    <el-option label="java高级开发工程师" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formData.employeeName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
                <el-input v-model="formData.cardId"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="formData.sex">
                    <el-option label="男" value="0"></el-option>
                    <el-option label="女" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="手机">
                <el-input v-model="formData.tel"></el-input>
            </el-form-item>
            <el-form-item label="所属部门">
                <el-select v-model="formData.deptName">
                    <el-option label="研发部" value="0"></el-option>
                    <el-option label="营销部" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button>搜索</el-button>
                <el-button>删除</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="talbeData"
            border
            @selection-change="handleSelectionChange"
            style="margin-bottom: 20px"
        >
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="姓名" prop="employeeName">
            </el-table-column>
            <el-table-column label="性别" prop="sex"> </el-table-column>
            <el-table-column label="手机号码" prop="tel"> </el-table-column>
            <el-table-column label="邮箱" prop="email"> </el-table-column>
            <el-table-column label="职业" prop="jobName"> </el-table-column>
            <el-table-column label="学历" prop="education"> </el-table-column>
            <el-table-column label="身份证号码" prop="cardId">
            </el-table-column>
            <el-table-column label="部门" prop="deptName"> </el-table-column>
            <el-table-column label="联系地址" prop="address"> </el-table-column>
            <el-table-column label="建档日期" prop="employeeCreate">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="danger"
                        size="small"
                        @click="edit(scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="50">
        </el-pagination>
        <el-dialog :visible.sync="dialogVisible">
            <el-form
                :model="editTable"
                label-position="right"
                label-width="90px"
            >
                <el-row>
                    <el-col :span="10"
                        ><el-form-item label="姓名">
                            <el-input
                                v-model="editTable.employeeName"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="10" :offset="2"
                        ><el-form-item label="性别">
                            <el-select v-model="editTable.sex">
                                <el-option label="男" value="0"></el-option>
                                <el-option label="女" value="1"></el-option>
                            </el-select> </el-form-item
                    ></el-col>
                </el-row>
                <el-row>
                    <el-col :span="10"
                        ><el-form-item label="手机">
                            <el-input
                                v-model="editTable.tel"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="10" :offset="2"
                        ><el-form-item label="邮箱">
                            <el-input
                                v-model="editTable.email"
                            ></el-input> </el-form-item
                    ></el-col>
                </el-row>
                <el-row>
                    <el-col :span="10"
                        ><el-form-item label="职位">
                            <el-select v-model="editTable.jobName">
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
                    <el-col :span="10" :offset="2"
                        ><el-form-item label="学历">
                            <el-input
                                v-model="editTable.education"
                            ></el-input> </el-form-item
                    ></el-col>
                </el-row>
                <el-row>
                    <el-col :span="10"
                        ><el-form-item label="身份证号码">
                            <el-input
                                v-model="editTable.cardId"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="10" :offset="2"
                        ><el-form-item label="所属部门">
                            <el-select v-model="editTable.deptName">
                                <el-option label="研发部" value="0"></el-option>
                                <el-option label="营销部" value="1"></el-option>
                            </el-select> </el-form-item
                    ></el-col>
                </el-row>
                <el-form-item label="联系地址">
                    <el-input v-model="editTable.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                employeeName: "",
                sex: "",
                tel: "",
                jobName: "",
                cardId: "",
                deptName: "",
            },
            talbeData: [
                {
                    employeeName: "张三",
                    sex: "男",
                    tel: "1369902332",
                    email: "@test",
                    jobName: "java高级开发工程师",
                    education: "Ph.D",
                    cardId: "360123xxxx",
                    deptName: "研发部",
                    address: "重庆理工大学",
                    employeeCreate: "2021年6月17日",
                },
                {
                    employeeName: "张二",
                    sex: "男",
                    tel: "1369902332",
                    email: "@test",
                    jobName: "java高级开发工程师",
                    education: "Ph.D",
                    cardId: "360123xxxx",
                    deptName: "研发部",
                    address: "重庆理工大学",
                    employeeCreate: "2021年6月17日",
                },
                {
                    employeeName: "张一",
                    sex: "男",
                    tel: "1369902332",
                    email: "@test",
                    jobName: "java高级开发工程师",
                    education: "Ph.D",
                    cardId: "360123xxxx",
                    deptName: "研发部",
                    address: "重庆理工大学",
                    employeeCreate: "2021年6月17日",
                },
            ],
            editTable: {},
            selectTable: [],
            dialogVisible: false,
        };
    },
    methods: {
        edit(detailInfo) {
            this.editTable = detailInfo;
            this.dialogVisible = true;
        },
        submit() {
            this.dialogVisible = false;
        },
        handleSelectionChange(selected) {
            this.selectTable = selected;
        },
    },
};
</script>
<style>
</style>