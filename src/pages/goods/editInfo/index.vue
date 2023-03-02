<template>
    <div class="edit">
        <BasicInfo />
        <SpecsInfo/>
    </div>
</template>
<script>
import BasicInfo from "../components/basicInfo.vue"
import SpecsInfo from "../components/specsInfo.vue"
export default {
    components: {
        BasicInfo,
        SpecsInfo,
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