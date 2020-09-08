<template>
  <div>
    <div class="navber">
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/index">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- <el-menu-item index="/membel">
          <i class="el-icon-user-solid"></i>
          <span slot="title">会员管理</span>
          <template slot="">
            
          </template>
        </el-menu-item>-->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>会员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/userlist">用户列表</el-menu-item>
            <el-menu-item index="//Food">商家列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="/the_order">食品列表</el-menu-item>
          <el-submenu index="/merchant">
            <template slot="title">订单列表</template>
          </el-submenu>
          <el-menu-item index="1-3">管理员列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="/goods">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/staff">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/supplier">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.navber {
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 240px;
  // height: 100%;
  background: #545c64;
}
</style>