<template>
  <div class='mateinfor'>
    <div class="w">
      <div class="title">
        <div class="left userimg">
          <img src="../assets/bkb1.jpg" alt="">
        </div>
        <div class="left userinfor">
          <h1>
            <span>巴坎布</span>
            <img src="../assets/bkb.png" alt="">
            <img src="../assets/grade/1.png" alt="">
          </h1>
          <p>C. Bakambu</p>
          <p>
            <span class="names">俱乐部:</span>
            <span>北京中赫国安</span>
            <span class="names">位置:</span>
            <span>前锋</span>
          </p>
          <p>
            <span class="names">号码:</span>
            <span>17号</span>
            <span class="names">国家/地区:</span>
            <span>刚果民主共和国</span>
          </p>
          <p>
            <span class="names">年龄:</span>
            <span>28岁</span>
            <span class="names">生日:</span>
            <span>1991-04-11</span>
          </p>
          <p>
            <span class="names">身高:</span>
            <span>182CM</span>
            <span class="names">体重:</span>
            <span>73KG</span>
          </p>
        </div>
        <div class="left jb">
          <h1>荣誉记录</h1>
          <div>
            <p>
              <img src="../assets/jiangbei1.png" alt="">
              <span>中国足球足协杯 x 1</span>
              <span>2018</span>
            </p>
            <p>
              <img src="../assets/jiangbei4.png" alt="">
              <span>欧洲U19国家杯 x 2</span>
              <span>2010 France, 2009/2010</span>
            </p>
          </div>
        </div>
      </div>
      <div class="clearfix echarts">
        <div id="average_xAxis" style="width: 550px; height: 470px;margin-top: 15px;" class="left"></div>
        <div class="left">
          <h1>
            <span>能力</span>
          </h1>
          <ul>
            <li>
              <span>惯用脚:</span>
              <span>左脚</span>
            </li>
            <li>
              <span>国际声望:</span>
              <span> ~ </span>
            </li>
            <li>
              <span>逆足能力:</span>
              <span> ~ </span>
            </li>
            <li>
              <span>速度:</span>
              <span>88</span>
            </li>
            <li>
              <span>力量:</span>
              <span>78</span>
            </li>
            <li>
              <span>防守:</span>
              <span>72</span>
            </li>
            <li>
              <span>盘带:</span>
              <span>80</span>
            </li>
            <li>
              <span>传球:</span>
              <span>35</span>
            </li>
            <li>
              <span>射门:</span>
              <span>75</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="saicheng">
        <h1><span>比赛数据</span></h1>
        <ul>
          <li class="li1">赛季</li>
          <li class="li2">俱乐部</li>
          <li class="li3">上场</li>
          <li class="li4">首发</li>
          <li class="li5">进球</li>
          <li class="li6">助攻</li>
          <li class="li7">黄牌</li>
          <li class="li8">红牌</li>
          <li class="li9">替补</li>
        </ul>
        <ul v-for="(item, index) in datalist" :key="index">
          <li class="li1">{{ item.sj }}</li>
          <li class="li2">{{ item.jlb }}</li>
          <li class="li3">{{ item.sc }}</li>
          <li class="li4">{{ item.sf }}</li>
          <li class="li5">{{ item.jq }}</li>
          <li class="li6">{{ item.zg }}</li>
          <li class="li7">{{ item.hp }}</li>
          <li class="li8">{{ item.hop }}</li>
          <li class="li9">{{ item.tb }}</li>
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
    } = await this.$apiAll.mateinfor(this, `mateinfor`, {})
    this.datalist = data
  },
  mounted () {
    const myechart = this.$echarts.init(document.querySelector('#average_xAxis'), 'walden')
    let option = {
      tooltip: {},
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#16b13a',
            borderRadius: 7,
            padding: [5, 10, 5, 10]
          }
        },
        indicator: [
          {
            name: '速度',
            max: 100
          }, {
            name: '射门',
            max: 100
          }, {
            name: '传球',
            max: 100
          }, {
            name: '盘带',
            max: 100
          }, {
            name: '防守',
            max: 100
          }, {
            name: '力量',
            max: 100
          }
        ]
      },
      series: [
        {
          name: '球员数据',
          type: 'radar',
          data: [
            {
              value: [88, 78, 72, 80, 35, 75],
              name: '球员数据）'
            }
          ]
        }
      ]
    }
    myechart.setOption(option)
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../style/variables');
.mateinfor{
  margin-top: 50px;
  padding-top: 30px;
  min-height: 430px;
  .w {
    .title {
      height: 234px;
      border-top: 2px solid @tableheader;
      background-color: @showclear;
      div.userinfor {
        margin-left: 35px;
        h1 {
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          font-weight: 400;
          margin-top: 10px;
          letter-spacing: 8px;
          img {
            width: 30px;
            height: 30px;
            margin-top: 11px;
            margin-left: 12px;
          }
        }
        p {
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          span {
            color: @headerfontCon;
          }
          span.names {
            color: @spanfont;
            display: inline-block;
            width: 146px;
          }
          span:first-child,span:nth-child(3) {
            letter-spacing: 12px;
          }
          span:nth-child(2),span:nth-child(4) {
            display: inline-block;
            width: 110px;
          }
        }
        p:nth-child(2) {
          font-size: 20px;
          font-weight: 300;
          color: @spanfont;
        }
      }
      div.userimg {
        padding-left: 35px;
        img {
          margin-top: 44px;
        }
      }
      div.left.jb {
        margin-top: 10px;
        margin-left: 100px;
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
    .echarts {
      div:last-child {
        height: 100%;
        width: 800px;
        h1 {
          height: 50px;
          margin-top: 35px;
          background-color: @btnclearborder;
          box-sizing: border-box;
          padding-top: 15px;
          span {
            display: block;
            height: 18px;
            line-height: 18px;
            border-left: 3px solid @zuti;
            box-sizing: border-box;
            margin-left: 18px;
            font-size: 14px;
            padding-left: 8px;
          }
        }
        ul {
          li {
            display: flex;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            padding-left: 35px;
            span {
              flex: 1;
            }
          }
          li:nth-child(2n - 1) {
            background-color: @company_tab;
          }
        }
      }
    }
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
          box-sizing: border-box;
        }
        .li1 {
          flex: 2;
          padding-left: 12px;
          text-align: center;
        }
        .li2 {
          flex: 4;
          padding-left: 12px;
        }
        .li3,.li4,.li5,.li6,.li7,.li8,.li9 {
          flex: 1;
        }
      }
      ul:nth-child(2n) {
        background-color: @mainBg;
      }
      ul:nth-child(2) {
        background-color: @company_tab;
      }
    }
  }
}
</style>
