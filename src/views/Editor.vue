<template>
  <a-layout class="editor" id="editor-layout-main">
    <a-layout-sider width="300" style="background:yellow">
      <div class="sidebar-container">组件列表</div>
    </a-layout-sider>
    <a-layout id="editor-content">
      <a-layout-content class="preview-container">
        <p>画布区域</p>
        <div class="preview-list" id="canvas-area">

        </div>
      </a-layout-content>
    </a-layout>
    <a-layout-sider width="300" style="background:green">
      组件属性
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'editor',
  })
</script>
<style>
#editor-layout-main {
  height: 100%;
  
}
.preview-container {
  text-align: center;
}
#editor-content {
  padding: 0 24px 24px;
  height: 100%;
  background: #ffffff;
}
#canvas-area {
  margin: auto;
  width: 300px;
  height: 300px;
  background: #fafafa;
}
</style>