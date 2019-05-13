export function dbquery (_this, api, req) {
  const request = {
    '/get_fields': async req => {
      let {
        data: {
          bk,
          gjsjsx,
          hjssws,
          hyfl
        }
      } = await _this.$http.get(`/get_fields?field=["bk","gjsjsx","hjssws","hyfl"]`)
      let newgjsjsx = []
      for (let i in gjsjsx) {
        newgjsjsx.push({
          name: i
        })
      }
      newgjsjsx.unshift({
        name: '全选'
      })
      gjsjsx = newgjsjsx
      newgjsjsx = []
      for (let i in hyfl) {
        newgjsjsx.push({
          name: i
        })
      }
      newgjsjsx.unshift({
        name: '全选'
      })
      return { bk, gjsjsx, hjssws, hyfl, newgjsjsx }
    },
    'search': async req => {
      let str = ''
      for (let key in req) {
        if (typeof req[key] === 'string') {
          str += key + '=' + req[key] + '&'
        } else {
          str += key + '=' + JSON.stringify(req[key]) + '&'
        }
      }
      str = str.substring(0, str.length - 1)
      // eslint-disable-next-line no-useless-escape
      str = str.replace(/\"&/g, '&')
      // eslint-disable-next-line no-useless-escape
      str = str.replace(/=\"/g, '=')
      str = str.replace(/全选/g, '')
      let {
        data: {
          count,
          data,
          limit,
          page
        },
        msg
      } = await _this.$http.get(`/search?${str}`)
      if (msg === 'OK') {
        return { count, data, limit, page }
      } else {
        alert(msg)
      }
    }
  }
  return request[api](req)
}
