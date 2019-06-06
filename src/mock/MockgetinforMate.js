export function MockgetinforMate (options) {
  let reqdata = JSON.parse(options.body)
  let datalist = []
  if (reqdata) {
    datalist = [
      {
        wz: '教练',
        hm: ' - ',
        name: '施密特',
        cc: ' - ',
        jq: ' - ',
        gj: 2
      },
      {
        wz: '助理教练',
        hm: ' - ',
        name: '陶伟',
        cc: ' - ',
        jq: ' - ',
        gj: 1
      }, {
        wz: '前锋',
        hm: '17',
        name: '巴坎布',
        cc: '11',
        jq: '7',
        gj: 2
      }, {
        wz: '前锋',
        hm: '29',
        name: '巴顿',
        cc: '4',
        jq: '1',
        gj: 1
      }, {
        wz: '前锋',
        hm: '9',
        name: '张宇宁',
        cc: '14',
        jq: '3',
        gj: 1
      }, {
        wz: '前锋',
        hm: '20',
        name: '王子宁',
        cc: '14',
        jq: '2',
        gj: 1
      }, {
        wz: '前锋',
        hm: '39',
        name: '文达',
        cc: ' ~ ',
        jq: '0',
        gj: 1
      }, {
        wz: '中场',
        hm: '5',
        name: '奥古斯托',
        cc: '17',
        jq: '4',
        gj: 3
      }, {
        wz: '中场',
        hm: '26',
        name: '吕鹏',
        cc: '9',
        jq: '0',
        gj: 1
      }, {
        wz: '中场',
        hm: '10',
        name: '张稀哲',
        cc: '16',
        jq: '2',
        gj: 1
      }, {
        wz: '中场',
        hm: '18',
        name: '金泰',
        cc: '1',
        jq: '0',
        gj: 5
      }, {
        wz: '中场',
        hm: '21',
        name: '比拉蒂',
        cc: '15',
        jq: '5',
        gj: 4
      }, {
        wz: '中场',
        hm: '8',
        name: '蒲城',
        cc: '6',
        jq: '0',
        gj: 1
      }, {
        wz: '中场',
        hm: '23',
        name: '李可',
        cc: '7',
        jq: '2',
        gj: 1
      }, {
        wz: '中场',
        hm: '7',
        name: '侯文瑞',
        cc: '7',
        jq: '0',
        gj: 1
      }, {
        wz: '中场',
        hm: '6',
        name: '池中国',
        cc: '16',
        jq: '0',
        gj: 1
      }, {
        wz: '中场',
        hm: '32',
        name: '刘国波',
        cc: '3',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '19',
        name: '于大宝',
        cc: '17',
        jq: '2',
        gj: 1
      }, {
        wz: '后卫',
        hm: '3',
        name: '于洋',
        cc: '5',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '27',
        name: '王刚',
        cc: '10',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '30',
        name: '雷龙',
        cc: '2',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '28',
        name: '江涛',
        cc: '7',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '4',
        name: '李磊',
        cc: '15',
        jq: '0',
        gj: 1
      }, {
        wz: '后卫',
        hm: '2',
        name: '金文在',
        cc: '13',
        jq: '0',
        gj: 5
      }, {
        wz: '后卫',
        hm: '21',
        name: '于宝',
        cc: '17',
        jq: '2',
        gj: 1
      }, {
        wz: '守门员',
        hm: '1',
        name: '侯生',
        cc: ' ~ ',
        jq: '0',
        gj: 1
      }, {
        wz: '守门员',
        hm: '14',
        name: '邹海',
        cc: '14',
        jq: '0',
        gj: 1
      }, {
        wz: '守门员',
        hm: '33',
        name: '奥日格拉图',
        cc: ' ~ ',
        jq: '0',
        gj: 3
      }, {
        wz: '守门员',
        hm: '25',
        name: '马坤月',
        cc: '3',
        jq: '0',
        gj: 1
      }, {
        wz: '守门员',
        hm: '22',
        name: '杨志',
        cc: ' ~ ',
        jq: '0',
        gj: 1
      }
    ]
  }
  return datalist
}
