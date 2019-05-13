export function getContrast (_this, api, req) {
  const request = {
    '/code': async req => {
      const {
        data: {
          audit,
          companys
        }
      } = await _this.$http.get(`contrast?code=${req}`)
      return { audit, companys }
    }
  }
  return request[api](req)
}
