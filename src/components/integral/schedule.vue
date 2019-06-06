<template>
  <div class='schedule'>
    <h1>赛程榜</h1>
    <div class="schedulecenter" v-if="datalist.length">
      <h1>
        <span @click="uppage">上一页</span>
        <span>{{ datalist[0].title }}</span>
        <span @click="nextpage">下一页</span>
      </h1>
      <div class="ulcen">
        <ul v-for="(item, index) in datalist[0].list" :key="index" class="clearfix">
          <li class="li1">{{ item.time }}</li>
          <li class="li2">
            <img :src="item.img1" alt="" class="img1">
            <span>{{ item.name1 }}</span>
          </li>
          <li class="li3">：</li>
          <li class="li4">
            <span>{{ item.name2 }}</span>
            <img :src="item.img2" alt="" class="img2">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      datalist: []
    }
  },
  async created () {
    let {
      data
    } = await this.$apiAll.schedule(this, `schedule`, {})
    this.datalist = data
  },
  methods: {
    uppage () {
      let data = this.datalist.pop()
      this.datalist.unshift(data)
    },
    nextpage () {
      let data = this.datalist.shift()
      this.datalist.push(data)
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../../style/variables');
.schedule {
  h1 {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    background-color: @h1bg;
  }
  .schedulecenter {
     h1 {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      background-color: @zuti;
      display: flex;
      span {
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        font-size: 14px;
        color: @headerBg;
      }
      span:first-child {
        text-align: left;
        padding-left: 35px;
        font-size: 12px;
        cursor: pointer;
      }
      span:last-child {
        text-align: right;
        padding-right: 35px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .ulcen {
      border-left: 1px solid @libg;
      border-right: 1px solid @libg;
      ul {
        display: flex;
        border-bottom: 1px solid @libg;
        li {
          float: left;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          text-align: center;
          img {
            width: 24px;
            height: 24px;
            margin-top: 8px;
            margin-right: 8px;
            margin-left: 8px;
          }
          .img1 {
            margin-left: 120px;
          }
          .img2 {
            margin-right: 120px;
          }
        }
        .li1 {
          flex: 2;
          padding-left: 35px;
        }
        .li2 {
          flex: 3;
          text-align: left;
        }
        .li3 {
          flex: 1;
        }
        .li4 {
          flex: 3;
        }
      }
      ul:nth-child(2n) {
        background-color: @libg;
      }
    }
  }
}
</style>
