import { async } from "q";

export function aiStatistics (_this, api, req) {
  const request = {
    '/audit_count': async req => {
      const {
        data: {
          legend,
          series,
          xAxis
        }
      } = await _this.$http.get(`${api}`)
      const seriesArr = []
      for (let key in series) {
        seriesArr.push({
          name: key,
          type: 'bar',
          barGap: 0,
          label: 'labelOption',
          data: series[key]
        })
      }
      return { legend, seriesArr, xAxis }
    },
    '/get_fields': async req => {
      const {data,msg} = await _this.$http.get(`${api}`,{params:{field: JSON.stringify (req)}})
      const yearSelect = data['sjbgrq']
      const categories = data['hyfl']
      const hjssws = data['hjssws']
      const year = []
      for(let i in yearSelect){
        year.push({yearValue:yearSelect[i]})
      }
      return { categories, year, hjssws }
    },
    '/audit_average':async req =>{
      let _sjbgrq = req.sjbgrq
      let _xydl = req.xydl
      let _mxxy = req.mxxy
      let _bk = req.bk
      let _hjssws = req.hjssws
      const {data} = await _this.$http.get(api,{params:{sjbgrq:_sjbgrq,xydl:_xydl,mxxy:_mxxy,bk:JSON.stringify(_bk),hjssws:JSON.stringify(_hjssws)}})
      return {data}
    }
  }
  return request[api](req)
}
