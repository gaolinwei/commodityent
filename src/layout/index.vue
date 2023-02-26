<template>
  <div class="layout-container">
    <el-container class="h-full">
      <Aside />
      <el-container class="h-full">
        <el-header>
          <Header />
        </el-header>
        <Main />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./components/aside.vue"
import Main from "./components/main.vue"
import Header from "./components/header.vue"

export default {
  components: {
    Aside,
    Main,
    Header
  },
}
</script>
