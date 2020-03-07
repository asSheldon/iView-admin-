<template>
    <div>
        <Card>
            <Input style="width: 210px; margin-right: 10px;" placeholder="输入关键字搜索"/>
            <Button type="primary">搜索</Button>
            <Table style="margin: 10px 0;" :columns="columns7" :data="compData"></Table>
        </Card>
    </div>

</template>
<script>

export default {
  data () {
    return {
      columns7: [
        { title: '参赛ID', key: 'comp_id', align: 'center' },
        { title: '参赛姓名', key: 'comp_name', align: 'center' },
        { title: '参赛登录名', key: 'comp_loginName', align: 'center' },
        { title: '参赛密码', key: 'comp_loginPwd', align: 'center' },
        { title: '参赛邮箱', key: 'comp_email', align: 'center' },
        { title: '参赛学校', key: 'comp_university', align: 'center' },
        { title: '参赛注册时间', key: 'comp_createTime', align: 'center' },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '审核'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      compData: [
        {
          comp_id: '3545468546',
          comp_name: '佳佳',
          comp_loginName: 'Jiajia',
          comp_loginPwd: '********',
          comp_email: 'jiajia@126.com',
          comp_university: 'BNUZ',
          comp_createTime: '2018-02-11'
        },
        {
          comp_id: '3545468546',
          comp_name: '奇奇',
          comp_loginName: 'Qiqi',
          comp_loginPwd: '********',
          comp_email: 'qiqiqi@126.com',
          comp_university: 'BNUZ',
          comp_createTime: '2019-10-01'
        },
        {
          comp_id: '3545468546',
          comp_name: '壮壮',
          comp_loginName: 'Zhuangzhuang',
          comp_loginPwd: '********',
          comp_email: 'zhuangzhuang@126.com',
          comp_university: 'BNUZ',
          comp_createTime: '2019-08-07'
        }
      ]
    }
  },

  mounted () {

  },

  methods: {
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    show (index) {
      // this.$Modal.info({
      //     title: 'User Info',
      //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      // })
    },
    remove (index) {
      // this.data6.splice(index, 1);
    }
  }
}
</script>
