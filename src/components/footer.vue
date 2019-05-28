<template>
  <div class='footers'>
    <div class="w clearfix">
      <ul>
        <li>齐趣 | All Football App</li>
        <li>关于齐趣</li>
        <li>加入我们</li>
        <li>客户端下载</li>
        <li>侵权投诉</li>
        <li>广告投放</li>
        <li>联系方式： 010-888888</li>
      </ul>
      <ul>
        <li>关注</li>
        <li>官方微博</li>
        <li>小游戏</li>
      </ul>
      <ul>
        <li>友情链接</li>
        <li>All FOOTBALL</li>
        <li>快递查询</li>
        <li>信虫地带</li>
        <li>企鹅直播</li>
        <li>D站</li>
      </ul>
      <ul>
        <li>京ICP证150469号</li>
        <li>京ICP备14042073号-2</li>
        <li>
          <img src="../assets/beian.png" alt="">
          <span>京公网安备 11022203322号</span>
        </li>
        <li>营业执照</li>
        <li>邮箱： 12480233457@qq.com</li>
        <li>举报电话：101-2323232</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
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
.footers {
  // background-color: @footerbg;
  margin-top: 50px;
  background: linear-gradient(@footerbg, @bordertop_r, @footerbg);
  padding: 50px 0 35px 0;
  height: 210px;
  .w {
    ul {
      width: 300px;
      float: left;
      li {
        font-size: 12px;
        color: @footerli;
        height: 30px;
        line-height: 30px;
        img {
          margin-top: 4px;
          margin-right: 8px;
        }
      }
      li:first-child {
        font-size: 14px;
        color: @footerfont;
      }
    }
    ul:last-child {
      li:first-child {
        font-size: 12px;
        color: @footerli;
      }
    }
  }
}
</style>
