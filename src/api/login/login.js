export function login (_this, api, req) {
  const request = {
    'login': async req => {
      const {
        data
      } = await _this.$http.post(`/` + api, req)
      return { data }
    }
  }
  return request[api](req)
}
