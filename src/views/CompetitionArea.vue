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
          path: 'chinaSp'
        }, {
          name: '英超',
          path: 'engSp'
        }, {
          name: '西甲',
          path: 'espNail'
        }, {
          name: '德甲',
          path: 'gerNail'
        }, {
          name: '意甲',
          path: 'ItalyNail'
        }, {
          name: '欧冠',
          path: 'europeWinner'
        }, {
          name: '法甲',
          path: 'franceNail'
        }, {
          name: '中甲',
          path: 'chinaNail'
        }, {
          name: '欧联',
          path: 'europeLeague'
        }, {
          name: '英冠',
          path: 'britainWinner'
        }, {
          name: '荷甲',
          path: 'holandNail'
        }, {
          name: '葡甲',
          path: 'portugalNail'
        }, {
          name: '法乙',
          path: 'franceSecond'
        }, {
          name: '俄超',
          path: 'russiaSp'
        }, {
          name: '土超',
          path: 'turkeySp'
        }, {
          name: '日职',
          path: 'japanOccup'
        }, {
          name: '港超',
          path: 'HKSp'
        }, {
          name: 'K联赛',
          path: 'Kleague'
        }, {
          name: '阿甲',
          path: 'argentinaNail'
        }, {
          name: '巴甲',
          path: 'brazilNail'
        }
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