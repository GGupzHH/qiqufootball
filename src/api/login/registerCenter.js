export function register (_this, api, req) {
  const request = {
    'register': async req => {
      const {
        data: {
          msg,
          error
        }
      } = await _this.$http.post(`/` + api, req)
      return { error, msg }
    }
  }
  return request[api](req)
}
