<template>
  <a-layout style="height:100%">
    <a-layout-header id="header">Sunny</a-layout-header>
    <a-layout-content id="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer id="footer" v-if="!noFooter">@sunny 备案 xxx 号</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
  import { useRoute } from 'vue-router';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'layout',
    setup() {
      const { meta } = useRoute()
      return {
        noFooter: meta?.noFooter
      }
    }
  })
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
    color: #ffffff;
    background: #666666;
  }
</style>