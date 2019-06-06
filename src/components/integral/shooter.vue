<template>
  <div class='shooter'>
    <h1>射手榜</h1>
    <div class="center">
      <ul>
        <li class="li1">排名</li>
        <li class="li2">球员</li>
        <li class="li3">球队</li>
        <li class="li4">进球数</li>
      </ul>
      <ul>
        <li class="li1">1</li>
        <li class="li2">
          <img src="../../assets/mate/1.jpg" alt="">
          <span>扎哈维</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/1.png" alt="">
          <span>广州富力</span>
        </li>
        <li class="li4">10</li>
      </ul>
      <ul>
        <li class="li1">2</li>
        <li class="li2">
          <img src="../../assets/mate/2.jpg" alt="">
          <span>佩莱</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/2.png" alt="">
          <span>山东鲁能泰山</span>
        </li>
        <li class="li4">9(2)</li>
      </ul>
      <ul>
        <li class="li1">3</li>
        <li class="li2">
          <img src="../../assets/mate/3.jpg" alt="">
          <span>乔纳生</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/3.png" alt="">
          <span>天津泰达</span>
        </li>
        <li class="li4">8</li>
      </ul>
      <ul>
        <li class="li1">4</li>
        <li class="li2">
          <img src="../../assets/mate/4.jpg" alt="">
          <span>特谢拉</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/4.png" alt="">
          <span>江苏苏宁</span>
        </li>
        <li class="li4">5(2)</li>
      </ul>
      <ul>
        <li class="li1">5</li>
        <li class="li2">
          <img src="../../assets/mate/5.jpg" alt="">
          <span>张政</span>
        </li>
        <li class="li3">
          <img src="../../assets/grade/5.png" alt="">
          <span>重庆四维</span>
        </li>
        <li class="li4">1(1)</li>
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
.shooter {
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
