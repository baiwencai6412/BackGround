<template>
     <div class="header">
        <div class="logo">
            <router-link to="/">
                <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt />
                <span class="spans">
                    lol会员管理系统
                </span>
            </router-link>
        </div>
        <div class="info">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          {{name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="checkOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
     </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        name:""
    }
  },
  props: {

  },
  components:{

  },
  computed: {

  },
  created() {
    let info = JSON.parse(localStorage.getItem('bai_info'));
    this.name = info.name !== 'undefined' ? info.name : "";
  },
  mounted() {

  },
  methods: {
      handle(command){
          console.log(command)
          switch(command){
            case "changePass" : 
                this.changePass();
                break;
            case "checkOut" : 
                this.checkOut();
                break;    
          }
          console.log(command)

      },
      changePass(){
          console.log("修改密码")
      },
      checkOut(){
          console.log("退出登录")
          localStorage.removeItem('bai_token')

          localStorage.removeItem('bai_info')

          this.$router.push('/login')
          
      }
  },
};
 
</script>

<style lang="scss" scoped>
.header{
    position: absolute;
    top: 0;
    height: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #2d3a4b;
    .logo{
        line-height: 50px;
         margin-left: 50px;
        // color: #fff;
        text-decoration: none;
        
        img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 10px;
        }
        .spans{
            text-decoration: none;
            color:#fff
        }
    }
    .info{
        position: absolute;
        right: 30px;
        top: 15px;
        float: right;
        border: 1px solid #fff;
        border-radius: 3px;
        .el-dropdown-link{
            color: #fff;
        }
    }
}
</style>