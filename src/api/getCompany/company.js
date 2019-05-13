export function getCompany (_this, api, req) {
  const request = {
    '/details': async req => {
      const {
        data: {
          data,
          sort
        }
      } = await _this.$http.get(`${api}?code=${req}`)
      return { data, sort }
    }
  }
  return request[api](req)
}
