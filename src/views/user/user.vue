<template>
  <div>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="queryForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="queryForm.status" placeholder="状态">
          <el-option
            v-for="status in statusAndCode"
            :key="status.code"
            :label="status.permName"
            :value="status.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryListUser(1)">查询</el-button>
        <el-button v-if="isAdmin" type="danger" @click="deleteUser">删除</el-button>
      </el-form-item>
    </el-form>

    <el-table
      class="table"
      :data="talbeData"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="登录名" prop="loginName"> </el-table-column>
      <el-table-column label="密码" prop="userPwd"> </el-table-column>
      <el-table-column label="用户名" prop="userName"> </el-table-column>
      <el-table-column label="状态" prop="status"> </el-table-column>
      <el-table-column label="创建时间" prop="userCreate"> </el-table-column>
      <el-table-column label="操作" v-if="isAdmin">
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

    <el-pagination
      background
      layout="prev, pager, next"
      :total="dataTotal"
      @current-change="changePage"
    >
    </el-pagination>

    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="updatedForm">
        <el-form-item label="姓名">
          <el-input
            v-model="updatedForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="登录名">
          <el-input
            v-model="updatedForm.loginName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="updatedForm.status" placeholder="状态">
            <el-option
              v-for="status in statusAndCode"
              :key="status.code"
              :label="status.permName"
              :value="status.code"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { settingMixin } from "./statusSettingMixin";
export default {
  mixins: [settingMixin],
  data() {
    return {
      dialogFormVisible: false,
      dialogTitle: "",
      updatedForm: {
        userName: "",
        loginName: "",
        status: ""
      },
      queryForm: {
        userName: "",
        status: ""
      },
      talbeData: [],
      dataTotal: 0,
      selectedTable: [],
      updateTarget: null,
    };
  },

  methods: {
    edit(target) {
      this.updateTarget = target;
      this.dialogFormVisible = true;
    },
    updateUserInfo() {
      if (
        this.updatedForm.loginName === "" &&
        this.updatedForm.userName === ""
      ) {
        this.$message({ type: "warning", message: "修改字段不能全为空！" });
        return;
      }
      this.$http({
        url: "/updateUser",
        method: "POST",
        data: {
          userId: this.updateTarget.userId,
          loginName: this.updatedForm.loginName,
          userName: this.updatedForm.userName,
          status: this.updatedForm.status
        }
      }).then(res => {
        const data = res.data;
        this.dialogFormVisible = false;
        if (data.status === 200) {
          this.$message({ type: "success", message: data.message });
        } else {
          this.$message({ type: "warning", message: data.message });
        }
        this.queryListUser();
        this.dialogFormVisible = false;
      });
    },

    queryListUser(curPage = 1) {
      //查询
      console.log(curPage);
      this.$http({
        url: "/getUser",
        method: "GET",
        params: {
          userName: this.queryForm.userName,
          status: this.queryForm.status,
          page: curPage,
          size: this.$STATICE_SETTING.pageSize
        }
      }).then(res => {
        const data = res.data;
        if ((data.status >= 200 && data.status < 300) || data.status === 304) {
          this.talbeData = data.data.list;
          this.dataTotal = data.data.total;
        } else {
          this.$message({ type: "warning", message: data.message });
        }
      });
    },

    deleteUser() {
      let ids = [];
      this.selectedTable.forEach(val => {
        ids.push(val.userId);
      });
      if (ids.length === 0) {
        return;
      }
      this.$confirm("此操作将永久删除该部门信息，是否继续", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: "/deleteUser",
            method: "POST",
            data: {
              ids
            }
          }).then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.queryListUser();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消！"
          });
        });
    },

    handleSelectionChange(selected) {
      this.selectedTable = selected;
    },
    changePage(page) {
      this.queryListUser(page);
    }
  },
  mounted() {
    this.queryListUser();
  },
  computed: {
    ...mapGetters(['isAdmin'])
  }
};
</script>

<style lang="css" scoped>
.table {
  margin-bottom: 20px;
}
</style>