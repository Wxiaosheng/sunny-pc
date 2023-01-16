<template>
  <h1>VUE3 PC 标准模版</h1>
  <Hello msg="hello" />
  <a-button type="primary">and-vue-button</a-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hello from "./components/Hello";

export default defineComponent({
  name: "App",
  components: {
    Hello,
  },
});
</script>
