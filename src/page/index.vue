<template>
    <div class="box">
        <el-container>
            <el-aside width="200px">
                <sidebar />
            </el-aside>
            <el-container class="el-container ">
                <el-header>
                    Header
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import sidebar from "../components/sidebar"
export default {
    data() {
        return {};
    },
    components: { sidebar }
}
</script>
<style lang="less">
.el-container {
    width: 100%;
    height: 100%;
}
</style>