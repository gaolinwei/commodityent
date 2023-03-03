<template>
    <div class="image">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-form-item :label="title">
                    <div>
                        <el-upload action="" :format="['jpg', 'jpeg', 'png', 'gif']" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-progress="uploadImg"
                            class="uploadImg" :http-request="beforeAvatarUpload">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="imageUrl">
                        </el-dialog>
                    </div>
                </el-form-item>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import { post, request } from "@/utils/request"

export default {
    props: {
        title: {
            typeof: String,
            default: ""
        }
    },
    data() {
        return {
            imageUrl: "",
            visible: false,
            dialogVisible: false,
            imageData: [],
        }
    },
    methods: {
        async beforeAvatarUpload({ file }) {
            if (file.size > 16777216) {
                this.$message.error(file.name + '大小超出16M')
            } else {
                const formData = new FormData()
                formData.append("file", file)
                const result = await request({
                    url: '/file/upload',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data;charset=UTF-8'
                    },
                    data: formData
                })
            console.log(result,"result")

            }
        },
        changeImage(file, fileList) {
            this.imageData = [...this.imageData, file.url]
            console.log(this.imageData)
        },
        //删除图片
        handleRemove(file) {

        },
        uploadImg(...data) {
            console.log(data)
        },
        handlePictureCardPreview(file) {
            this.imageUrl = file.url;
            this.dialogVisible = true;
            console.log(this.imageUrl, this.dialogVisible)
        },
    }
}
</script>
<style scoped lang="less">
.image {
    .uploadImg {
        /deep/.el-upload--picture-card {
            width: 100px;
            height: 100px;
            line-height: 100px;
            // background-color: pink !important;

            .el-icon-plus {
                font-size: 18px;
            }
        }

        /deep/.el-upload-list__item {
            width: 100px;
            height: 100px;
        }
    }

}
</style>