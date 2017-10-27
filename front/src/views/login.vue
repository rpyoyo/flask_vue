<template>
  <div class="bg-login" :style="bg">
    <div class="login-wraper">
      <h2>把柄</h2>
      <p>非正常人类把柄研究中心</p>
      <div>
        <i-form ref="form" :model="form" :rules="rule">
          <form-item prop="user">
            <i-input type="text" v-model="form.user" placeholder="用户名">
              <icon type="ios-person-outline" slot="prepend"></icon>
            </i-input>
          </form-item>
          <form-item prop="password">
            <i-input type="password" v-model="form.password" placeholder="密码">
              <icon type="ios-locked-outline" slot="prepend"></icon>
            </i-input>
          </form-item>
          <form-item>
            <i-button type="primary" @click="handleSubmit('form')">登录</i-button>
          </form-item>
        </i-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        form: {
          user: '',
          password: ''
        },
//        rule: {
//          user: [
//            {required: true, message: '请填写用户名', trigger: 'blur'}
//          ],
//          password: [
//            {required: true, message: '请填写密码', trigger: 'blur'},
//            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
//          ]
//        },
        bg: {
          backgroundImage: 'url(' + require('@/assets/images/bg_login.jpg') + ')'
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
            this.$router.push('/index')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bg-login {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    padding-top: 160px;
  }
  .login-wraper{
    text-align: center;
    width: 240px;
    margin: 0 auto;
    >h2,>p{
      color: white;
    }
    >h2{
      font-size: 36px;
    }
    >p{
      margin-bottom: 20px;
    }
  }
</style>
