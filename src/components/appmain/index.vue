<template>
  <div>
     <div class="main" >
        <el-breadcrumb v-show="$route.path !== '/index'" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="line" >{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
     </div>
    <div>
        
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
.main{
    position: absolute;
    top: 50px;
    left: 240px;
    right: 0;
    bottom: 0;
    background: #ddd;
}
.el-breadcrumb{
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.main .line{
    border-left: 3px solid red;
    padding-left:10px
}
</style>