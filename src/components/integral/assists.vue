<template>
  <div class='assists'>
    <h1>助攻榜</h1>
    <div class="center">
      <ul>
        <li class="li1">排名</li>
        <li class="li2">球员</li>
        <li class="li3">球队</li>
        <li class="li4">助攻数</li>
      </ul>
      <ul>
        <li class="li1">1</li>
        <li class="li2">
          <img src="../../assets/mate/6.jpg" alt="">
          <span>希维尔</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/6.png" alt="">
          <span>广州富力</span>
        </li>
        <li class="li4">10</li>
      </ul>
      <ul>
        <li class="li1">2</li>
        <li class="li2">
          <img src="../../assets/mate/7.jpg" alt="">
          <span>德莱文</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/7.png" alt="">
          <span>山东鲁能泰山</span>
        </li>
        <li class="li4">9</li>
      </ul>
      <ul>
        <li class="li1">3</li>
        <li class="li2">
          <img src="../../assets/mate/8.jpg" alt="">
          <span>佩恩</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/8.png" alt="">
          <span>天津泰达</span>
        </li>
        <li class="li4">8</li>
      </ul>
      <ul>
        <li class="li1">4</li>
        <li class="li2">
          <img src="../../assets/mate/9.jpg" alt="">
          <span>摩托罗拉</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/9.png" alt="">
          <span>江苏苏宁</span>
        </li>
        <li class="li4">5</li>
      </ul>
      <ul>
        <li class="li1">5</li>
        <li class="li2">
          <img src="../../assets/mate/10.jpg" alt="">
          <span>张明帅</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/10.png" alt="">
          <span>江苏苏宁</span>
        </li>
        <li class="li4">4</li>
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
.assists {
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
        flex: 2;
        text-align: left;
        text-indent: 2rem;
      }
      .li3 {
        flex: 2;
        text-align: left;
        text-indent: 2rem;
      }
      .li4 {
        flex: 1;
      }
    }
    ul:nth-child(2n - 1) {
      background-color: @libg;
    }
    ul:first-child {
      background-color: @zuti;
      li {
        color: @headerBg;
        font-weight: 700;
      }
    }
  }
}
</style>
