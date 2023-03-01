<template>
    <div class="edit">
        <div class="ediTitle">
            基本信息
        </div>
        <el-form label-position="right" label-width="100px" :model="form" size="small" class="ediForm">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="租户：">
                        <el-input v-model="form.tenant"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="品牌：">
                        <el-input v-model="form.brand"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="商品款号：">
                        <el-input v-model="form.itemNo"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="商品名称：">
                        <el-input v-model="form.tradeName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="店铺分类：">
                        <el-input v-model="form.storeClassification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                tenant: '',//租户
                brand: '',//品牌
                itemNo: '',//商品款号
                tradeName: '',  //商品名称
                storeClassification: ''//店铺分类
            }
        }
    },
    methods:{
        initData(){
            console.log(this.$route.query)
        }
    },
    created(){
        this.initData()
    }
}
</script>
<style lang="less" scoped>
.edit {
    padding: 0 20px;
    .ediTitle {
        font-size: 18px;
        font-weight: bold;
        color: black;
        border-bottom: 1px solid #f6f6f6;
        padding: 0 0 15px 0;
    }
    .ediForm{
        padding: 20px 40px 20px 40px;
    }
}
</style>