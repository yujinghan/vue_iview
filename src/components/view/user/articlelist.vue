<template>
  <div>
    <editor
        v-model="content"
       api-key="no-api-key"
       initialValue="<p>请输入文字</p>"
       :init="tinyConfig"
       ></editor>
       <hr>
       <div v-html="content"></div>
  </div>
</template>
 
<script type="text/babel">
import Editor from '@tinymce/tinymce-vue'//引入tinymce文本编辑器
export default {
  name: "wenzhang",
  components: {
     'editor': Editor
   },
  data() {
    return {
      content:'',
      tinyConfig:{      
         height: 800,
         menubar: true,//菜单栏显隐
         language:'zh_CN',//语言
         language_url:'../tinymce/langs/zh_CN.js',//语言js文件的路径，需要在官网下载
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold  italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent | indent | removeformat | help'
        }     
    };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>
 
<style scoped>
</style>
