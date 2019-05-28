<template>
  <div class='getinforCenter'>
    <div class="saicheng">
      <h1><span>赛程</span></h1>
      <ul v-for="(item, index) in dataList" :key="index">
        <li class="li1">{{ item.time }}</li>
        <li class="li2">
          <span>{{ item.name1 }}</span>
          <img :src="item.img1" alt="">
          <span>{{ item.bf }}</span>
          <img :src="item.img2" alt="">
          <span>{{ item.name2 }}</span>
        </li>
        <li class="li3">{{ item.sc }}</li>
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
  },
  components: {},
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../style/variables');
.getinforCenter {
  margin-top: 30px;
  border-top: 2px solid @tableheader;
  background-color: @showclear;
  .saicheng {
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
      li {
        float: left;
        box-sizing: border-box;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .li1 {
        flex: 1;
        padding-left: 32px;
      }
      .li2 {
        flex: 2;
        span,img {
          float: left;
        }
        span:first-child {
          width: 110px;
          text-align: right;
          margin-right: 8px;
        }
        span:nth-child(3) {
          margin: 0 12px;
          text-align: center;
          width: 30px;
        }
        span:last-child {
          width: 110px;
          text-align: left;
          margin-left: 8px;
        }
        img {
          margin: 8px 4px 0 4px;
        }
      }
      .li3 {
        flex: 1;
      }
    }
    ul:nth-child(2n) {
      background-color: @mainBg;
    }
  }
}
</style>
