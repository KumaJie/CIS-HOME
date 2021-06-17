# 使用说明

大致的框架已经搭建完了，有7个部分

| 总体功能 |    对应文件    |
| :------: | :------------: |
|   登录   |      暂无      |
| 用户管理 |    user.vue    |
| 部门管理 | department.vue |
| 职位管理 |    job.vue     |
| 员工管理 |  employee.vue  |
| 公告管理 |   notice.vue   |
| 下载中心 |  downLoad.vue  |

## 如何使用

`git clone`或下载下来之后

1. `cd`到当前目录
2. `npm install`
3. `npm run serve`
4. 输入服务器地址到浏览器即可

## 如何修改

目前功能比较简单，只涉及表单操作，以下面代码为例

```vue
<el-table :data="talbeData" border>
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="部门名称" prop="deptName"> </el-table-column>
        <el-table-column label="详细信息" prop="deptRemark"> </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" size="small" @click="edit(scope.row)"
                    >编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
```

`tableData`是一个对象数组，获取数据后，应形似如下代码

```json
tableData:[{
    deptName: "研发部",
    deptRemark: "负责研发"
}]
```

所以只需要修改`tableData`数组就可以对表单进行修改，表单中的`prop`就是数组中某个对象的具体属性名称，**切记`prop`与`tableData`里的值一定要对应!**
