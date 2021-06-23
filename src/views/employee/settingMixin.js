export const settingMixin = {
  data() {
    return {
      deptNameAndIds: [],
      jobNameAndIds: []
    }
  },
  mounted() {
    this.$getSysSetting('getDeptNameAndId').then(res => {
      const data = res.data;
      if ((data.status >= 200 && data.status < 300) || data.status === 304) {
        this.deptNameAndIds = data.data;
      }
    })
    this.$getSysSetting('getJobNameAndId').then(res => {
      const data = res.data;
      if ((data.status >= 200 && data.status < 300) || data.status === 304) {
        this.jobNameAndIds = data.data;
      }
    })
  }
}