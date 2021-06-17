<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      
      <el-form-item label="职位名称">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item> 

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">删除</el-button>
      </el-form-item>

    </el-form>

    <!-- 职位查询表单 -->
    <el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="职位名称" prop="jobName"> </el-table-column>
        <el-table-column label="详细信息" prop="jobRemark"> </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" size="small" @click="edit(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 修改职位 -->
    <el-dialog title="修改职位" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="职位名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="详细描述">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
      </div>
    </el-dialog>


</div>

</template>

<script>
export default {
    data() {
        return {
          form: {
          name: '',
          region: '',
        },
          dialogFormVisible: false,
            formInline: {
          user: '',
          region: ''
        },
            talbeData: [
              {
                jobName: '职员',
                jobRemark: '职员'
              },
              {
                jobName:'java开发工程师',
                jobRemark:'java开发工程师'
              },
              {
                jobName:'java中级开发工程师',
                jobRemark:'java中级开发工程师'
              },
              {
                jobName:'java高级开发工程师',
                jobRemark:'java高级开发工程师'
              },
            ],
        };
    },
    methods:{
        edit(detailInfo){
            console.log(detailInfo)
            this.dialogFormVisible = true;
        },
        onSubmit() {
        console.log('submit!');
      }
    }
};
</script>
<style>
</style>