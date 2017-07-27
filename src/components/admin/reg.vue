<template>
  <div class="loginwrap">
    <div class="loginbox">
      <Form ref="regFrom" :model="regFrom" :rules="loginRules">
        <Form-item prop="userEmail">
          <Input type="text" v-model="regFrom.userEmail" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="userPwd">
          <Input type="password" v-model="regFrom.userPwd" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="userPwdCk">
          <Input type="password" v-model="regFrom.userPwdCk" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="loginSub('regFrom')">注册</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  data () {
    const validatePwd = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入密码'));
      }else{
        if(this.regFrom.userPwd !== ''){
          this.$refs.regFrom.validateField('userPwdCk');
        }
        callback();
      }
    };
    const validatePwdCk = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('请再次输入密码'));
      }else if(value !== this.regFrom.userPwd){
        callback(new Error('两次输入密码不一致'));
      }else{
        callback();
      }
    };
    return {
      regFrom:{
        userEmail:'',
        userPwd:'',
        userPwdCk:''
      },
      loginRules:{
        userEmail:[
          { required: true, message:'请输入邮箱 ', trigger:'blur'},
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        userPwd:[
          {  validator: validatePwd, trigger:'blur'},
        ],
        userPwdCk:[
          { validator: validatePwdCk, trigger:'blur'}
        ]
      }
    }
  },
  computed:{
    ...mapActions({
      reg: 'reg',

    }),

  },
  methods: {
    loginSub(name){
      this.$refs[name].validate((valid) => {
        if(valid){
          this.$store.dispatch('reg', this.regFrom);
          this.$Message.success('登录成功！')
          this.$router.push('/login')          
        } else {
          this.$Message.error('登录失败！');
        }
      })
    }

  },
  mounted() {

  }
}
</script>
