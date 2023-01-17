<template>
  <template-list :list="list"></template-list>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TemplateList from '@/components/TemplateList.vue';

  export default defineComponent({
    name: 'home',
    components: {
      TemplateList
    },
    data: function() {
      return {
        list: [
          { key: '1', title: 'xxx111' },
          { key: '2', title: 'xxx222' }
        ]
      };
    }
  })
</script>