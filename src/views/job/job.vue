<template>
  <div>
    <el-form :inline="true" :model="queryFrom" class="demo-form-inline">
      <el-form-item label="职位名称">
        <el-input v-model="queryFrom.jobName"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onQuery">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="deleteListJob">删除</el-button>
      </el-form-item>
    </el-form>

    <!-- 职位查询表单 -->
    <el-table
      :data="talbeData"
      border
      @selection-change="handleSelectionChange"
    >
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

    <!-- 修改职位 -->
    <el-dialog title="修改职位" :visible.sync="dialogFormVisible">
      <el-form :model="updateForm">
        <el-form-item label="职位名称">
          <el-input v-model="updateForm.jobName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="详细描述">
          <el-input
            v-model="updateForm.jobRemark"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensureEdite">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateForm: {
        jobName: "",
        jobRemark: ""
      },
      dialogFormVisible: false,
      queryFrom: {
        jobName: "",
        jobRemark: ""
      },
      talbeData: [],
      selectedTable: [],
      updateItemId: ""
    };
  },
  methods: {
    edit(detailInfo) {
      console.log(detailInfo);
      this.updateItemId = detailInfo.jobId;
      this.dialogFormVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    },

    deleteListJob() {
      let ids = [];
      this.selectedTable.forEach(val => {
        val.jobId && ids.push(val.jobId);
      });
      if (ids.length === 0) {
        return;
      }
      this.$http
        .post("/deleteJob", {
          ids
        })
        .then(res => {
          const data = res.data;
          if ((data.status >= 200 && data.status < 300) || data.status === 304) {
            this.$message({ type: 'success', message: "删除成功"})
          } else {
            this.$message({ type: 'warning', message: "删除失败"})
          }
          this.onQuery();
        });
    },

    ensureEdite() {
      this.$http
        .post("/updateJob", {
          jobName: this.updateForm.jobName,
          jobRemark: this.updateForm.jobRemark,
          jobId: this.updateItemId
        })
        .then(res => {
          const data = res.data;
          this.$message({ type: "info", message: data.message });
          this.onQuery();
        });
      this.dialogFormVisible = false;
    },
    onQuery() {
      this.$http
        .get("/getjobs", {
          params: {
            jobName: this.queryFrom.jobName,
            page: 1,
            size: 10
          }
        })
        .then(res => {
          const data = res.data;
          if (
            (data.status >= 200 && data.status < 300) ||
            data.status === 304
          ) {
            this.talbeData = data.data;
          } else {
            this.$message({ type: "warning", message: data.message });
          }
        });
    },
    handleSelectionChange(selected) {
      this.selectedTable = selected;
    }
  },
  mounted() {
    this.onQuery();
  }
};
</script>
<style>
</style>