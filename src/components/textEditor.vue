<template>
    <div>
        <div style="border: 1px solid #ccc; margin-top: 10px">
            <!-- 工具栏 -->
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :mode="mode" :defaultConfig="toolbarConfig" />
            <!-- 编辑器 -->
            <Editor style="height: 400px; overflow-y: hidden" :defaultConfig="editorConfig" v-model="html"
                @onChange="onChange" @onCreated="onCreated" />
        </div>

    </div>
</template>
  
<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { post, request } from "@/utils/request"

export default {
    name: "MyEditor",
    components: { Editor, Toolbar },
    data() {
        return {
            editor: null,
            html: "",
            toolbarConfig: {
                // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
                // excludeKeys: [ /* 隐藏哪些菜单 */ ],
                excludeKeys: ['insertImage', 'insertVideo', 'group-video', 'codeBlock'],
            },
            editorConfig: {
                placeholder: "请输入内容...",
                // autoFocus: false,
                // 所有的菜单配置，都要在 MENU_CONF 属性下
                MENU_CONF: {
                    uploadImage: {
                        fieldName: 'file',
                        base64LimitSize: 5 * 1024, // 5kb
                        server: "http://114.132.197.185:80/api/v1/mall-bk/file/upload",
                        headers: {
                            'Content-Type': 'multipart/form-data;charset=UTF-8'
                        },
                        async customUpload(file, insertFn) {
                            let formData = new FormData()
                            formData.append('file', file)
                            const result = await request({
                                url: '/file/upload',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'multipart/form-data;charset=UTF-8'
                                },
                                data: formData
                            })
                            const { data } = result
                            insertFn(data, "", "")
                            console.log(Editor.getContent(), "Editor.getContent()")
                        },
                        // onBeforeUpload(file){
                        //     console.log(file,"onBeforeUpload")
                        // },
                        // onSuccess(file,res){
                        //     console.log(file,res,"onSuccess")
                        // },
                        // onError(file,err,res){
                        //     console.log(file,err,res,"onError")
                        // }
                    }
                },
            },
            mode: "default"
        };
    },
    methods: {
        async uploadImg(file, inserFn) {
            let imgData = new FormData()
            imgData.append('file', file)
            const result = await request({
                url: '/file/upload',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data;charset=UTF-8'
                },
                data: formData
            })
        },
        onCreated(editor) {
            this.editor = Object.seal(editor); // 【注意】一定要用 Object.seal() 否则会报错
        },
        onChange(editor) {
            console.log("onChange", editor.getHtml()); // onChange 时获取编辑器最新内容
        },
        getEditorText() {
            const editor = this.editor;
            if (editor == null) return;

            console.log(editor.getText()); // 执行 editor API
        },
        printEditorHtml() {
            const editor = this.editor;
            if (editor == null) return;

            console.log(editor.getHtml()); // 执行 editor API
        },
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            this.html = "";
        }, 1500);
    },
    beforeDestroy() {
        const editor = this.editor;
        if (editor == null) return;
        editor.destroy(); // 组件销毁时，及时销毁 editor ，重要！！！
    },
};
</script>
  
<style src="@wangeditor/editor/dist/css/style.css"></style>
  