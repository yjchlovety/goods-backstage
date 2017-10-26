<template>
  <div class="vl-layout">
    <div class="vl-layout-top">
      <div class="vl-ltt-title">
        <h5 class="ng-binding">{{title}}</h5>
      </div>
      <div class="vl-ltt-back">
      </div>
      <slot name="right"></slot>
    </div>
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
    }
  }
</script>