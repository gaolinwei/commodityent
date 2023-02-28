<template>
    <div class="goodsList">
        <el-table :data="tableData" style="width: 100%" :header-cell-style="{ background: '#eee' }"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column v-for="item in goodsData" :prop="item.prop" :label="item.label">
                <template #default="{ row }">
                    <div v-if="item.prop === 'productName'" class="productName">
                        <div>
                            <img :src="row.productImage" alt="">
                        </div>
                        <div class="info">
                            <div>{{ row.productName }}</div>
                            <div class="code">编码：{{ row.productCode }}</div>
                        </div>
                    </div>

                    <div v-else>{{ row[item.prop] }}</div>
                </template>

            </el-table-column>

        </el-table>
        <div class="goodsListBot">
            <div>
                <el-checkbox v-model="checked">当页全选已选数量{{ multipleSelection.length }}</el-checkbox>
            </div>
            <div class="flex">
                <div>共10000条</div>
                <el-pagination background layout="prev, pager, next" :total="1000">
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
            pageNum: 0,
            pageSize: 0,
            total: 0,
            checked: false,
            goodsData: [
                {
                    prop: "productName",
                    label: "商品信息"
                },
                {
                    prop: "maxSalePrice",
                    label: "销售价"
                },
                {
                    prop: "saleStock",
                    label: "可售库存"
                },
                {
                    prop: "salesVolume",
                    label: "销量"
                },
                {
                    prop: "marketable",
                    label: "上下架状态"
                },
                {
                    prop: "auditState",
                    label: "审核状态"
                },
                {
                    prop: "createdAt",
                    label: "添加时间"
                },
                {
                    prop: "createdAt",
                    label: "操作"
                }
            ],
            tableData: [{
                productName: '2016-05-02',
                maxSalePrice: '王小虎',
                marketable: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
        }
    },
    mounted() {

        axios.post('/product/list', {
        }).then(res => {
            const { list, pageNum, pageSize, total } = res.data.data;
            if (res.data.code !== 200) return

            console.log(list.length);
            let newList = list.map((item) => {
                console.log(item.marketable == 0 ? "下架" : "上架", "xxxxx")
                return {
                    productName: item.productName,
                    productCode: item.productCode,
                    maxSalePrice: `${item.maxSalePrice}-${item.minSalePrice}`,
                    saleStock: item.saleStock,
                    salesVolume: item.salesVolume,
                    marketable: item.marketable == 0 ? "下架" : "上架",
                    auditState: item.auditState,
                    createdAt: item.createdAt,
                    productImage: item.productImage
                }
            })
            this.tableData = newList;


        })
    },
    methods: {
        handleSelectionChange(e) {
            this.checked = e.length > 0 ? true : false


        }
    }
}
</script>
<style scoped lang="less">
.goodsList {
    margin-top: 15px;

}

.goodsListBot {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.productName {
    display: flex;

    .info {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .code {
        font-size: 12px;
    }

    img {
        width: 50px;
    }
}
</style>
