<template>
  <div>
    <el-form :inline="true" :model="queryFrom" class="demo-form-inline">
      <el-form-item label="公告名称">
        <el-input v-model="queryFrom.noticeTitle"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input v-model="queryFrom.noticeContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch(1)">查询</el-button>
        <el-button v-if="isAdmin" type="primary" @click="onDelete">删除</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="talbeData"
      border
      @selection-change="handleSelectionChange"
      style="margin-bottom: 20px"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="公告名称" prop="noticeTitle"> </el-table-column>
      <el-table-column label="公告内容" prop="noticeContent"> </el-table-column>
      <el-table-column label="创建时间" prop="noticeCreate"> </el-table-column>
      <el-table-column label="公告人" prop="userName"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="isAdmin" type="danger" size="small" @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button type="primary" size="small" @click="seak(scope.row)"
            >预览</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 页面跳转 -->

    <el-pagination
      background
      layout="prev, pager, next"
      :total="dataTotal"
      @current-change="changePage"
    >
    </el-pagination>

    <el-dialog title="修改公告" :visible.sync="dialogFormVisible">
      <el-form :model="updateForm">
        <el-form-item label="公告标题" :label-width="formLabelWidth">
          <el-input
            v-model="updateForm.noticeTitle"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="公告内容" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="updateForm.noticeContent"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateNotice">修改</el-button>
      </div>
    </el-dialog>

    <el-dialog title="预览" :visible.sync="dialogSeakVisible" width="30%">
      <span>{{ preView }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      preView: "",
      talbeData: [],
      queryFrom: {
        noticeTitle: "",
        noticeContent: ""
      },
      dialogFormVisible: false,
      dialogSeakVisible: false,
      formLabelWidth: "120px",
      selectedTable: [],
      updateForm: {
        noticeTitle: "",
        noticeContent: ""
      },
      updateTarget: null,
      dataTotal: 0
    };
  },

  methods: {
    edit(detailInfo) {
      //打开编辑弹窗
      this.dialogFormVisible = true;
      this.updateTarget = detailInfo;
    },

    updateNotice() {
      //确定编辑
      if (this.form.name === null || this.form.concent === "") {
        this.$message({ type: "warning", message: "修改字段不能为空！" });
        return;
      }
      this.$http({
        url: "/updateNotice",
        method: "POST",
        data: {
          noticeId: this.updateTarget.noticeId,
          noticeTitle: this.updateForm.noticeTitle,
          noticeContent: this.updateForm.noticeContent
        }
      }).then(res => {
        const data = res.data;
        this.dialogFormVisible = false;
        this.$message({ type: "warning", message: data.message });
        this.select();
      });
    },

    seak(detailInfo) {
      //打开浏览弹窗
      console.log(detailInfo);
      this.dialogSeakVisible = true;
      this.preView = detailInfo.noticeContent;
    },

    onSearch(page = 1) {
      //搜索
      this.$http({
        url: "/getNotice",
        method: "GET",
        params: {
          noticeTitle: this.queryFrom.noticeTitle,
          noticeContent: this.queryFrom.noticeContent,
          page,
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
    onDelete() {
      let ids = [];
      this.selectedTable.forEach(val => {
        ids.push(val.noticeId);
      });
      if (ids.length === 0) {
        return;
      }
      this.$http
        .post("deleteNotice", {
          ids
        })
        .then(res => {
          if (res.data.status === 200) {
            this.$message({ type: "success", message: "删除成功" });
          } else {
            this.$message({ type: "warning", message: res.data.message });
          }
          this.onSearch(1);
        });
    },
    changePage(page) {
      this.onSearch(page);
    },
    handleSelectionChange(selected) {
      this.selectedTable = selected;
    }
  },
  mounted() {
    this.onSearch(1);
  },
  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>

<style>
</style>