<template>
  <div class='getinfor'>
    <div class="w">
      <div class="title">
        <img src="../assets/grade/1.png" alt="" class="left">
        <div class="left center">
          <h1>
            <span>北 京 中 赫 国 安</span>
            <img src="../assets/china.png" alt="">
          </h1>
          <p>Beijing Sinobo Guoan</p>
          <p>
            <span class="names">成立:</span>
            <span>1992</span>
            <span class="names">国家和地区:</span>
            <span>中国</span>
          </p>
          <p>
            <span class="names">城市:</span>
            <span>北京</span>
            <span class="names">主场:</span>
            <span>北京工人体育馆</span>
          </p>
          <p>
            <span class="names">电话:</span>
            <span>15845678934</span>
            <span class="names">邮箱:</span>
            <span>1234576689@qq.com</span>
          </p>
          <p>
            <span class="names">地址:</span>
            <span>朝阳区工人体育场东路</span>
          </p>
        </div>
        <div class="left jiangbei">
          <h1>荣誉记录</h1>
          <div>
            <p>
              <img src="../assets/jiangbei1.png" alt="">
              <span>中国足球足协杯 X 4</span>
              <span>2018, 2003, 1997, 1996</span>
            </p>
            <p>
              <img src="../assets/jiangbei2.png" alt="">
              <span>中国足球超级联赛 X 1</span>
              <span>2009</span>
            </p>
            <p>
              <img src="../assets/jiangbei3.png" alt="">
              <span>中国足球超级杯 X 2</span>
              <span>2014, 1998</span>
            </p>
          </div>
        </div>
      </div>
      <getinforCenter/>
      <getinforMate/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {
    getinforCenter: () => import('./getinforCenter'),
    getinforMate: () => import('./getinforMate')
  },
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
.getinfor {
  margin-top: 50px;
  padding-top: 30px;
  min-height: 430px;
  .w {
    .title {
      height: 234px;
      border-top: 2px solid @tableheader;
      background-color: @showclear;
      img.left {
        margin-top: 45px;
        margin-left: 37px;
      }
      div.left.center {
        width: 660px;
        margin-left: 30px;
        h1 {
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          font-weight: 400;
          margin-top: 10px;
          img {
            width: 30px;
            height: 30px;
            margin-top: 12px;
            margin-left: 10px;
          }
        }
        p {
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          span {
            text-indent: .5rem;
            color: @headerfontCon;
          }
          span.names {
            color: @spanfont;
          }
          span:first-child,span:nth-child(3) {
            letter-spacing: 12px;
          }
          span:nth-child(2),span:nth-child(4) {
            display: inline-block;
            width: 220px;
          }
        }
        p:nth-child(2) {
          font-size: 20px;
          font-weight: 300;
          color: @spanfont;
        }
      }
      div.left.jiangbei {
        h1 {
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          font-weight: 400;
          margin-top: 10px;
          color: @spanfont;
        }
        p {
          margin-left: 12px;
          margin-top: 12px;
          img {
            width: 32px;
          }
          span {
            display: inline-block;
            line-height: 32px;
          }
          span:nth-child(2) {
            width: 150px;
            color: @zuti;
          }
        }
        p:first-child {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
