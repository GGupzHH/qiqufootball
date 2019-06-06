export function MockgetinforCenter (options) {
  let reqdata = JSON.parse(options.body)
  let datalist = []
  if (reqdata) {
    datalist = [
      {
        time: '05-04 09:35',
        sc: '中超8 轮',
        name1: '广州恒大淘宝',
        img1: '/img/1.91f7f4e1.png',
        bf: '0 - 1',
        name2: '北京中赫国安',
        img2: '/img/2.3ea4aaa4.png'
      }, {
        time: '05-04 19:34',
        sc: '中超8 轮',
        name1: '广州恒大淘宝',
        img1: '/img/1.91f7f4e1.png',
        bf: '2 - 1',
        name2: '全北现代',
        img2: '/img/4.7180d42b.png'
      }, {
        time: '05-04 14:21',
        sc: '足协杯',
        name1: '浦和红钻',
        img1: '/img/5.0417d124.png',
        bf: '0 - 0',
        name2: '北京中赫国安',
        img2: '/img/3.44ca09ef.png'
      }, {
        time: '05-12 15:35',
        sc: '亚冠9 轮',
        name1: '上海上港',
        img1: '/img/1.91f7f4e1.png',
        bf: '0 - 1',
        name2: '天津泰达',
        img2: '/img/7.3c1f2047.png'
      }, {
        time: '05-15 17:35',
        sc: '中超10 轮',
        name1: '广州恒大淘宝',
        img1: '/img/10.559686a4.png',
        bf: ' - ',
        name2: '广州富力',
        img2: '/img/3.44ca09ef.png'
      }, {
        time: '05-16 19:35',
        sc: '中超11 轮',
        name1: '广州恒大淘宝',
        img1: '/img/9.5df91ab1.png',
        bf: ' - ',
        name2: '上海绿地申花',
        img2: '/img/2.3ea4aaa4.png'
      }, {
        time: '05-17 20:00',
        sc: '中超8 轮',
        name1: '广州恒大淘宝',
        img1: '/img/7.3c1f2047.png',
        bf: ' - ',
        name2: '长春亚泰',
        img2: '/img/4.7180d42b.png'
      }, {
        time: '05-21 09:35',
        sc: '亚冠5 轮',
        name1: '河南建业',
        img1: '/img/1.91f7f4e1.png',
        bf: ' - ',
        name2: '北京富力',
        img2: '/img/4.7180d42b.png'
      }, {
        time: '05-25 10:00',
        sc: '中超8 轮',
        name1: '深圳加多宝',
        img1: '/img/2.3ea4aaa4.png',
        bf: ' - ',
        name2: '北京中赫国安',
        img2: '/img/6.29ed648b.png'
      }, {
        time: '05-22 19:35',
        sc: '中超18 轮',
        name1: '广州恒大淘宝',
        img1: '/img/1.91f7f4e1.png',
        bf: ' - ',
        name2: '武汉卓尔',
        img2: '/img/2.3ea4aaa4.png'
      }
    ]
  }
  return datalist
}
