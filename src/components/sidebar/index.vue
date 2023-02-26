<template>
    <div class="box">
        <div class="side">
            <div v-for="item in list">
                <div>{{ item }}</div>
            </div>
        </div>
        <div class="side1">

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            list: ["商品", "商品", "商品", "商品", "商品", "商品", "商品", "商品", "商品"]
        };
    },
}
</script>
<style lang="less">
.box {
    width: 100%;
    height: 100%;

    .side {

        background-color: blue;
    }
}
</style>