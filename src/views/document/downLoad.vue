<template>
  <div>
    <el-form :inline="true" :model="formData">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button v-if="isAdmin" type="danger" @click="deleteSelection">删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="talbeData"
      border
      class="table"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="标题" prop="documentTitle" align="center">
      </el-table-column>
      <el-table-column label="创建时间" prop="documentCreate" align="center">
      </el-table-column>
      <el-table-column label="创建人" prop="userId" align="center">
      </el-table-column>
      <el-table-column label="描述" prop="documentRemark" align="center">
      </el-table-column>
      <el-table-column label="操作" width="90px" align="center" v-if="isAdmin">
        <template slot-scope="scope">
          <el-button type="danger" size="small" @click="edit(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="下载" width="90px" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="downLoad(scope.row)"
            >下载</el-button
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
    <el-dialog :visible.sync="dialogFormVisible" @close="dialogclose">
      <el-form :model="formData">
        <el-form-item label="文档标题">
          <el-input
            v-model="formData.documentTitle"
            style="width: 300px"
          ></el-input>
        </el-form-item>
        <el-form-item label="文档描述">
          <el-input
            type="textarea"
            rows="10"
            v-model="formData.documentRemark"
          ></el-input>
        </el-form-item>
        <el-form-item label="文档">
          <br /><el-upload
            class="upload-demo"
            action="http://localhost:8080/updateDocs"
            :data="formData"
            :headers="headers"
            ref="upLoad"
            :auto-upload="false"
            :on-change="fileChange"
            :limit="1"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogclose">取 消</el-button>
        <el-button type="primary" @click="change">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTokenFromStorage } from "@/utils/storage";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      formData: {},
      talbeData: [],
      flag: false,
      fileList: [],
      multipleSelection: [], //存放已选择的数据
      dialogFormVisible: false,
      headers: {
        Authorization: getTokenFromStorage()
      },
      dataTotal: 20
    };
  },
  methods: {
    // 点击修改按钮触发
    edit(detailInfo) {
      this.dialogFormVisible = true;
      this.formData = { ...detailInfo };
      delete this.formData.documentCreate;
      this.fileList.push({ name: this.formData.documentName, url: "" });
    },
    // 改变上传文件
    fileChange(file, fileList) {
      this.fileList.pop();
      this.flag = true;
      this.fileList = fileList;
      this.getDoc(1);
    },
    // 保存修改
    change() {
      if (this.flag) {
        this.$refs.upLoad.submit();
        setTimeout(() => {
          this.getDoc(1);
        }, 1000);
      } else {
        this.$http.post("/updateDocsText", this.formData).then(e => {
          this.getDoc(1);
        });
      }
      this.dialogFormVisible = false;
    },
    //关闭对话框
    dialogclose() {
      this.fileList = [];
      this.formData = {};
      this.dialogFormVisible = false;
      this.getDoc(1);
    },
    // 下载
    // 存在问题！！
    downLoad(detailInfo) {
      this.$http.post("/downLoad", detailInfo).then(res => {
        const url = res.data.message;
        let link = document.createElement("a");
        // 将url转成blob地址，
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
            // 将链接地址字符内容转变成blob地址
            link.href = URL.createObjectURL(blob);
            console.log(link.href);
            link.download = detailInfo.documentTitle;
            document.body.appendChild(link);
            link.click();
          });
      });
    },
    // 获取文档
    getDoc(page = 1) {
      this.$http
        .get("getDocs", {
          params: {
            page
          }
        })
        .then(res => {
          this.talbeData = res.data.data.list;
          this.dataTotal = res.data.data.total;
        });
    },
    changePage(page) {
      this.getDoc(page);
    },
    // 删除
    deleteSelection() {
      if (this.multipleSelection.length == 0)
        return this.$message.error("请选择要删除的文档");
      this.$confirm("此操作将永久删除选中的所有文档, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let ids = [];
          for (var i = 0; i < this.multipleSelection.length; i++) {
            ids.push(this.multipleSelection[i].documentId);
          }
          this.$http.post("/deleteDocs", { ids }).then(e => {
            if (e.data.message == "删除成功") {
              this.$message.success("删除成功");
            } else {
              this.$message.error("删除失败");
            }
            this.getDoc(1);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //搜索
    search() {
      this.$http
        .get("getDocs", {
          params: {
            documentTitle: this.title
          }
        })
        .then(res => {
          this.talbeData = res.data.data.list;
          this.dataTotal = res.data.data.total;
        });
    },
    // 点击多选框发生的变化
    handleSelectionChange(val) {
      this.multipleSelection = val; //给定义的数组赋值
    }
  },
  mounted() {
    this.getDoc(1);
  },
  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>
<style>
.table {
  margin-bottom: 20px;
}
</style>