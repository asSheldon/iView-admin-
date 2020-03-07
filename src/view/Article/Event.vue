<template>
  <div>
    <Card>
      <tables ref="tables"
              editable searchable
              search-place="top"
              v-model="tableData"
              :columns="columns"
              @on-delete="handleDelete">
      </tables>
      <!-- <Button style="margin: 10px 0;" type="primary" @click="exportExcel">新增</Button> -->
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      <Page class="center" :total="100" show-elevator />
    </Card>
  </div>
</template>

<script>
import { getTableData } from '@/api/Article/event.js'
import Tables from '_c/tables'
export default {
  name: 'Event',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: '项目ID', key: 'mid', align: 'center', sortable: true, editable: true },
        { title: '项目名称', key: 'name', align: 'center', sortable: true, editable: true },
        { title: '项目类型', key: 'type', align: 'center', sortable: true, editable: true },
        { title: '进度', key: 'now', align: 'center', sortable: true, editable: true },
        { title: '开始时间', key: 'start_date', align: 'center', sortable: true, editable: true },
        { title: '结束时间', key: 'end_date', align: 'center', sortable: true, editable: true },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style scoped>
  .center {
     margin: auto;
  }
</style>
