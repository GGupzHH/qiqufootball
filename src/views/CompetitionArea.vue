<template>
  <div>
    赛区
    <!-- <el-container> -->
    <!--侧边栏导航-->
    <el-col :span="4" class="navlist">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo homeul"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened = true
        :collapse-transition= true
        router
        >
        <el-menu-item :index=" '/CompetitionArea/' + item2.path" v-for="(item2, index) in areaArray" :key="index">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ item2.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-main class="homeMain"><router-view></router-view></el-main>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      areaArray: [
        {
          name: '中超',
          path: 'china'
        }
        // 英超, 西甲, 德甲, 意甲, 欧冠, 法甲, 中甲, 欧联, 欧联, 英冠, 荷甲, 葡甲, 法乙, 俄超, 土超, 日职, 港超, K联赛, 阿甲, 巴甲
      ]
    }
  },
  watch: {
    '$route': () => {

    }
  },
  methods: {
    
  },
}
</script>
<style lang="less">
    
</style>