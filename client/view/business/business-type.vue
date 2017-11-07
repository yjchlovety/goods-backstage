<template>
  <ml-layout title="分类管理">
    <div class="shop-class-tree">
      <div class="button-bar">
        <el-popover placement="right"
                    width="280"
                    v-model="popoverState"
                    ref="classAdd">
          <div class="common-pop-wrap">
            <div class="class-label">上级分类</div>
            <el-cascader
              class="class-select"
              :options="optionFilter()"
              :props="defaultProps"
              v-model="selectVal"
              change-on-select
            ></el-cascader>
            <div class="class-label">类别名称</div>
            <el-input class="input-class-name" v-model="className"></el-input>
            <div class="pop-bottom">
              <el-button type="primary" @click="addTree">确定</el-button>
              <el-button @click="popoverState=false">取消</el-button>
            </div>
          </div>
        </el-popover>
        <el-button v-popover:classAdd type="primary">添加类别</el-button>
      </div>
      <el-tree
        node-key="id"
        :data="treeData"
        :props="defaultProps"
        :default-expand-all="true"
        :expand-on-click-node="false"
        :render-content="renderContent"></el-tree>
      <ml-tree>

      </ml-tree>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        popoverState: false,
        className: '',
        selectVal: [0],
        treeData: [
          {
            label: '根目录',
            id: 0,
            children: [
              {
                id: 11,
                label: '一级 1',
              },
              {
                id: 22,
                label: '一级 2',
              },
            ]
          },
          {
            label: '根目录',
            id: 0,
            children: [
              {
                id: 11,
                label: '一级 1',
              },
              {
                id: 22,
                label: '一级 2',
              },
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label',
          value: 'id'
        },
      }
    },
    methods: {
      /**
       * 过滤第四级分类
       * @return {Array} ary
       */
      optionFilter() {
        const ary = [{ label: '根目录', id: 0, children: [] }]
        this.treeData[0].children.forEach(v1 => {
          // 第一级
          const obj1 = { label: v1.label, id: v1.id, children: [] }
          ary[0].children.push(obj1)
          if (v1.children && v1.children.length > 0) {
            // 第二级
            v1.children.forEach(v2 => {
              obj1.children.push({ label: v2.label, id: v2.id })
            })
          }
        })
        return ary
      },
      /**
       * 添加树
       */
      addTree() {
        if (!this.className) {
          this.$message.error('请输入类别名称')
          return
        }
        const obj = { label: this.className, id: Math.floor(Math.random() * 100000) }
        if (this.selectVal.length < 3) obj.children = []
        switch (this.selectVal.length) {
          case 3:
            this.treeData[0].children[this.selectVal[1]].children[this.selectVal[2]].children.push(obj)
            break
          case 2:
            this.treeData[0].children[this.selectVal[1]].children.push(obj)
            break
          case 1:
            this.treeData[0].children.push(obj)
            break
          default:
            break
        }
        this.className = ''
        this.popoverState = false
        this.selectVal = [0]
      },
      deleteTree(store, data) {
        store.remove(data)
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
        if (data.$treeNodeId > 1) {
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span class="tree-btn">
                <el-button type="danger" size="mini" on-click={() => this.deleteTree(store, data)}>删除</el-button>
              </span>
            </span>
          )
        }
        return (<span>{node.label}</span>)
      },
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .shop-class-tree {
    .tree-btn {
      float: right;
      margin-right: 20px;
    }
  }
</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .input-class-name {
    margin-bottom: 15px;
  }

  .class-select {
    margin-bottom: 10px;
    width: 100%;
  }

  .class-label {
    padding: 5px 0;
    font-size: 14px;
  }

</style>