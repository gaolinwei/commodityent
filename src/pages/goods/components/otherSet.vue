<template>
    <div class="otherSet">
        <div class="ediTitle">基本信息</div>
        <el-form label-position="right" label-width="100px" :model="form" size="small">
            <el-row :gutter="20">
                <el-form-item label="配送方式：">
                    <el-checkbox>快递配送</el-checkbox>
                    <el-checkbox>到店自提</el-checkbox>
                </el-form-item>
            </el-row>
            <el-row :gutter="20">
                <el-form-item label="运费模板：">
                    <el-col :span="8">
                        <el-input size="mini"></el-input>
                    </el-col>
                </el-form-item>
            </el-row>
            <el-row :gutter="20">
                <el-form-item label="购物卡支付：">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="2">关闭</el-radio>
                </el-form-item>
            </el-row>
            <el-row :gutter="20">
                <el-form-item label="商品预售：">
                    <el-checkbox>
                        开始商品预售
                    </el-checkbox>
                </el-form-item>
            </el-row>
            <el-row :gutter="20">
                <el-form-item label="商品限购：">
                    <el-col :span="3">
                        <el-radio v-model="radio" label="1">不限够</el-radio>
                        <el-radio v-model="radio" label="2">每人每天限购</el-radio>
                        <el-radio v-model="radio" label="2">每人限购</el-radio>
                    </el-col>
                </el-form-item>
            </el-row>
            <el-form-item label="商品起购：">
                <div class="goodsPur">
                    <div>商品至少</div>
                    <el-input size="mini"></el-input>
                    <div>件起售</div>
                </div>
                <div style="font-size: 12px;">起售数量超出商品库存时，买家无法购买该商品</div>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="定时上架：">
                        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="定时下架：">
                        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <TextEditor/>
    </div>
</template>

<script>
import TextEditor from "@/components/textEditor.vue"
export default {
    components:{
        TextEditor
    },
    data() {
        return {
            form: {

            },
            options: [{
                value: "红色",
                label: "red"
            }, {
                value: "粉色",
                label: "pink"
            }],
            value1:'',
        }
    }
}
</script>

<style scoped lang="less">
.otherSet {
    .ediTitle {
        font-size: 18px;
        font-weight: bold;
        color: black;
        border-bottom: 1px solid #f6f6f6;
        padding: 0 0 15px 0;
        margin-bottom: 20px;
    }

    .goodsPur {
        display: flex;
        font-size: 12px;

        .el-input {
            width: 80px;
            margin: 0 6px;
        }
    }
}
</style>