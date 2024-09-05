<template>
  <div>
    <myTinymce ref="myTinymceRef" v-model="str" :init-config="initConfig"></myTinymce>
    <el-button type="primary" @click="insertStr">插入富文本</el-button>
    <div>合并单元格示例</div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column prop="typeName" label="大类" width="180"/>
      <el-table-column prop="productName" label="产品名称"/>
      <el-table-column prop="level" label="风险等级"/>
      <el-table-column prop="account" label="金额"/>
      <el-table-column prop="remark" label="备注"/>
    </el-table>
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
      },
      tableData: [],
      originData: [
        {
          id: '12987122',
          productName: '普通活期',
          type: 'liquid',
          level: 'R1',
          account: '15000',
          remark: ''
        }, {
          id: '12987125',
          productName: '朝朝宝',
          type: 'assurance',
          level: 'R1',
          account: '15000',
          remark: ''
        },
        {
          id: '12987127',
          productName: '朝朝宝',
          type: 'fund',
          level: 'R1',
          account: '15000',
          remark: ''
        }
      ],
      // 大类
      typeList: [
        {
          // 活钱管理 并记录长度
          id: 'liquid',
          name: '活钱管理',
          sum: 0
        },
        {
          // 保障管理 并记录长度
          id: 'assurance',
          name: '保障管理',
          sum: 0
        },
        {
          // 基金管理 并记录长度
          id: 'fund',
          name: '基金管理',
          sum: 0
        }
      ],
      // 大类合并记录
      typeMerge: [],
      // 合计
      sumMerge: []
    }
  },
  created() {
    // 处理数据
    // 分类别
    for (let i = 0; i < this.typeList.length; i++) {
      for (let j = 0; j < this.originData.length; j++) {
        if (this.originData[j].type === this.typeList[i].id) {
          this.typeList[i].sum += 1
          this.tableData.push({
            typeName: this.typeList[i].name,
            ...this.originData[j]
          })
          this.typeMerge.push(0)
        }
        if (j === this.originData.length - 1) {
          this.typeList[i].sum += 1
          // 最后一项 合计
          this.tableData.push({
            typeName: this.typeList[i].name,
            productName: '合并信息'
          })
          // 大类合并的位置
          this.typeMerge[this.tableData.length - this.typeList[i].sum] = this.typeList[i].sum
          this.typeMerge.push(0)
        }
      }
    }
    // 合计的位置
    this.sumMerge = this.typeList.reduce((sum, item) => {
      return sum.concat(sum[sum.length - 1] + item.sum - 1)
    }, [this.typeList[0].sum - 1])
    // 最后一个不用
    this.sumMerge.pop()
  },
  methods: {
    insertStr() {
      const val = '<span>&nbsp;</span><span style="color: blue;">链接1</span><span>&nbsp;</span>'
      this.$refs.myTinymceRef.insert(val)
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // rowIndex行合并 columnIndex列合并
      // 大类合并
      if (columnIndex === 0) {
        if (this.typeMerge[rowIndex]) {
          return {
            rowspan: this.typeMerge[rowIndex],
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
      // 合计
      if (this.sumMerge.includes(rowIndex)) {
        if (columnIndex === 1) {
          return {
            rowspan: 1,
            colspan: 4
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
