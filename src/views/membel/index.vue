<template>
  <div class="member">
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" height="532" border style="width: 100%">
      <!--type="index" 获取索引值，从1开始； label 显示的标题; prop 数据字段名； width 列的宽度 -->
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="130"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span>{{ scope.row.payType | payTypeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="memberdata"
        @current-change="memberdata"
        :current-page="currentPage"
        :page-sizes="[10,20,50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import member from "../../api/member";
const payTypeOptions = [
  { type: "1", name: "现金" },
  { type: "2", name: "微信" },
  { type: "3", name: "支付宝" },
  { type: "4", name: "银行卡" }
];

export default {
  name: "",
  data() {
    return {
      // mlist: [],
      list: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      searchMap: {},
      name: "",
      form: ""
    };
  },
  filters: {
    payTypeFilter(type) {
      const obj = payTypeOptions.find(obj => obj.type === type);
      return obj ? obj.name : null;
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.memberdata();
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    onSubmit() {},
    memberdata() {
      member.getlist().then(res => {
        console.log(res);
        this.list = res.data.data.data;
      });
      member
        .search(this.currentPage, this.pageSize, this.searchMap)
        .then(res => {
          console.log(res);
          const resp = res.data;
          this.total = resp.data.total;
          this.list = resp.data.row;
          console.log(this.total, this.list);
        });
    },
    handleEdit(data) {
      console.log(data);
    },
    handleDele() {}
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.member {
  margin-top: 20px;
}
</style>