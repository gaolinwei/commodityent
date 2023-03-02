<template>
    <div class="image">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-form-item :label="title">
                    <div>
                        <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                            :on-progress="uploadImg" class="uploadImg"
                            :before-upload="beforeAvatarUpload"
                            >
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

import { post } from "@/utils/request"

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
       async beforeAvatarUpload(file){
            const result = await post("/file/upload")
            console.log(result,"xxxxxxxxxx")
            console.log(file,"11111111")
            let index = file.name.lastIndexOf(".")
            let extension = file.name.substr(index+1);
            let extensionList = ["png","jpg","PNG","JPG"]
            const isLt2M = file.size / 1024 / 1024 < 10;
            if(!isLt2M){
                this.$message({
                    message:"封面不可超出10M",
                    type:"warning",
                    center:true
                })
                return false
            }else if(extensionList.indexOf(extension)<0){
                this.$message({
                    message:"当前文件格式不支持",
                    type:"error",
                    center:true
                })
                return false
            }else{
                const obj = new FormData();
                obj.append("files",file)
                
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