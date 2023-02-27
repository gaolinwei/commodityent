<template>
    <div>
        <el-button type="primary">新建商品</el-button>
        <el-form label-position="right" label-width="100px" :model="form" size="small">
            <div class="el-wh">
                <div class="el-bg">
                    <!--  -->
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <el-form-item label="商品名称：">
                                <el-input v-model="form.goodsName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="商品编码：">
                                <el-input v-model="form.goodsCode"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="商品款号：">
                                <el-input v-model="form.goodsType"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--  -->
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="业态：">
                                <el-input v-model="form.goodsName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="上下架状态：">
                                <el-select placeholder="请选择">
                                    <el-option label="item.label" value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--  -->
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <el-form-item label="审核状态：">
                                <el-select placeholder="请选择">
                                    <el-option label="item.label" value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="是否有货：">
                                <el-select placeholder="请选择">
                                    <el-option label="item.label" value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="关联活动：">
                                <el-input v-model="form.goodsName"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                </div>
                <goodsList />
            </div>

        </el-form>


    </div>
</template>
<script>
import { reactive } from 'vue';
import goodsList from '../components/goodsList.vue'
const form = reactive({

})
export default {
    components: {
        goodsList
    },
    data() {
        return {
            labelPosition: 'right',
            form: {
                goodsName: '',
                goodsCode: '',
                goodsType: ''
            }
        }
    }

}
</script>
<style land="less" scoped>
.el-wh {
    margin: 20px 0;
}

.el-bg {
    background-color: #F6F6F6 !important;
    padding: 15px 0;

}


.el-input .el-input__inner {
    height: 25px !important;
}

/* .el-form-item {
    display: flex;
} */
</style>


