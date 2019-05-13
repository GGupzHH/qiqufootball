export function getMainQueryUi (_this, api, req) {
  const request = {
    '/hot_search': async req => {
      const {
        data
      } = await _this.$http.get(`hot_search`)
      return { data }
    }
  }
  return request[api](req)
}
