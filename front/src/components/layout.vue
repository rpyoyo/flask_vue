<template>
    <row type="flex" class="layout" :class="{'layout-hide-text': spanLeft < 4}">
      <i-col :span="spanLeft" class="layout-menu-left">
        <i-menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <div class="layout-logo-left">非正常人类把柄研究中心</div>
          <!--<submenu name="1">-->
            <!--<template slot="title">-->
              <!--<icon type="ios-navigate" :size="iconSize"></icon>-->
              <!--<span class="layout-text">导航一</span>-->
            <!--</template>-->
            <!--<menu-item name="1-1">选项 1</menu-item>-->
            <!--<menu-item name="1-2">选项 2</menu-item>-->
            <!--<menu-item name="1-3">选项 3</menu-item>-->
          <!--</submenu>-->
          <submenu name="2">
            <template slot="title">
              <icon type="ios-keypad" :size="iconSize"></icon>
              <span class="layout-text">把柄管理</span>
            </template>
            <menu-item name="2-1">包子</menu-item>
            <menu-item name="2-2">少妇</menu-item>
          </submenu>
          <submenu name="3">
            <template slot="title">
              <icon type="ios-analytics" :size="iconSize"></icon>
              <span class="layout-text">成员管理</span>
            </template>
            <menu-item name="3-1">包子</menu-item>
            <menu-item name="3-2">少妇</menu-item>
          </submenu>
        </i-menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <icon type="navicon" size="32"></icon>
          </i-button>
        </div>
        <div class="layout-breadcrumb">
          <breadcrumb>
            <breadcrumb-item href="#">首页</breadcrumb-item>
            <breadcrumb-item href="#">把柄管理</breadcrumb-item>
            <breadcrumb-item>包子</breadcrumb-item>
          </breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
          <router-view/>
        </div>
        <div class="layout-copy">
          <!--2011-2016 &copy; TalkingData-->
        </div>
      </i-col>
    </row>
</template>

<script>
  export default {
    name: 'layout',
    data () {
      return {
        spanLeft: 4,
        spanRight: 20
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 4 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
//        if (this.spanLeft === 4) {
//          this.spanLeft = 2
//          this.spanRight = 22
//        } else {
//          this.spanLeft = 4
//          this.spanRight = 20
//        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    min-height: 100%;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: calc(100% - 170px);
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height:30px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
