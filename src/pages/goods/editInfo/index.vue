<template>
    <div class="edit">
        <BasicInfo />
        <SpecsInfo />
        <PriceInfo />
        <OtherSet/>
    </div>
</template>
<script>
import BasicInfo from "../components/basicInfo.vue"
import SpecsInfo from "../components/specsInfo.vue"
import PriceInfo from "../components/priceInfo.vue"
import OtherSet from "../components/otherSet.vue"
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
            disabled: false
        }
    },
    methods: {
        initData() {
            console.log(this.$route.query)
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