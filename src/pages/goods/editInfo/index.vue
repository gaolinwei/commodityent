<template>
    <div class="edit">
        <BasicInfo :data="producDetali" :form="form" ref="basicInfo" @initBasicInfo="initBasicInfo"/>
        <SpecsInfo :form="form" :specType="form.specType"/>
        <PriceInfo />
        <OtherSet />
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
            producDetali:null,
            form: {
                itemNo: '',//商品款号
                productName: '',  //商品名称
                storeClassification: '',//店铺分类
                weight: '',//商品重量
                score: "",//商品评分
                options: [
                { value: "热门", label: 1 },
                { value: "热门", label: 1 }
                ],
                imageList:[],
                specType:''
            },
        }
    },
    methods: {
        async initData() {
            const { data, code } = await post('/product/detail', { "productCode": JSON.parse(this.$route.query.i) })
            if (code !== 200) return
            this.producDetali = data;
            this.initBasicInfo()
        },
        initBasicInfo() {
            this.form.productName = this.producDetali.productName;
            this.form.weight = this.producDetali.weight;
            this.form.imageList = [
                {
                    name:"",
                    url:this.producDetali.productImageList.toString()
                }
            ];
            this.form.specType = this.producDetali.specType
        }
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