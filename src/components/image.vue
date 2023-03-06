<template>
    <div class="image">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-form-item :label="title">
                    <div>
                        <el-upload action="" :format="['jpg', 'jpeg', 'png', 'gif']" list-type="picture-card"
                            :file-list="imageList" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                            :on-progress="uploadImg" class="uploadImg" :http-request="beforeAvatarUpload">
                            <i slot="default" class="el-icon-plus"></i>
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
        },
        imageList: {
            typeof: Array,
            default: []
        }
    },
    data() {
        return {
            imageUrl: "",
            visible: false,
            dialogVisible: false,
        }
    },
    created() {
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
                const { data, code } = result
                if (code !== 200) return
                let imageList = [...this.imageList, { name: "", url: data }]
                this.$emit("headleAddImage", imageList)
            }
        },
        //删除图片
        handleRemove(file) {
            this.$emit("removeImage", file)
        },
        uploadImg(...data) {
            console.log(data)
        },
        handlePictureCardPreview(file) {
            this.imageUrl = file.url;
            this.dialogVisible = true;
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