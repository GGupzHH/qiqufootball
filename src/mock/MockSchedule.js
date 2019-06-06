export function schedule (options) {
  let reqdata = JSON.parse(options.body)
  let datalist = []
  if (reqdata) {
    datalist = [
      {
        title: '第12轮',
        list: [
          {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/2.3ea4aaa4.png',
            name2: '天津天海',
            img2: '/img/4.7180d42b.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/6.29ed648b.png',
            name2: '天津天海',
            img2: '/img/5.0417d124.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/10.559686a4.png',
            name2: '天津天海',
            img2: '/img/4.7180d42b.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/1.91f7f4e1.png',
            name2: '天津天海',
            img2: '/img/2.3ea4aaa4.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/9.5df91ab1.png',
            name2: '天津天海',
            img2: '/img/6.29ed648b.png'
          }
        ]
      }, {
        title: '第13轮',
        list: [
          {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/6.29ed648b.png',
            name2: '天津天海',
            img2: '/img/1.91f7f4e1.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/1.91f7f4e1.png',
            name2: '天津天海',
            img2: '/img/5.0417d124.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/1.91f7f4e1.png',
            name2: '天津天海',
            img2: '/img/3.44ca09ef.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/4.7180d42b.png',
            name2: '天津天海',
            img2: '/img/9.5df91ab1.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/9.5df91ab1.png',
            name2: '天津天海',
            img2: '/img/1.91f7f4e1.png'
          }
        ]
      }, {
        title: '第14轮',
        list: [
          {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/7.3c1f2047.png',
            name2: '天津天海',
            img2: '/img/3.44ca09ef.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/7.3c1f2047.png',
            name2: '天津天海',
            img2: '/img/9.5df91ab1.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/5.0417d124.png',
            name2: '天津天海',
            img2: '/img/7.3c1f2047.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/8.c4135c79.png',
            name2: '天津天海',
            img2: '/img/2.3ea4aaa4.png'
          }, {
            time: '2019-6-04 15:40',
            name1: '北京人和',
            img1: '/img/10.559686a4.png',
            name2: '天津天海',
            img2: '/img/3.44ca09ef.png'
          }
        ]
      }
    ]
  }
  return datalist
}
