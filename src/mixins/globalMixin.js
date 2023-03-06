export const globalMixin = {
  methods: {
    handleOpen(url, query) {
      let routeUrl = this.$router.resolve({
        path: url,
        query
      })
      window.open(routeUrl.href, "_blank")
    }
  }
}