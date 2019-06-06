export function mateinfor (_this, api, req) {
  const request = {
    'mateinfor': async req => {
      const {
        data
      } = await _this.$http.post(`/` + api, req)
      return { data }
    }
  }
  return request[api](req)
}
