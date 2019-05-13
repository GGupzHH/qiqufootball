/* eslint-disable camelcase */
export function endofyearchart (_this, api, req) {
  const request = {
    '/dashboard': async req => {
      const {
        data: {
          report_statistics,
          audit_trend,
          audit_count,
          audit_matters_trend
        }
      } = await _this.$http.get(`${api}?${req}`)
      return { report_statistics, audit_trend, audit_count, audit_matters_trend }
    }
  }
  return request[api](req)
}
