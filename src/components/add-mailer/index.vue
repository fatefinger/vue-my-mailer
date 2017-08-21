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
          :on-success="handleSuccess"
          ref="upload"
          style="float: left"
          listType="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
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
        mailForm: {
          name: '',
          address: '',
          time: '',
          images: []
        },
        rule: {
          name: [
            {required: true, message: '请输入收件人名称', trigger: 'submit'}
          ],
          address: [
            {required: true, message: '请输入收件人地址', trigger: 'submit'},
            {type: 'email', message: '请输入正确的邮箱格式', trigger: 'submit'}
          ],
          time: [{type: 'date', required: true, message: '请选择时间', trigger: 'submit'}]
        }
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
          time: '',
          images: []
        }
      },
      submitForm(formName) {
        let that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if ((xhr.status >= 200) && (xhr.status < 300) || xhr.status === 304) {
                  console.log(xhr.responseText)
                } else {
                  console.log('失败' + xhr.status)
                }
              }
            }

            xhr.open('post', '/mail', true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(that.mailForm))
            that.$emit('on-success', that.formatForm(that.mailForm))
            that.initForm()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleSuccess(res, file) {
        let item = {
          file: '',
          url: '',
          path: ''
        }
        console.log(res)
        item.path = res.path.split('\\').pop()
        item.file = file.name
        item.url = file.url
        console.log(item)
        this.mailForm.images.push(item)
      }
    }
  }
</script>
