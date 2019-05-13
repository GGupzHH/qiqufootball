import { async } from "q";

export function fPStatistics (_this, api, req) {
  const request = {
    '/login': async req => {
      return _this.$http.post('/login', req)
    },
    '/get_fields': async req => {
      const {data:{ sjbgrq }} = await _this.$http.get(api,{params:{field: JSON.stringify(req)}})
      let year = []
      for(let i in sjbgrq){
        year.push({yearValue:sjbgrq[i]})
      }
      return { year }
    },
    '/agency_report': async req => {
      const { data } = await _this.$http.get(api,{params:{sjbgrq:req.sjbgrq,bk:JSON.stringify(req.bk)}})
      return { data }
    }
  }
  return request[api](req)
}
