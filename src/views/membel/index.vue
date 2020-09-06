<template>
  <div>
     <el-table :data="list" height="380" border style="width: 100%" >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
        <el-table-column prop="name" label="会员姓名" ></el-table-column>
        <el-table-column prop="birthday" label="会员生日"></el-table-column>
        <el-table-column prop="phone" label="手机号码" width="110"></el-table-column> 
        <el-table-column prop="integral" label="可用积分"></el-table-column> 
        <el-table-column prop="money" label="开卡金额"></el-table-column> 
        <el-table-column prop="payType" label="支付类型" ></el-table-column> 
        <el-table-column prop="address" label="会员地址" width="180"></el-table-column> 
        <el-table-column label="操作" width="150">
                <template slot-scope="scope"> 
                        <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDele(scope.row.id)">删除</el-button>
                </template> 
        </el-table-column> 
      </el-table>
      <div>
        <el-pagination
            @size-change="fetchData" @current-change="fetchData"
                :current-page="currentPage"
                :page-sizes="[10]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="total">
    </el-pagination>
      </div>
  </div>
</template>

<script>
import memberapp from '../../api/member'

export default {
  name: '',
  data() { 
    return {
        list:[],
        total:0,
        currentPage:1,
        pageSize:10,
        searchMap:{}
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
        this.created()
        this.fetchData()
  },
  methods:{
        created(){
            memberapp.getlist().then(res=>{
                this.list = res.data.data.data
            })
        },
        fetchData(){
            memberapp.search(this.currentPage,this.pageSize,this.searchMap).then(res=>{
                const resq = res.data
                this.total = resq.data.total
                this.list = resq.data.row
                console.log(this.list,this.total)
                console.log(res)
            })
        }
  },
}
</script>

<style lang="scss" scoped>
.el-pagination{
        background: #fff;
}
</style>