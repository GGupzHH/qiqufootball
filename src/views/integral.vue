<template>
  <div class='integral w'>
    <el-tabs :tab-position="tabPosition" class="zoneleft">
      <el-tab-pane label="中超">
        <div class="zone1">
          <integralTab/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="英超">
        <integralTab/>
      </el-tab-pane>
      <el-tab-pane label="西甲">
        <integralTab/>
      </el-tab-pane>
      <el-tab-pane label="欧冠">
        <integralTab/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabPosition: 'left'
    }
  },
  components: {
    integralTab: () => import('../components/integral_tab')
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
.integral {
  margin-top: 50px;
  padding-top: 30px;
  min-height: 430px;
}
</style>
