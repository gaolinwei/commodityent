<template>
    <div class="otherSet">
        <div class="ediTitle">基本信息</div>
        <el-row :gutter="20">
            <el-form-item label="配送方式：">
                <el-radio v-model="form.delivery" label="1">快递配送</el-radio>
                <el-radio v-model="form.delivery" label="2">到店自提</el-radio>
            </el-form-item>
        </el-row>
        <el-row :gutter="20">
            <el-form-item label="运费模板：">
                <el-col :span="8">
                    <el-input size="mini" v-model="form.freight"></el-input>
                </el-col>
            </el-form-item>
        </el-row>
        <el-row :gutter="20">
            <el-form-item label="购物卡支付：">
                <el-radio v-model="form.shoppingPay" label="1">开启</el-radio>
                <el-radio v-model="form.shoppingPay" label="2">关闭</el-radio>
            </el-form-item>
        </el-row>
        <el-row :gutter="20">
            <el-form-item label="商品预售：">
                <el-checkbox v-model="form.commodityPre">
                    开始商品预售
                </el-checkbox>
            </el-form-item>
        </el-row>
        <el-row :gutter="20">
            <el-form-item label="商品限购：">
                <el-col :span="3">
                    <el-radio v-model="form.commodityLimiter" label="1">不限够</el-radio>
                    <el-radio v-model="form.commodityLimiter" label="2">每人每天限购</el-radio>
                    <el-radio v-model="form.commodityLimiter" label="3">每人限购</el-radio>
                </el-col>
            </el-form-item>
        </el-row>
        <el-form-item label="商品起购：">
            <div class="goodsPur">
                <div>商品至少</div>
                <el-input size="mini" v-model="form.commodityPurchase"></el-input>
                <div>件起售</div>
            </div>
            <div style="font-size: 12px;">起售数量超出商品库存时，买家无法购买该商品</div>
        </el-form-item>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-form-item label="定时上架：">
                    <el-date-picker v-model="form.groundingDate" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-form-item label="定时下架：">
                    <el-date-picker v-model="form.undercarriageDate" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        form: {
            typeof: Object,
            default: {}
        }
    },


    methods: {

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