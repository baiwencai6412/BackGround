<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <template>
        <el-table :data="list" stripe style="width: 100%">
          <el-table-column prop="id" label="#" width="200"></el-table-column>
          <el-table-column prop="birthday" label="注册日期" width></el-table-column>
          <el-table-column prop="name" label="用户姓名" width></el-table-column>
          <el-table-column prop="address" label="注册地址"></el-table-column>
        </el-table>
      </template>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
  

<script>
import shop from "../api/shopping";
import menber from '../api/member'
import member from '../api/member';
export default {
  name: "",
  data() {
    return {
      list: [],
      total: 0,
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {
    this.shoplist();
  },
  mounted() {},
  methods: {
    shoplist() {
      // shop.shopping().then(res=>{
      //   console.log(res)
      //   this.list = res.data
      //   console.log(this.list)
      // })
      shop.count().then(res => {
        console.log(res);
        this.total = res.data.count;
      });
      member.getlist().then(res=>{
        console.log(res)
        this.list = res.data.data.data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  padding: 0px !important;
  line-height: 50px;
}
</style>