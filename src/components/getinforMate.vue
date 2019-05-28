<template>
  <div class='getinforMate'>
    <div class="centers">
      <h1><span>队员</span></h1>
      <ul class="clearfix">
        <li class="li1">位置</li>
        <li class="li2">号码</li>
        <li class="li3">姓名</li>
        <li class="li4">出场</li>
        <li class="li5">进球</li>
        <li class="li6">国籍</li>
      </ul>
      <ul v-for="(item, index) in dataList" :key="index" @click="getMeatinfor">
        <li class="li1">{{ item.wz }}</li>
        <li class="li2">{{ item.hm }}</li>
        <li class="li3">{{ item.name }}</li>
        <li class="li4">{{ item.cc }}</li>
        <li class="li5">{{ item.jq }}</li>
        <li class="li6" v-if="item.gj === 1">
          <img src="../assets/china.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 2">
          <img src="../assets/china2.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 3">
          <img src="../assets/china3.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 4">
          <img src="../assets/china4.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 5">
          <img src="../assets/china5.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dataList: [
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
  },
  components: {},
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getMeatinfor () {
      this.$router.push({
        path: '/mateinfor'
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../style/variables');
.getinforMate {
  margin-top: 30px;
  border-top: 2px solid @tableheader;
  background-color: @showclear;
  h1 {
    font-size: 14px;
    height: 35px;
    padding-top: 8px;
    background-color: @btnclearborder;
    box-sizing: border-box;
    span {
      display: block;
      height: 18px;
      line-height: 18px;
      border-left: 3px solid @zuti;
      box-sizing: border-box;
      margin-left: 18px;
      padding-left: 8px;
    }
  }
  ul {
    height: 40px;
    line-height: 40px;
    display: flex;
    cursor: pointer;
    transition: all .4s;
    li {
      float: left;
      box-sizing: border-box;
      img {
        width: 20px;
        margin-top: 8px;
      }
    }
    .li1,.li2,.li4,.li5 {
      flex: 1;
      text-align: center;
    }
    .li3 {
      flex: 3;
      text-align: left;
      padding-left: 22px;
    }
    .li6 {
      text-align: center;
      flex: 2;
    }
    .li1 {
      padding-left: 32px;
    }
  }
  ul:nth-child(2n) {
    background-color: @mainBg;
  }
  ul:hover {
    background-color: @company_tab;
    .li3 {
      color: @zuti;
    }
  }
}
</style>
