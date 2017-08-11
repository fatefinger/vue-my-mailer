/**
* Created by 杨帆 on 2017/8/8.
*/
<template>
  <div id="conf">
    <el-row>
      <el-col :span="24">
        <h1>my-mailer操作台</h1>
        <el-row :gutter="20" style="padding-bottom: 10px">
          <el-col :span="4" :offset="15">
            <el-button type="primary" icon="plus" @click="dialogVisible = true">新建任务</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3">
            <el-table
              border
              :data="tableData">
              <el-table-column
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                property="name"
                label="收件人姓名"
                width="120">
              </el-table-column>
              <el-table-column
                property="address"
                label="收件人地址"
                header-align="left"
                width="240">
                <template scope="scope" style="float: left">
                  <el-icon name="message"></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.address }}</span>
                </template>
              </el-table-column>
              <el-table-column
                property="time"
                label="预约发送时间"
                header-align="left"
                width="240">
                <template scope="scope" style="float: left">
                  <el-icon name="time"></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
              </el-table-column>
              <el-table-column
                property="images"
                label="图片列表">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="新建任务" :visible.sync="dialogVisible" size="tiny">
      <add-mailer @on-success="onSuccess"></add-mailer>
    </el-dialog>
  </div>
</template>
<script>
  import AddMailer from '../components/add-mailer/index.vue'

  export default {
    components: {AddMailer},
    name: 'conf',
    data () {
      return {
        tableData: [],
        dialogVisible: false
      }
    },
    methods: {
      onSuccess (data) {
        console.log(data)
        this.dialogVisible = false
        this.tableData.push(data)
      }
    }
  }
</script>

