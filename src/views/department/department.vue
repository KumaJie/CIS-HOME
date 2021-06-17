<template>
	<div>
		<div>
			<el-form ref="form" :inline="true" :model="selectForm" label-width="100px">
				<el-form-item label="输入部门名称">
					<el-input v-model="selectForm.deptName"></el-input>
				</el-form-item>
			  
				<el-form-item >
					<el-button type="primary" size="small" @click="deleteDept(scope.row)">查询</el-button>
				</el-form-item>
				
				<el-form-item >
					<el-button type="primary" size="small" @click="deleteDept(scope.row)">删除</el-button>
				</el-form-item>
			</el-form>
		</div>
		
		<el-table :data="talbeData" border>
			<el-table-column type="selection"> </el-table-column>
			<el-table-column label="部门名称" prop="deptName"> </el-table-column>
			<el-table-column label="详细信息" prop="deptRemark"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" size="small" @click="dialogVisible = true">编辑</el-button>
					<el-button type="danger" size="small" @click="deleteDept(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="edit">
		  <span>
			  <el-form ref="form" :model="editForm" label-width="80px">
			    <el-form-item label="部门名称">
			      <el-input v-model="editForm.deptName"></el-input>
			    </el-form-item>
			    
			    <el-form-item label="详细描述">
			      <el-input v-model="editForm.deptRemark"></el-input>
			    </el-form-item>
			  </el-form>
		  </span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
	
</template>

<script>
export default {
    data() {
        return {
			
			selectForm: {
				deptName: '',
			},
			
			dialogVisible: false,
						
			editForm: {
			  deptName: '',
			  deptRemark: '',
			},
			
            talbeData: [
			{
				deptName: "研发部",
				deptRemark: "研发"
			},
			{
				deptName: "营销部",
				deptRemark: "营销"
			}],
        };
    },
    methods: {
		select(){
			
		},
        edit(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                    done();
                  })
                  .catch(_ => {});
              },
		deleteDept(detailInfo) {
			this.$confirm('此操作将永久删除该部门信息, 是否继续?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$message({
			            type: 'success',
			            message: '删除成功!'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消!'
			          });          
			        });
		}
    },
};
</script>

<style>
	
</style>