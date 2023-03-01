export const globalMixin = {
  methods: {
    handleOpen(url,param) {
        let routeUrl = this.$router.resolve({
          path:url,
          query:{
            i:JSON.stringify(param)
          }
        })
        window.open(routeUrl.href,"_blank")
    }
  }
}