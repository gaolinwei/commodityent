<template>
    <div class="goodsList">
        <el-table :data="tableData" style="width: 100%"  :header-cell-style="{background:'#eee'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column v-for="item in goodsData" :prop="item.prop" :label="item.label">
            </el-table-column>  
        </el-table>
    <div class="goodsListBot">
        <div>
            <el-checkbox v-model="checked">当页全选已选数量{{ multipleSelection.length }}</el-checkbox>
        </div>
        <div class="flex"> 
            <div>共10000条</div>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
    </div>
</template>
<script>
import "@/styles/common.less"
import axios from "axios"
export default {
    data() {
        return {
            checked:false,
            goodsData:[
            {
                prop:"date",
                label:"商品信息"
            },
            {
                prop:"price",
                label:"销售价"
            },
            {
                prop:"vendibility",
                label:"可售库存"
            },
            {
                prop:"salesVolume",
                label:"销量"
            },
            {
                prop:"priceStatus",
                label:"上下价状态"
            },
            {
                prop:"auditStatus",
                label:"审核状态"
            },
            {
                prop:"addTime",
                label:"添加时间"
            },
            {
                prop:"manipulate",
                label:"操作"
            }
            ],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            multipleSelection:[]
        }
    },
    mounted(){
          
        axios.post('/product/list',{
                       
                    }).then(res=>{
})
    },
    methods:{
        handleSelectionChange(e){
            this.checked = e.length>0?true:false

          
        }
    }
}
</script>
<style scoped land="less">
.goodsList {
    margin-top: 15px;
    
}

.goodsListBot {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
