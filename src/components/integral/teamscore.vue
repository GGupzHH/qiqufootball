<template>
  <div class='teamscore'>
    <h1>积分榜</h1>
    <div class="center">
      <ul>
        <li class="li1">排名</li>
        <li class="li2">球队</li>
        <li class="li3">场次</li>
        <li class="li4">胜</li>
        <li class="li5">平</li>
        <li class="li6">负</li>
        <li class="li7">进球</li>
        <li class="li8">失球</li>
        <li class="li9">净胜球</li>
        <li class="li10">积分</li>
      </ul>
      <ul>
        <li class="li1">1</li>
        <li class="li2">
          <img src="../../assets/grade/1.png" alt="">
          <span>北京中赫国安</span>
        </li>
        <li class="li3">10</li>
        <li class="li4">10</li>
        <li class="li5">0</li>
        <li class="li6">0</li>
        <li class="li7">22</li>
        <li class="li8">3</li>
        <li class="li9">19</li>
        <li class="li10">30</li>
      </ul>
      <ul>
        <li class="li1">2</li>
        <li class="li2">
          <img src="../../assets/grade/2.png" alt="">
          <span>上海上港</span>
        </li>
        <li class="li3">10</li>
        <li class="li4">8</li>
        <li class="li5">0</li>
        <li class="li6">2</li>
        <li class="li7">23</li>
        <li class="li8">4</li>
        <li class="li9">9</li>
        <li class="li10">23</li>
      </ul>
      <ul>
        <li class="li1">3</li>
        <li class="li2">
          <img src="../../assets/grade/3.png" alt="">
          <span>江苏苏宁</span>
        </li>
        <li class="li3">10</li>
        <li class="li4">4</li>
        <li class="li5">0</li>
        <li class="li6">6</li>
        <li class="li7">12</li>
        <li class="li8">2</li>
        <li class="li9">13</li>
        <li class="li10">16</li>
      </ul>
      <ul>
        <li class="li1">4</li>
        <li class="li2">
          <img src="../../assets/grade/4.png" alt="">
          <span>河南建业</span>
        </li>
        <li class="li3">10</li>
        <li class="li4">4</li>
        <li class="li5">5</li>
        <li class="li6">1</li>
        <li class="li7">12</li>
        <li class="li8">4</li>
        <li class="li9">12</li>
        <li class="li10">12</li>
      </ul>
      <ul>
        <li class="li1">5</li>
        <li class="li2">
          <img src="../../assets/grade/5.png" alt="">
          <span>山东鲁能泰山</span>
        </li>
        <li class="li3">10</li>
        <li class="li4">3</li>
        <li class="li5">4</li>
        <li class="li6">3</li>
        <li class="li7">15</li>
        <li class="li8">3</li>
        <li class="li9">12</li>
        <li class="li10">16</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../../style/variables');
.teamscore {
  h1 {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background-color: @h1bg;
  }
  .center {
    border-left: 1px solid @libg;
    border-right: 1px solid @libg;
    ul {
      height: 40px;
      line-height: 40px;
      display: flex;
      padding: 0 30px;
      box-sizing: border-box;
      border-bottom: 1px solid @libg;
      li {
        height: 40px;
        text-align: center;
        img {
          width: 24px;
          margin-top: 8px;
          margin-right: 6px;
        }
      }
      .li1 {
        flex: 1;
      }
      .li2 {
        flex: 3;
        text-align: left;
        text-indent: 2rem;
      }
      .li3,.li4,.li5,.li6,.li7,.li8,.li10 {
        flex: 1;
      }
      .li9 {
        flex: 2;
      }
    }
    ul:first-child {
      background-color: @zuti;
      li {
        color: @headerBg;
        font-weight: 700;
      }
    }
    ul:nth-child(2),ul:nth-child(3),ul:nth-child(4) {
      background-color: @libg;
    }
  }
}
</style>
