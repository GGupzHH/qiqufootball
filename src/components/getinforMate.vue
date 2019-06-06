<template>
  <div class='getinforMate'>
    <div class="centers">
      <h1><span>队员</span></h1>
      <ul class="clearfix">
        <li class="li1">位置</li>
        <li class="li2">号码</li>
        <li class="li3">姓名</li>
        <li class="li4">出场</li>
        <li class="li5">进球</li>
        <li class="li6">国籍</li>
      </ul>
      <ul v-for="(item, index) in dataList" :key="index" @click="getMeatinfor" class="hovers">
        <li class="li1">{{ item.wz }}</li>
        <li class="li2">{{ item.hm }}</li>
        <li class="li3">{{ item.name }}</li>
        <li class="li4">{{ item.cc }}</li>
        <li class="li5">{{ item.jq }}</li>
        <li class="li6" v-if="item.gj === 1">
          <img src="../assets/china.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 2">
          <img src="../assets/china2.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 3">
          <img src="../assets/china3.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 4">
          <img src="../assets/china4.png" alt="">
        </li>
        <li class="li6" v-if="item.gj === 5">
          <img src="../assets/china5.png" alt="">
        </li>
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
    } = await this.$apiAll.getinforMate(this, `getinforMate`, {})
    this.dataList = data
  },
  methods: {
    getMeatinfor () {
      this.$router.push({
        path: '/mateinfor'
      })
    }
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../style/variables');
.getinforMate {
  margin-top: 30px;
  border-top: 2px solid @tableheader;
  background-color: @showclear;
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
    cursor: pointer;
    transition: all .4s;
    li {
      float: left;
      box-sizing: border-box;
      img {
        width: 20px;
        margin-top: 8px;
      }
    }
    .li1,.li2,.li4,.li5 {
      flex: 1;
      text-align: center;
    }
    .li3 {
      flex: 3;
      text-align: left;
      padding-left: 22px;
    }
    .li6 {
      text-align: center;
      flex: 2;
    }
    .li1 {
      padding-left: 32px;
    }
  }
  ul:nth-child(2n) {
    background-color: @mainBg;
  }
  ul.hovers:hover {
    background-color: @company_tab;
    .li3 {
      color: @zuti;
    }
  }
}
</style>
