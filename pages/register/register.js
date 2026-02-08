Page({
  data: {
    roles: ['游客', '传承者', '管理者'],
    selectedRole: '请选择身份'
  },
  handleRoleChange(event) {
    const index = event.detail.value
    this.setData({
      selectedRole: this.data.roles[index]
    })
  }
})
