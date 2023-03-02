<template>
    <div class="basicInfo">
        <div class="ediTitle">基本信息</div>
        <el-form label-position="right" label-width="100px" :model="form" size="small" class="ediForm">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="租户：">
                        <el-input v-model="form.tenant"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="品牌：">
                        <el-input v-model="form.brand"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="商品款号：">
                        <el-input v-model="form.itemNo"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="商品名称：">
                        <el-input v-model="form.tradeName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="店铺分类：">
                        <el-input v-model="form.storeClassification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="活动形式：">
                        <el-input type="textarea" maxlength="200" placeholder="请输入商品卖点"
                            :autosize="{ minRows: 4, maxRows: 80 }" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="3">
                    <el-form-item label="商品重量：">
                        <el-input v-model="form.weight">
                            <el-button slot="append">kg</el-button>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <uploadImage title="商品图片："/>
        </el-form>
    </div>
</template>

<script>
import uploadImage from "@/components/image.vue"

export default {
    components: {
        uploadImage
    },
    data() {
        return {
            form: {
                tenant: '',//租户
                brand: '',//品牌
                itemNo: '',//商品款号
                tradeName: '',  //商品名称
                storeClassification: '',//店铺分类
                desc: '',//商品卖点
                weight: '',//商品重量
            },
        }
    }
}
</script>
<style scoped lang="less">
.basicInfo {}

.ediTitle {
    font-size: 18px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid #f6f6f6;
    padding: 0 0 15px 0;
    margin-bottom: 20px;
}
</style>