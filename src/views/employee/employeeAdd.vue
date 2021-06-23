<template>
  <el-form :model="formData" label-position="right" label-width="100px">
    <el-row>
      <el-col :span="10"
        ><el-form-item label="姓名">
          <el-input v-model="formData.employeeName"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="身份证号码">
          <el-input v-model="formData.cardId"></el-input> </el-form-item
      ></el-col>
    </el-row>

    <el-row>
      <el-col :span="10"
        ><el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="职位">
          <el-select v-model="formData.jobId">
            <el-option
              v-for="item in jobNameAndIds"
              :key="item.jobName"
              :label="item.jobName"
              :value="item.jobId"
            />
          </el-select> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="学历">
          <el-input v-model="formData.education"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="邮箱">
          <el-input v-model="formData.email"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="手机">
          <el-input v-model="formData.tel"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="电话">
          <el-input v-model="formData.phone"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="政治面貌">
          <el-input v-model="formData.party"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="QQ号码">
          <el-input v-model="formData.qqNum"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="联系地址">
          <el-input v-model="formData.address"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="邮政编号">
          <el-input v-model="formData.postCard"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="出生日期">
          <el-date-picker
            v-model="formData.birthday"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="民族">
          <el-input v-model="formData.race"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="所学专业">
          <el-input v-model="formData.speciality"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="爱好">
          <el-input v-model="formData.hobby"></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"
        ><el-form-item label="备注">
          <el-input v-model="formData.remark"></el-input> </el-form-item
      ></el-col>
      <el-col :span="10" :offset="2"
        ><el-form-item label="所属部门">
          <el-select v-model="formData.deptId">
            <el-option
              v-for="item in deptNameAndIds"
              :key="item.deptName"
              :label="item.deptName"
              :value="item.deptId"
            />
          </el-select> </el-form-item
      ></el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { settingMixin } from "./settingMixin";
export default {
  mixins: [settingMixin],
  data() {
    return {
      formData: {
        employeeName: "",
        cardId: "",
        sex: "",
        jobId: "",
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
        deptId: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$http.post("insertEmployee", this.formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>