<template>
  <div class='integraltab'>
     <el-tabs v-model="activeName">
        <el-tab-pane label="积分榜" name="first">
          <teamscore/>
        </el-tab-pane>
        <el-tab-pane label="射手榜" name="second">
          <shooter/>
        </el-tab-pane>
        <el-tab-pane label="助攻榜" name="third">
          <assists/>
        </el-tab-pane>
        <el-tab-pane label="赛程榜" name="fourth">
          <schedule/>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    teamscore: () => import('./integral/teamscore'),
    shooter: () => import('./integral/shooter'),
    assists: () => import('./integral/assists'),
    schedule: () => import('./integral/schedule') 
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
.integraltab {
  .integral .el-tabs__item.is-active {
    border-left: none;
  }
}
</style>
