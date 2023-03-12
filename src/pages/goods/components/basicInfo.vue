<template>
    <div class="basicInfo">
        <div class="ediTitle">基本信息</div>
        <el-form label-position="right" label-width="100px" :model="form" size="small">
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-form-item label="商品款号：">
                        <el-input v-model="form.itemNo"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="商品名称：">
                        <el-input v-model="form.productName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="商品重量：">
                        <el-input v-model="form.weight">
                            <el-button slot="append">kg</el-button>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="店铺分类：">
                        <el-input v-model="form.storeClassification"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商品评分：">
                        <el-input v-model="form.score"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="热门商品：">
                        <el-select v-model="form.value" placeholder="请选择热门商品">
                            <el-option v-for="item in form.popularCommodity" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <uploadImage title="商品图片：" :imageList="form.imageList" @removeImage="handleRemoveImage"
                @headleAddImage="headleAddImage" />
        </el-form>
    </div>
</template>

<script>
import uploadImage from "@/components/image.vue"

export default {
    components: {
        uploadImage
    },
    props: {
        form: {
            type: Object,
            default: {}
        }
    },
    methods: {
        handleRemoveImage(file) {
            this.$emit("removeImage", file)
        },
        headleAddImage(file) {
            this.$emit("headleAddImage", file)
        }
    }
}
</script>
<style scoped lang="less">
.ediTitle {
    font-size: 18px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0 15px 0;
    margin-bottom: 20px;
}
</style>