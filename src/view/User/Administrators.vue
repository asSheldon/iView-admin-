<template>
    <div>
        <Card>
            <!-- <Input style="width: 210px; margin-right: 10px;" placeholder="输入关键字搜索"/>
            <Button type="primary">搜索</Button>
            <Table style="margin: 10px 0;" :columns="adminList" :data="adminData"></Table> -->
            <tables ref="tables"
              editable searchable
              search-place="top"
              v-model="adminData"
              :columns="columns"
              @on-delete="handleDelete">
            </tables>
            <Button style="margin: 10px 0;" type="primary" @click="addModal=true">新增管理员</Button>
            <Modal
                v-model="addModal"
                title="新增管理员"
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
                    <FormItem label="角色">
                    <Select v-model="addModal1.select">
                        <Option value="1">高级管理员</Option>
                        <Option value="2">协会管理员-计协</Option>
                        <Option value="3">协会管理员-电协</Option>
                        <Option value="4">协会管理员-数码创意</Option>
                        <Option value="5">协会管理员-程序设计</Option>
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
import Tables from '_c/tables'
export default {
  name: 'Admin',
  components: {
    Tables
  },
  data () {
    return {
      addModal: false,
      addModal1: {
        select: ''
        // add
      },
      columns: [
        { title: '管理员ID', key: 'admin_id', align: 'center',sortable: true, editable: true},
        { title: '管理员姓名', key: 'admin_name', align: 'center',sortable: true, editable: true },
        { title: '管理员登录名', key: 'admin_loginName', align: 'center',sortable: true, editable: true },
        { title: '管理员密码', key: 'admin_loginPwd', align: 'center',sortable: true, editable: true },
        { title: '管理员级别', key: 'admin_level', align: 'center' ,sortable: true, editable: true},
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
                    vm.$emit('input', params.adminData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        }
      ],
      adminData: [
        {
          admin_id: '00000001',
          admin_name: '李大壮',
          admin_loginName: 'MikeLi',
          admin_loginPwd: '********',
          admin_level: '超级管理员'
        },
        {
          admin_id: '00000224',
          admin_name: '刘阿花',
          admin_loginName: 'LiliLiu',
          admin_loginPwd: '********',
          admin_level: '助理管理员'
        },
        {
          admin_id: '00000021',
          admin_name: '方脸脸',
          admin_loginName: 'chubbyFang',
          admin_loginPwd: '********',
          admin_level: '一般管理员'
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
