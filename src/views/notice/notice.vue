<template>
  <div>
    <el-form :inline="true" :model="notice" class="demo-form-inline">
      <el-form-item label="公告名称">
        <el-input v-model="notice.name"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input v-model="notice.concent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
        <el-button type="primary" @click="onDelete">删除</el-button>
      </el-form-item>
    </el-form>

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
          <el-button type="primary" size="small" @click="seak(scope.row)"
            >预览</el-button
          >
        </template>
      </el-table-column>
    </el-table>

<!-- 页面跳转 -->
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>

    <el-dialog title="添加公告" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="公告标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.concent"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog
      title="预览"
      :visible.sync="dialogSeakVisible"
      width="30%"
      :before-close="handleClose">
      <span>{{preView}}</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        preView: "",
      talbeData: [
        {
          noticeTitle: "徐家乐",
          noticeContent: "王祥是sb",
          noticeCreate: "dfdf",
          userId: "45",
        },
        {
          noticeTitle: "徐家乐",
          noticeContent: "徐家乐是帅哥",
          noticeCreate: "222",
          userId: "46",
        }
      ],
      currentPage: 4,
      notice: {
        name: "",
        concent: "",
      },
      dialogFormVisible: false,
      dialogSeakVisible:false,
      form: {
        name: "",
        concent: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    edit(detailInfo) {
      console.log(detailInfo);
      this.dialogFormVisible = true;
    },
    seak(detailInfo) {
      console.log(detailInfo);
      this.dialogSeakVisible=true;
      this.preView = detailInfo.noticeContent
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSearch() {
      console.log("search!");
    },
    onDelete() {
      console.log("delete!");
    },
  },
};
</script>

<style>
</style>