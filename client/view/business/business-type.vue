<template>
  <ml-layout title="分类管理">
    <div class="padding-tb-20">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"></el-tree>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      }
    },
    methods: {
      /**
       */
      handleNodeClick(data) {
        this.log(data)
      },
      /**
       * 自定义tree模版
       * @param h
       * @param node
       * @param data
       * @param store
       * @return {XML}
       */
      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={() => this.append(store, data)}>Append</el-button>
              <el-button size="mini" on-click={() => this.remove(store, data)}>Delete</el-button>
            </span>
          </span>
        )
      },
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>