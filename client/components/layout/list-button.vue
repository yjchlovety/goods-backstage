<template>
  <div class="vl-list-button">
    <slot name="search"></slot>
    <el-button type="primary">添加</el-button>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'list-button',
    props: {
      /**
       * 功能icons
       */
      btnIcons: {
        type: Array,
        default: () => []
      },
      /**
       * 功能事件列表 必须与btnIcons顺便保持一致
       */
      btnEvents: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .vl-list-button {
    .el-button {
      vertical-align: middle;
    }
    .search-warp > .el-input {
      margin-right: 10px;
    }
  }

</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-list-button {
    padding-bottom: 10px;
    font-size: 0;
    h5 {
      display: inline-block;
      border-left: 2px solid #ff4d51;
      vertical-align: top;
      padding-left: 8px;
      font-size: 14px;
      color: #666;
      margin: 8px 8px 8px 0;
    }
    .vl-ltt-right {
      float: right;
      font-size: 12px;
    }
  }
</style>