<template>
    <div class="edit">
        <el-form ref="form" :model="form">
            <BasicInfo :data="producDetali" :form="form" ref="basicInfo" @initBasicInfo="initBasicInfo"
                @removeImage="handleRemoveImage" @headleAddImage="headleAddImage" />
            <SpecsInfo :form="form" />
            <PriceInfo :form="form" />
            <OtherSet :form="form" />
        </el-form>
        <div>
            <el-button @click="submit()">提交</el-button>
        </div>
    </div>
</template>
<script>
import BasicInfo from "../components/basicInfo.vue"
import SpecsInfo from "../components/specsInfo.vue"
import PriceInfo from "../components/priceInfo.vue"
import OtherSet from "../components/otherSet.vue"
import { post } from "@/utils/request.js"
export default {
    components: {
        BasicInfo,
        SpecsInfo,
        PriceInfo,
        OtherSet
    },
    data() {
        return {
            producDetali: {},
            form: {
                itemNo: "",//商品款号
                productName: "",  //商品名称
                storeClassification: "",//店铺分类
                weight: "",//商品重量
                score: "",//商品评分
                imageList: [],
                specType: "",
                delivery: "",//配送方式
                freight: "",//运费模板
                shoppingPay: "",// 支付方式
                commodityPre: null,//商品预售
                commodityLimiter: "",//商品限购：
                commodityPurchase: "",//商品起购
                groundingDate: "",//上架日期
                undercarriageDate: "",//下架日期
                popularCommodity: [
                    {
                        value: '1',
                        label: '选项1'
                    },
                    { value: "2", label: '选项2' }
                ], value: '', //热门商品
            },
        }
    },
    methods: {
        submit() {
            console.log(this.form, "ffffff")
        },
        async initData() {
            const { data, code } = await post('/product/detail', { "productCode": this.$route.params.id })
            if (code !== 200) return
            this.producDetali = data;
            this.initBasicInfo()
        },
        initBasicInfo() {
            this.form = Object.assign(this.form, this.producDetali)
            this.form.imageList = [
                {
                    name: "",
                    url: this.producDetali.productImageList.toString()
                }
            ];
        },
        // 删除图片
        handleRemoveImage(file) {
            this.imageList = this.imageList.filter(item => item.url !== file.url)
        },
        //添加图片
        headleAddImage(file) {
            this.imageList = [...file]
        },

    },

    created() {
        this.initData()
    }
}
</script>
<style lang="less" scoped>
.edit {
    padding: 0 20px;
}
</style>