export function getPDF (_this, api, req) {
  const request = {
    '/download_pdf': req => {
      window.open(`http://172.20.100.123:9000/api` + api + req)
    }
  }
  return request[api](req)
}
