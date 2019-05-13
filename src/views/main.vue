<template>
  <div class='w clearfix'>
    <div class="lunbo left">
      <img src="../assets/lunbo.jpg" alt="轮播">
    </div>
    <div class="left stat">
      <div class="navs">
        <div class="left">
          <img src="../assets/ac.png" alt="">
          <p class="imgname">上海申花</p>
        </div>
        <div class="left">
          <p>中超</p>
          <p>0 - 1</p>
          <p>45'</p>
          <p>直播中</p>
        </div>
        <div class="left">
          <img src="../assets/acml.png" alt="">
          <p class="imgname rightp">天津天海</p>
        </div>
      </div>
      <div class="navs">
        <div class="left">
          <img src="../assets/bl.png" alt="">
          <p class="imgname">AC米兰</p>
        </div>
        <div class="left">
          <p>中超</p>
          <p>2 - 1</p>
          <p>55'</p>
          <p>直播中</p>
        </div>
        <div class="left">
          <img src="../assets/lia.png" alt="">
          <p class="imgname rightp">米兰</p>
        </div>
      </div>
    </div>
    <news/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  components: {
    news: () => import('../components/news.vue')
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
.w {
  margin-top: 50px;
  padding-top: 30px;
  .lunbo {
    width: 70%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-right: 20px;
    }
    .left {

    }
  }
  .stat {
    height: 300px;
    width: 30%;
    background-color: yellow;
    .navs {
      height: 150px;
      box-sizing: border-box;
      background-color: @rightbj;
      div {
        width: 33.333%;
        height: 100%;
        img {
          width: 80px;
          height: 80px;
          margin-top: 25px;
          margin: 25px auto 0 !important;
          display: block;
        }
        img.left {
          margin-left: 20px;
        }
        img.right {
          margin-right: 20px;
        }
        p:first-child {
          margin-top: 40px;
          text-align: center;
          color: @font-sizecolor;
        }
        p:nth-child(2) {
          margin-top: 10px;
          text-align: center;
          font-size: 31px;
          color: @headerBg;
        }
        p:nth-last-child(-n + 2) {
          color: @zutifont;
          text-align: center;
          margin-top: 5px;
        }
        .imgname {
          font-size: 12px !important;
          // margin-top: 125px !important;
          color: @checkborder !important;
          text-align: center;
        }
        .rightp {
          text-align: center !important;
          // textalin
          
        }
      }
    }
    .navs:first-child {
      border-bottom: 1px solid @bordertop_r;
    }
  }
}
</style>
