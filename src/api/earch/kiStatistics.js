export function kiStatistics (_this, api, req) {
  const request = {
    '/audit_matters': async req => {
        const {
          data: {
            data,
            pList
          }
        } = await _this.$http.get(`${api}`)
        let plist = []
        let dataKey = []
        pList.forEach((value, index) => {
          if (index % 2 === 1) {
            plist.push(`\n${value}`)
          } else {
            plist.push(value)
          }
        })
        for (let key in data) {
          dataKey.push(key)
        }
        return { data, plist, dataKey }
    },
    '/get_fields': async req => {
      const {data,msg} = await _this.$http.get(`${api}`,{params:{field: JSON.stringify (req)}})
      const yearSelect = data['sjbgrq']
      const categories = data['hyfl']
      const hjssws = data['hjssws']
      const gjsjsx = data['gjsjsx']
      const year = []
      for(let i in yearSelect){
        year.push({yearValue:yearSelect[i]})
      }
      return { categories, year, hjssws, gjsjsx }
    },
    '/reporting_statistics': async req => {
      let _sjbgrq = req["sjbgrq"]
      let _xydl = req['xydl']
      let _mxxy = req['mxxy']
      let _gjsjsxfl = req['gjsjsxfl']
      let _mxfl = req['mxfl']
      let _bk = req['bk'] //list
      let _hjssws = req['hjssws'] //list
      const { data } = await _this.$http.get(api,{params:{sjbgrq:_sjbgrq,xydl:_xydl,mxxy:_mxxy,gjsjsxfl:_gjsjsxfl,mxfl:_mxfl,bk:JSON.stringify(_bk),hjssws: JSON.stringify(_hjssws)}})
      return { data }
    }
  }
  return request[api](req)
}
