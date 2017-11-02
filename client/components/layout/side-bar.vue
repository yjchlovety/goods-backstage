<template>
  <div class="vl-side-bar">
    <div class="sidebar-nav" v-for="(item,index) in menuJson " :key="`sidebar-nav${index}`">
      <div class="sidebar-title" :class="{'sidebar-open':item.isOpen,'no-nav':!item.subMenu||item.subMenu.length==0}"
           @click="openOrClose(item,index)">
        <zd-icon v-if="item.icon" :icon="item.icon"></zd-icon>
        <span class="sidebar-title-text inline-block">{{item.name}}</span>
      </div>
      <ul class="sidebar-nav-ul" :style="`max-height:${item.maxHeight}px`">
        <li class="nav-item" :class="{'nav-item-checked':childItem.link==$route.meta.sidebarLink}"
            v-for="(childItem,cldIndex) in item.subMenu" @click="goToUrl(childItem)"
            :key="`sidebar.${index}.nav.${cldIndex}`">
          {{childItem.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  import sideJson from './sidebar'

  export default {
    name: 'side-bar',
    data() {
      return {
        menuJson: [], // 菜单
        menuIndex: -1, // 当前展开菜单索引
      }
    },
    created() {
      const sideBar = sideJson['sideBar' + this.$storage.getItem('userObject', false).powerLevel]
      let result = false
      sideBar.forEach((one, index) => {
        one.isOpen = false
        one.maxHeight = 0
        if (!result) {
          one.isOpen = one.link === this.$route.fullPath
          for (let i = 0, len = one.subMenu.length; i < len; i++) {
            if (one.subMenu[i].link === this.$route.meta.sidebarLink) {
              this.menuIndex = index
              const hh1 = document.documentElement.clientHeight - 50 - 40 * sideBar.length
              const hh2 = one.subMenu.length * 40
              one.maxHeight = hh1 > hh2 ? hh2 : hh1
              one.isOpen = true
              result = true
              break
            }
          }
        }
      })
      this.menuJson = JSON.parse(JSON.stringify(sideBar))
    },
    methods: {
      /**
       * 展开关闭菜单
       * @param {Object} item
       * @param {Number} index
       */
      openOrClose(item, index) {
        if (this.menuIndex === index) {
          item.isOpen = false
          item.maxHeight = 0
          this.menuIndex = -1
        } else {
          this.menuJson.forEach(v => {
            v.isOpen = 0
            v.maxHeight = 0
          })
          if (this.menuJson[index].subMenu && this.menuJson[index].subMenu.length > 0) {
            const hh1 = document.documentElement.clientHeight - 50 - 40 * this.menuJson.length
            const hh2 = this.menuJson[index].subMenu.length * 40
            this.menuJson[index].maxHeight = hh1 > hh2 ? hh2 : hh1
          }
          this.menuJson[index].isOpen = true
          this.goToUrl(item)
          this.menuIndex = index
        }
      },
      /**
       * 路由跳转
       * @param obj
       */
      goToUrl(obj) {
        if (obj.link) this.$router.push(obj.link)
      }
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-side-bar {
    .sidebar-title {
      height: 40px;
      background-color: #42485B;
      color: #fff;
      line-height: 40px;
      padding: 0 18px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .sidebar-title-text {
        padding-left: 10px;
      }
      i {
        vertical-align: middle;
      }
    }
    .nav-item-left {
      float: left;
      width: 30px;
      text-align: center;
      height: 40px;
    }
    .nav-item {
      position: relative;
      background-color: #333745;
      height: 40px;
      color: #fff;
      line-height: 20px;
      cursor: pointer;
      padding: 10px 35px;
      box-sizing: border-box;
    }
    .nav-item:hover {
      background-color: #50576e;
    }
    .nav-item-checked, .nav-item-checked:hover, .sidebar-open.no-nav {
      background-color: #1ac1de;
    }
    .sidebar-nav-ul {
      width: 200px;
      margin: 0;
      padding: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      transition: all 0.12s ease, 0.12s ease;
    }
    .sidebar-nav {
      overflow: hidden;
    }
  }
</style>