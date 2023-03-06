<template>
  <div>
    <el-button type="primary">新建商品</el-button>
    <el-form label-position="right" label-width="100px" :model="form" size="small">
      <div class="el-wh">
        <div class="el-bg">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="商品名称：">
                <el-input v-model="form.goodsName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="商品编码：">
                <el-input v-model="form.goodsCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="商品款号：">
                <el-input v-model="form.goodsType"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--  -->
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="业态：">
                <el-input v-model="form.goodsName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="上下架状态：">
                <el-select placeholder="请选择">
                  <el-option label="item.label" value="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--  -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="审核状态：">
                <el-select placeholder="请选择">
                  <el-option label="item.label" value="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否有货：">
                <el-select placeholder="请选择">
                  <el-option label="item.label" value="item.value"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="关联活动：">
                <el-input v-model="form.goodsName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <SuperTable :columns="columns" :data-source="tableData" align="center" :loading="loading" :pagination="pagination"
          checkbox @selection-change="handleSelectionChange" @pagination-change="handlePaginationChange">
          <template slot="productName" slot-scope="{ row, index }">
            <div class="productName">
              <div>
                <el-image style="width: 50px;" :src="row.productImage" :preview-src-list="[row.productImage]">
                </el-image>
              </div>
              <div class="info">
                <div>{{ row.productName }}</div>
                <div class="code">编码：{{ row.productCode }}</div>
              </div>
            </div>
          </template>

          <template slot="maxSalePrice" slot-scope="{ row }">
            {{
              (Number(row.maxSalePrice) + Number(row.minSalePrice)).toFixed(2)
            }}
          </template>

          <template slot="marketable" slot-scope="{ row }">
            {{ row.marketable ? "上架" : "下架" }}
          </template>

          <template slot="action" slot-scope="{ row }">
            <el-button icon="el-icon-search" circle size="small" @click="handleOpen('/goods/manage')"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle size="small"
              @click="handleOpen(`/goods/editInfo/${row.productCode}`)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
          </template>
        </SuperTable>
      </div>
    </el-form>
  </div>
</template>
<script>
import SuperTable from "@/components/SuperTable.vue"

import { post } from "@/utils/request"

const columns = Object.freeze([
  {
    prop: "productName",
    label: "商品信息",
    align: "left",
    width: "200px",
  },
  {
    prop: "maxSalePrice",
    label: "销售价",
  },
  {
    prop: "saleStock",
    label: "可售库存",
  },
  {
    prop: "salesVolume",
    label: "销量",
  },
  {
    prop: "marketable",
    label: "上下架状态",
  },
  {
    prop: "auditState",
    label: "审核状态",
  },
  {
    prop: "createdAt",
    label: "添加时间",
  },
  {
    prop: "action",
    label: "操作",
    width: '150px'
  },
])

export default {
  components: {
    SuperTable,
  },
  data() {
    return {
      columns,
      tableData: [],
      loading: false,
      pagination: {
        size: 10,
        total: 100,
        page: 1,
      },
      form: {
        goodsName: "",
        goodsCode: "",
        goodsType: "",
      },
    }
  },
  methods: {
    async fetchTableData() {
      this.loading = true

      const result = await post("/product/list", {})
      this.tableData = result.data.list

      this.pagination.size = result.data.size
      this.pagination.total = result.data.total
      const list = []
      for (let index = 0; index < 100; index++) {
        list.push({
          "productImage": "http://4266278ws2.zicp.fun:39757/image/420aa97cc42f47ac8f15200c91c8077a.png",
          "productCode": "NRSS-SP-004",
          "productName": "自来也",
          "minSalePrice": "70.00",
          "maxSalePrice": "70.00",
          "saleStock": null,
          "salesVolume": index,
          "marketable": 0,
          "auditState": 0,
          "createdAt": "20230227 08:32:11"
        })
      }
      this.pagination.size = 10
      this.pagination.total = 100
      this.tableData = list

      this.loading = false
    },
    handleSelectionChange(data) {
      console.log(data)
    },
    handlePaginationChange(page) {
      this.pagination.page = page
    }
  },
  created() {
    this.fetchTableData()
  },
}
</script>
<style lang="less" scoped>
.el-wh {
  margin: 20px 0;
}

.el-bg {
  background-color: #f6f6f6 !important;
  padding: 15px 0;
}

.el-input .el-input__inner {
  height: 25px !important;
}

/* .el-form-item {
    display: flex;
} */

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
}
</style>
