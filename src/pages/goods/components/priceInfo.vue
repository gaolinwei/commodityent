<template>
    <div class="priceInfo">
        <el-form label-width="100px">
            <div class="btn">
                <div :class="action == true ? 'actionStyle' : ''" @click="() => { action = !action }">添加规格</div>&nbsp;&nbsp;
                <div :class="action == false ? 'actionStyle' : ''" @click="() => { action = !action }">规格值排序</div>
            </div>
            <el-form-item label="商品价格：">
                <div class="norms" v-for="(item, index) in form.skuList">
                    <!-- 操作 -->
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div>批量设置：<span class="price">销售价</span>&nbsp;&nbsp;&nbsp;<span class="price">划线价</span></div>
                        </el-col>
                    </el-row>
                    <div class="priceInfo_list bg">
                        <div>颜色</div>
                        <div>销售价格</div>
                        <div>划线价</div>
                        <div>规格编码</div>
                    </div>

                    <div class="priceInfo_list" v-for="data in item.skuSpecList">
                        <div>{{ data.specValue }}</div>
                        <div class="changeInput">
                            <el-input v-model="item.salePrice" size="mini" width="">
                                <template slot="prepend">￥</template>
                            </el-input>
                        </div>
                        <div class="changeInput">
                            <el-input v-model="data.sort" size="mini" width="">
                                <template slot="prepend">￥</template>
                            </el-input>
                        </div>
                        <div class="changeInput">
                            <el-input v-model="input1" size="mini" width="">
                            </el-input>
                        </div>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="销售价：">
                $0.02~0.06
            </el-form-item>
            <el-form-item label="划线价：">
                ￥3-5
            </el-form-item>
            <div class="ediTitle">
                图文详情
            </div>
            <el-form-item label="图文详情：">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <TextEditor />

                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>


    </div>
</template>
<script>
import TextEditor from "@/components/textEditor.vue"
export default {
    components: {
        TextEditor
    },
    props: {
        form: {
            typeof: Array,
            default: []
        }
    },
    data() {
        return {
            action: true
        }
    }
}
</script>
<style scoped lang="less">
.priceInfo {

    .ediTitle {
        font-size: 18px;
        font-weight: bold;
        color: black;
        border-bottom: 1px solid #f6f6f6;
        padding: 0 0 30px 0;

    }

    .btn {
        display: flex;
        color: #409eff;
        margin: 20px 0 20px 100px;
        cursor: pointer;

        div {
            padding: 8px;

        }

        .actionStyle {
            border-radius: 5px;
            border: 1px solid #409eff;
        }
    }

    .norms {
        border: 2px solid #f6f6f6;
        padding: 20px;

        .price {
            color: blue;
        }

        .normsList {
            display: flex;
            padding: 30px 0;
            border-bottom: 1px solid #f6f6f6;
        }
    }

    .bg {
        background-color: #f6f6f6;
    }

    .priceInfo_list {
        display: flex;
        padding: 15px;
        border-bottom: 1px solid #f6f6f6;
        width: 60%;

        div {
            flex: 1;
        }

        .changeInput {
            .el-input-group {
                width: 120px;
            }

            .el-input {
                .el-input__inner {
                    width: 120px !important;
                }
            }

            .el-input-group__prepend {
                padding: 0 10px !important;
            }
        }
    }
}
</style>