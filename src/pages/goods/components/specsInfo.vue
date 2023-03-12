<template>
    <div>
        <div class="ediTitle">
            规格信息
        </div>
        <el-form label-width="100px">
            <el-form-item label="商品规格：">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <el-radio v-model="form.specType" :label='1'>统一规格</el-radio>
                    </el-col>
                    <el-col :span="3">
                        <el-radio v-model="form.specType" :label='2'>多规格</el-radio>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="规格设置：">
                <div class="norms" v-for="(item, index, key) in form.skuItemMap" :key="index">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-input :value="index">
                            </el-input>
                        </el-col>
                    </el-row>

                    <div>
                        <div class="normsList" v-for="data in item">
                            <div class="normsList-1">
                                <el-checkbox v-model="checked" />&nbsp;&nbsp;&nbsp;&nbsp;
                                <el-input :value="data.specValue">
                                </el-input>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div class="uploadImage" v-if="key === 0">
                                <UploadImage />
                            </div>
                        </div>

                    </div>
                </div>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
import UploadImage from "@/components/image.vue"
export default {
    components: {
        UploadImage
    },
    props: {
        form: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            options: [{
                value: "红色",
                label: "red"
            }, {
                value: "粉色",
                label: "pink"
            }],
            checked: true,
            value: ""
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
    padding: 0 0 30px 0;

}

.norms {
    padding: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid wheat;

    .normsList {
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 30px 0;

        .normsList-1 {
            display: flex;
        }

        .uploadImage {
            flex: 1;

            .el-form-item {
                .el-upload {
                    background-color: pink !important;
                }

                .el-upload--picture-card {
                    background-color: pink !important;
                }
            }

        }

    }
}
</style>