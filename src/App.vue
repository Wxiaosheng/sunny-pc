<template>
  <a-layout style="height:100%">
    <a-layout-header id="header">Sunny</a-layout-header>
    <a-layout-content id="content">
      <!-- <home /> -->
      <editor />
    </a-layout-content>
    <a-layout-footer id="footer">@sunny 备案 xxx 号</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Home from "./views/Home.vue";
import Editor from "./views/Editor.vue";

export default defineComponent({
  name: "App",
  components: {
    // Home,
    Editor
  },
});
</script>

<style>
  #app {
    height: 100%;
  }
  #header {
    color: #ffffff;
  }
  #content {
    height:100%;
    background: #ffffff;
  }
  #footer {
    background: #fafafa;
  }
</style>
