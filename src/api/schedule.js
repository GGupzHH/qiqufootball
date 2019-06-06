export function schedule (_this, api, req) {
  const request = {
    'schedule': async req => {
      const {
        data
      } = await _this.$http.post(`/` + api, req)
      return { data }
    }
  }
  return request[api](req)
}
