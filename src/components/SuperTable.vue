<template>
  <div>
    <el-table
      v-bind="$attrs"
      :data="getDataSource"
      :style="`width: ${width}`"
      v-loading="loading"
      element-loading-text="拼命加载中"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" v-if="checkbox"></el-table-column>
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :align="column.align || align"
      >
        <template slot-scope="{ row, $index }">
          <slot :name="column.prop" :row="row" :index="$index">
            {{ row[column.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination" v-if="pagination.total">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="pagination.size"
        :total="pagination.total"
        :current-page="pagination.page"
        @current-change="handlePaginationPageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: { //列表数据
      type: Array,
      default: [],
    },
    dataSource: { //表头数据匹配
      type: Array,
      default: [],
    },
    width: { //宽度
      type: String,
      default: "100%",
    },
    align: { //表格对齐方式
      type: String,
      default: "left",
    },
    loading: { //loading加载状态
      type: Boolean,
      default: false,
    },
    checkbox: { //复选框是否展示
      type: Boolean,
      default: false,
    },
    pagination: { 
      type: Object,
      default: {
        size: 0,
        total: 0,
        page: 1
      }
    }
  },
  computed: {
    getDataSource() {
      const index = this.pagination.size * (this.pagination.page - 1)
      return this.dataSource.slice(index, index + this.pagination.size)
    }
  },
  methods: {
    handleSelectionChange(...args) {
      this.$emit("selection-change", ...args)
    },

    // 分页相关
    handlePaginationPageChange(val) {
      this.$emit("pagination-change", val)
    }
  },
}
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}
</style>
