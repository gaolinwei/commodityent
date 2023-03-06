<template>
    <div>
        <div class="ediTitle">
            规格信息
        </div>
        {{ form.skuItemMap }}
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
                <div class="norms">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            规格：
                            <el-select v-model="value" placeholder="请选择颜色">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                            <!-- <div>
                                规格图片:尺寸800*800像素，大小不超过1M，拖动图片可调整排序，最多上传5张
                            </div> -->
                        </el-col>
                    </el-row>
                    <div class="normsList" v-for="item in 3">
                        <el-checkbox v-model="checked" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-select v-model="value" placeholder="请选择颜色">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="uploadImage">
                            <UploadImage />
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
    border: 2px solid #f6f6f6;
    padding: 20px;

    .normsList {
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 30px 0;
        border-bottom: 1px solid #f6f6f6;

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