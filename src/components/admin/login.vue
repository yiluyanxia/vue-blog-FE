<template>
  <div class="loginwrap">
    <div class="loginbox">
      <Form ref="loginFrom" :model="loginFrom" :rules="loginRules">
        <Form-item prop="userEmail">
          <Input type="text" v-model="loginFrom.userEmail" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="userPwd">
          <Input type="password" v-model="loginFrom.userPwd" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          {{info}}
          <Button type="primary" @click="loginSub('loginFrom')">登录</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  data () {
    return {
      info:'',
      loginFrom:{
        userEmail:'',
        userPwd:''
      },
      loginRules:{
        userEmail:[
          { required: true, message:'请填写用户名', trigger:'blur'}
        ],
        userPwd:[
          { required: true, message:'请填写密码', trigger:'blur'},
        ]
      }
    }
  },
  computed:{
    ...mapActions({
      login: 'login',
    }),

  },
  methods: {
    // doLogin(){
    //     if (!this.name.length) return this.info = '请输入正常的用户名'
    //     if (!this.pwd.length) return this.info = '请输入正常的密码'
    //
    //     this.login({name: this.name, pwd: this.pwd})
    //       .then(() => {
    //         const date = new Date(Date.now() + 60000 * 30)
    //         set('user', this.name, date, '/', window.location.hostname)
    //         this.$router.push({path: '/console'})
    //       })
    //       .catch(msg => this.info = msg)
    //   },
    // this.login({name: name, password: password}).then((res) => {
    //             this.info = '正在登录中...'
    //             this.set_user(res.data)
    //             this.$router.push({name: 'posts'})
    //         }).catch((err) => {
    //             console.log(err)
    //             this.info = '登录失败， 请重新登录'
    //         })
    loginSub(name){
      const self = this
      this.$refs[name].validate((valid) => {
        if(valid){
          this.$store.dispatch('login', this.loginFrom).then(res =>{
            console.log('登录成功',res);
            if(res.data.state===1){
              this.$router.push({name:'dashboard'})
            }else{
              alert(res.data.result)
            }
          })

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
