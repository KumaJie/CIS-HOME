export const settingMixin = {
  data() {
    return {
      statusAndCode: []
    }
  },
  mounted() {
    this.$getSysSetting('getStatusNameAndCode').then(res => {
      console.log(res);
      const data = res.data;
      this.statusAndCode = data.data;
    })
  }
}