<template>
  <div class="content">
     <div class="box">
        <h2>lol后台管理系统</h2>
        <el-form ref='form' :rules="rules" :model="form" label-width="80px" >
            <el-form-item label="账号" prop="name">
                <el-input v-model="form.name" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item  prop="pass" label="密码">
                <el-input type="password" v-model="form.pass"></el-input>
            </el-form-item>
            <el-button @click="btn('form')">登录</el-button>
        </el-form>
     </div>
  </div>
</template>

<script>
import login from '../../api/login'
export default {
  name: '',
  data() { 
    return {
        form:{
            name:"",
            pass:""
        },
        rules:{
            name:[
                {required : true, message : "请输入有效的账号", trigger : "blur"},
                {min : 3, max : 10 , message : '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            pass:[
                {required : true, message : "请输入有效的密码", trigger : "blur"},
                {min : 6, max : 20 , message : '长度在 6 到 20 个字符', trigger: 'blur' }
            ]
        }
    }
  },
  props: {

  },
  components:{

  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods:{
    btn(form){
        // console.log(this.$refs.form)
        this.$refs[form].validate((val)=>{
            console.log(val)
            if(val){
                //调用登录接口
                login.login(this.form.name,this.form.pass).then(res=>{
                    console.log(res)
                    const code = res.data.data.code;
                    if(code == 200){
                        //获取token
                        let token = res.data.data.data.token
                        // console.log(token)
                        //把token保存到本地
                        localStorage.setItem("bai_token",token);
                        //获取用户信息
                        login.gitinfo().then(res=>{
                            let resp = res.data.data;
                            if(resp.code == 200){
                                //将获取到的信息保存到本地
                                localStorage.setItem('bai_info',JSON.stringify(resp.data))

                                this.$router.push({path : "/"})
                            }
                        })

                    }
                })
            }
        })
    }
  },
 }
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('http://120.53.31.103:84/adminstyle/img/login_bg.1de8de0c.png');
    background-size: 100% 100%;
    // padding: 1px;
}
.box{
    width: 400px;
    height: 300px;
    border: 1px solid #ddd;
    margin: 200px auto;
    h2{
        text-align: center;
        margin-top: 50px;
    }
    .el-form{
        margin-right: 30px;
        margin-top: 20px;
        .el-button{
            margin-left: 80px;
        }
    }

}
</style>