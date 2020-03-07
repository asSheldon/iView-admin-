<template>
    <div>
        <Card>
            <Input style="width: 210px; margin-right: 10px;" placeholder="输入关键字搜索"/>
            <Button type="primary">搜索</Button>
            <Table style="margin: 10px 0;" :columns="columns7" :data="data6"></Table>
            <Button style="margin: 10px 0;" type="primary" @click="addModal=true">新增评委</Button>
            <Modal
                v-model="addModal"
                title="新增评委"
                @on-ok="addAdmin"
                @on-cancel="cancel">
                <div>
                    <Row>
                    <Col span="20">
                    <Form :model="addModal1" label-position="right" :label-width="100">
                    <FormItem label="姓名">
                        <Input v-model="addModal1.input1"></Input>
                    </FormItem>
                    <FormItem label="账号">
                        <Input v-model="addModal1.input2"></Input>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="addModal1.input3"></Input>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input v-model="addModal1.input4"></Input>
                    </FormItem>
                    <FormItem label="比赛">
                    <Select v-model="addModal1.select">
                        <Option value="1">新生赛</Option>
                        <Option value="2">IT节</Option>
                    </Select>
                    </FormItem>
                    <FormItem label="组别">
                    <Select v-model="addModal1.select">
                        <Option value="1">计算机组</Option>
                        <Option value="2">树莓组</Option>
                        <Option value="3">软件工程组</Option>
                        <Option value="4">电子组</Option>
                    </Select>
                    </FormItem>
                    </Form>
                    </Col>
                    </Row>
                </div>

            </Modal>
        </Card>
    </div>

</template>
<script>
export default {
  data () {
    return {
      addModal: false,
      addModal1: {
        select: ''
        // add
      },
      columns7: [
        { title: '评委ID', key: 'judge_id', align: 'center' },
        { title: '评委姓名', key: 'judge_name', align: 'center' },
        { title: '评委登录名', key: 'judge_loginName', align: 'center' },
        { title: '评委密码', key: 'judge_loginPwd', align: 'center' },
        { title: '评委级别', key: 'judge_level', align: 'center' },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          // width: 150,
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
              }, '查看'),
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
              }, '修改'),
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
      data6: [
        {
          judge_id: '3545468546',
          judge_name: '张四',
          judge_loginName: 'John Zhang',
          judge_loginPwd: '********',
          judge_level: '决赛评委'
        },
        {
          judge_id: '3545468546',
          judge_name: '李三',
          judge_loginName: 'Orson Li',
          judge_loginPwd: '********',
          judge_level: '复赛评委'
        },
        {
          judge_id: '3545468546',
          judge_name: '王五',
          judge_loginName: 'Eden wong',
          judge_loginPwd: '********',
          judge_level: '决赛评委'
        }
      ]
    }
  },
  methods: {
    addAdmin () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
