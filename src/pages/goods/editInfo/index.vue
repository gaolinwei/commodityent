<template>
    <div class="edit">
        <BasicInfo :data="producDetali" />
        <SpecsInfo />
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
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            producDetali: null
        }
    },
    methods: {
        async initData() {
            const { data, code } = await post('/product/detail', { "productCode": JSON.parse(this.$route.query.i) })
            if (code !== 200) return
            this.producDetali = data
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