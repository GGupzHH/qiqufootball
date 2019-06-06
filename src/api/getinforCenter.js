export function getinforCenter (_this, api, req) {
  const request = {
    'getinforCenter': async req => {
      const {
        data
      } = await _this.$http.post(`/` + api, req)
      return { data }
    }
  }
  return request[api](req)
}
