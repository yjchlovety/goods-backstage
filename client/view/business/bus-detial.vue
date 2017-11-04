<template>
  <ml-layout title="商家详情" :back="true">
    <ml-area-title title="基础信息">
      <ml-one-line>
        <div slot="label">活动名称</div>
        <div slot="content">{{coupon.name}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">活动时间</div>
        <div slot="content">{{coupon.startDate}} - {{coupon.endDate}}</div>
      </ml-one-line>
    </ml-area-title>
    <ml-area-title title="用户信息" class="ml-last-area">
      <ml-one-line>
        <div slot="label">活动名称</div>
        <div slot="content">{{coupon.name}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">活动时间</div>
        <div slot="content">{{coupon.startDate}} - {{coupon.endDate}}</div>
      </ml-one-line>
    </ml-area-title>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        coupon: {}
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>