<template>
    <div class="goodsList">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column prop="date" label="商品信息" width="180">
            </el-table-column>
            <el-table-column prop="name" label="销售价" width="180">
            </el-table-column>
            <el-table-column prop="address" label="项目">
            </el-table-column>
            <el-table-column prop="address" label="租户">
            </el-table-column>
            <el-table-column prop="address" label="可售库存">
            </el-table-column>
            <el-table-column prop="address" label="销量">
            </el-table-column>
            <el-table-column prop="address" label="上下价状态">
            </el-table-column>
            <el-table-column prop="address" label="审核状态">
            </el-table-column>
            <el-table-column prop="address" label="添加时间">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            }]
        }
    }
}
</script>
<style scoped land="less">
.goodsList {
    margin-top: 15px;
}
</style>
