<template>
  <div class="tinymce-editor">
    <editor
      :id="id"
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
    >
    </editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textcolor';
import 'tinymce/icons/default/icons';
export default {
  components: {
    Editor,
  },
  props: {
    // 传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default:
          // ' anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists   noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
          'lists image media',
    },
    toolbar: {
      type: [String, Array],
      default:
          // 'undo redo | searchreplace | bold  italic | underline | strikethrough | alignleft  aligncenter alignright | outdent indent  blockquote  removeformat subscript superscript code codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime  table  forecolor backcolor'
          'undo redo |  formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat hr',
    },
    initConfig: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      // 初始化配置
      init: {
        language_url: process.env.NODE_ENV === 'development' ? '/static/langs/zh_CN.js' : '/vue2-template/static/langs/zh_CN.js', // 根据自己文件的位置，填写正确的路径。路径不对会报错
        language: 'zh_CN',
        skin_url: process.env.NODE_ENV === 'development' ? '/static/skins/ui/oxide' : '/vue2-template/static/skins/ui/oxide', // 根据自己文件的位置，填写正确的路径。路径不对会报错
        content_css: process.env.NODE_ENV === 'development' ? '/static/skins/content/default/content.css' : '/vue2-template/static/skins/content/default/content.css',
        height: 300,
        // plugins: this.plugins,
        plugins: this.plugins,
        toolbar: this.toolbar,
        // toolbar: false,
        branding: false,
        menubar: false,
        resize: false,
        statusbar: false,
        // ...this.initConfig
      },
      myValue: this.value,
      id: 'editor-test'
    };
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit('input', newValue);
    },
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick(e) {
      this.$emit('onClick', e, tinymce);
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = '';
    },
    insert(val) {
      const editor = tinymce.get(this.id)
      editor.execCommand('mceInsertContent', false, val)
    }
  },
};
</script>

<style scoped lang="scss"></style>
