export function getinforMate (_this, api, req) {
  const request = {
    'getinforMate': async req => {
      const {
        data
      } = await _this.$http.post(`/` + api, req)
      return { data }
    }
  }
  return request[api](req)
}
