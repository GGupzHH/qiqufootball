<template>
  <div class='w clearfix'>
    <div class="lunbo left">
      <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper">
        <swiper-slide>
          <img src="../assets/lunbo.jpg" alt="" class=""/>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/lunbo2jpg.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/lunbo3.jpg" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  data () {
    const that = this
    return {
      swiperOption: {
        // 是一个组件自有属性，如果notNextTick设置为true，
        // 组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
        // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: true,
        on: {
          // 滑动之后回调函数
          slideChangeTransitionStart: function () {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1
          }
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
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
    box-sizing: border-box;
    padding-right: 20px;
    .swiper-wrap {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
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
      // transition: all 5s;
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
          color: @checkborder !important;
          text-align: center;
        }
        .rightp {
          text-align: center !important;
        }
      }
    }
    .navs:hover {
      background: linear-gradient(135deg, @footerbg, @p_color, @footerbg);
    }
    .navs:first-child {
      border-bottom: 1px solid @bordertop_r;
    }
  }
}
</style>
