import { parse } from "url";
import { async } from "q";

export function aRStatistics (_this, api, req) {
  const request = {
    '/login': req => {
      return _this.$http.post('/login', req)
    },
    '/get_fields': async req => {
      const {data,msg} = await _this.$http.get(`${api}`,{params:{field: JSON.stringify (req)}})
      const yearSelect = data['sjbgrq']
      const categories = data['hyfl']
      const year = []
      for(let i in yearSelect){
        year.push({yearValue:yearSelect[i]})
      }
      return { categories, year }
    },
    '/audit_statistics': async req =>{
      let _xydl = req.xydl === undefined ? null:req.xydl
      let _mxxy = req.mxxy === undefined ? null:req.mxxy
      let _sjbgrq = req.sjbgrq === undefined ? null:req.sjbgrq
      let _bk = req.bk === undefined ? []:req.bk
      const { data } = await _this.$http.get(`${api}`,{params: {xydl:_xydl,mxxy:_mxxy,sjbgrq:_sjbgrq,bk:JSON.stringify(_bk)}})
      return { data }
    }
  }
  return request[api](req)
}
