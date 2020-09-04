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
            <el-dropdown>
                <span class="el-dropdown-link">
                    秦军<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><i class="el-icon-edit"></i>修改密码</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-s-fold"></i>推出系统</el-dropdown-item>
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

  },
 }
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