<template>
  <div class="news left">
    <div class="newss">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="头条" name="Headlines">
            <div class="newsOnes">
              <div class="newsIs">
                <img src="../assets/ones1.png" alt="" class="left">
                <div class="left">
                  <h1>英超末轮大战即将打响，冠军、欧战席位花落谁家？</h1>
                  <p>
                    <span>2019-05-12</span>
                    <span>&nbsp;&nbsp;16:19:41</span>
                  </p>
                </div>
              </div>
              <div class="newsIs">
                <img src="../assets/ones2.jpg" alt="" class="left">
                <div class="left">
                  <h1>英超末轮大战即将打响，冠军、欧战席位花落谁家？</h1>
                  <p>
                    <span>2019-05-12</span>
                    <span>&nbsp;&nbsp;16:19:41</span>
                  </p>
                </div>
              </div>
              <div class="newsIs">
                <img src="../assets/ones2.jpg" alt="" class="left">
                <div class="left">
                  <h1>英超末轮大战即将打响，冠军、欧战席位花落谁家？</h1>
                  <p>
                    <span>2019-05-12</span>
                    <span>&nbsp;&nbsp;16:19:41</span>
                  </p>
                </div>
              </div>
              <div class="newsIs">
                <img src="../assets/ones1.png" alt="" class="left">
                <div class="left">
                  <h1>英超末轮大战即将打响，冠军、欧战席位花落谁家？</h1>
                  <p>
                    <span>2019-05-12</span>
                    <span>&nbsp;&nbsp;16:19:41</span>
                  </p>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="中超" name="League">中超</el-tab-pane>
          <el-tab-pane label="深度" name="depth">深度</el-tab-pane>
          <el-tab-pane label="闲情" name="Leisure">闲情</el-tab-pane>
          <el-tab-pane label="国际" name="international">国际</el-tab-pane>
          <el-tab-pane label="英超" name="Premier">英超</el-tab-pane>
          <el-tab-pane label="西甲" name="Spanish">西甲</el-tab-pane>
          <el-tab-pane label="意甲" name="Serie">意甲</el-tab-pane>
          <el-tab-pane label="德甲" name="Bundesliga">德甲</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeName: 'Headlines'
    }
  },
  methods: {
    handleClick () {

    }
  },
}
</script>
<style lang="less" scoped>
@import url('../style/variables');
.news {
  width: 100%;
  margin-top: 30px;
  border-top: 2px solid @zuti;
  padding-top: 20px;
  .newsOnes {
    .newsIs {
      margin: 20px auto;
      height: 141px;
      border-bottom: 1px solid @showclear;
      position: relative;
      img {
        position: absolute;
      }
      div.left {
        width: 100%;
        box-sizing: border-box;
        padding-left: 180px;
        h1 {
          font-size: 16px;
          color: @headerfontCon;
          margin-left: 30px;
          margin-top: 20px;
        }
        p {
          margin-top: 65px;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
