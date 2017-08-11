/**
* Created by 杨帆 on 2017/8/11.
*/
<template>
  <div id="addMailer">
    <el-form labelWidth="120px" :model="mailForm" ref="mailForm" :rules="rule">
      <el-form-item label="收件人名称" prop="name">
        <el-input v-model="mailForm.name"></el-input>
      </el-form-item>
      <el-form-item label="收件人地址" prop="address">
        <el-input v-model="mailForm.address"></el-input>
      </el-form-item>
      <el-form-item label="预约发送时间" prop="time">
        <el-time-picker
          style="float: left"
          v-model="mailForm.time"
          placeholder="选择发送时间点">
        </el-time-picker>
      </el-form-item>
      <el-form-item label="上传图片" prop="images">
        <el-upload
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleSuccess"
          :fileList="mailForm.images"
          style="float: left"
          listType="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-button type="primary" size="large" style="width: 80%" @click="submitForm('mailForm')">
        创建任务
      </el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'addMailer',
    data() {
      return {
        imageUrl: '',
        mailForm: {
          name: '',
          address: '',
          time: '',
          images: []
        },
        rule: {
          name: [{required: true, message: '请输入收件人名称', trigger: 'submit'}],
          address: [{required: true, message: '请输入收件人地址', trigger: 'submit'}, {
            type: 'email',
            message: '请输入正确的邮箱格式',
            trigger: 'submit'
          }],
          time: [{type: 'date', required: true, message: '请选择时间', trigger: 'submit'}]
        },
        imgList: []
      }
    },
    methods: {
      formatForm(form) {
        if (form.time) {
          form.time = form.time.toLocaleTimeString()
        }
        return form
      },
      initForm() {
        this.mailForm = {
          name: '',
          address: '',
          time: ''
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('on-success', this.formatForm(this.mailForm))
            this.initForm()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleSuccess(res, file, fileList) {
        const img = {}
        img.name = res.name
        img.url = 'http://localhost:3000/' + res.path
        img.size = res.size
        img.type = res.type
        console.log(this.imgList.push(img))
      }
    }
  }
</script>
<style>

</style>
