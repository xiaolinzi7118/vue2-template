<template>
  <div>
    <myTinymce ref="myTinymceRef" v-model="str" :init-config="initConfig"></myTinymce>
    <el-button type="primary" @click="insertStr">插入富文本</el-button>
  </div>
</template>

<script>
import myTinymce from './myTinymce.vue';
export default {
  components: { myTinymce },
  data() {
    return {
      str: '这是一段测试文本',
      initConfig: {
        forced_root_block: ''
      }
    }
  },
  methods: {
    insertStr() {
      const val = '<span>&nbsp;</span><span style="color: blue;">链接1</span><span>&nbsp;</span>'
      this.$refs.myTinymceRef.insert(val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
