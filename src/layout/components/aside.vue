<template>
  <el-aside width="250px" class="aside">
    <div class="left">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <div>
        <el-menu background-color="#0a1b4b" text-color="#fff" active-text-color="#ffd04b" :default-active="activeIndex"
          @select="handleSelect">
          <el-menu-item v-for="route in pageRoutes" :key="route.path" :index="route.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ route.meta.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="right">
      <div class="title">{{ getTitle }}</div>
      <div class="menus">
        <div v-for="(item, index) in getChildren" :key="item.path" :class="index === listIndex ? 'active' : ''"
          @click="handleClickMenu(item, index)">
          {{ item.meta.title }}
        </div>
      </div>
    </div>
  </el-aside>
</template>

<script>
import { pageRoutes } from "@/router"
export default {
  data() {
    return {
      logo: `https://pic4.zhimg.com/80/v2-f181aebbaada09c4335fde88d646d957_1440w.webp`,
      pageRoutes,
      activeIndex: sessionStorage.getItem('activeIndex') || "goods",
      listIndex: sessionStorage.getItem('listIndex') || 0
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index
      sessionStorage.setItem('activeIndex', index)
    },
    handleClickMenu({ name }, index) {
      this.listIndex = index;
      sessionStorage.setItem('listIndex', index)
      this.$router.push({
        name
      })
    }
  },
  computed: {
    getTitle() {
      return pageRoutes
        .filter((route) => route.path === this.activeIndex)
        .shift().meta.title
    },
    getChildren() {
      return pageRoutes
        .filter((route) => route.path === this.activeIndex)
        .shift().children
    },
  },
  mounted() {
    console.log(this.$store, "1")
  },
}
</script>

<style lang="less" scoped>
.aside {
  display: flex;

  .left {
    background-color: #0a1b4b;
    width: 100px;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .right {
    flex: 1;
    background-color: #f7f9fa;
    color: #494a52;

    .title {
      padding: 30px 40px;
    }

    .menus {
      font-size: 14px;
      padding: 10px;

      &>div {
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 5px;
      }

      .active {
        background-color: #e3f4ff;
        color: #6bbdeb;
      }
    }
  }
}
</style>
