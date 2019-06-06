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
      dataList: []
    }
  },
  async created () {
    let {
      data
    } = await this.$apiAll.getinforCenter(this, `getinforCenter`, {})
    this.dataList = data
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
