<template>
  <div class="vl-layout">
    <div class="vl-layout-top">
      <div class="vl-ltt-back inline-block" @click="goBack" v-if="back" title="返回">
        <zd-icon icon="fanhui"></zd-icon>
      </div>
      <div class="vl-ltt-title inline-block">
        <h5 class="ng-binding">{{title}}</h5>
      </div>
      <div class="vl-ltt-right">
        <slot name="right"></slot>
      </div>
    </div>
    <slot name="button"></slot>
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'layout',
    props: {
      // title bar
      title: {
        type: String,
        default: '实例管理',
      },
      back: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      /**
       * 返回上一步
       */
      goBack() {
        history.go(-1)
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-layout-top {
    padding-top: 16px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    font-size: 0;
    border-bottom: 1px solid #DDD;
    h5 {
      display: inline-block;
      border-left: 2px solid #88B7E0;
      vertical-align: top;
      padding-left: 8px;
      font-size: 14px;
      color: #666;
      margin: 8px 8px 8px 0;
    }
    .vl-ltt-back {
      margin-right: 8px;
      cursor: pointer;
      i {
        color: #5195f5;
        font-size: 18px;
      }
    }
    .vl-ltt-right {
      float: right;
      font-size: 12px;
    }
  }
</style>