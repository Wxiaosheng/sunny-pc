<template>
  <template-list :list="list"></template-list>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useStore } from 'vuex';
  import { GlobalDataProps } from '@/store';
  import TemplateList from '@/components/TemplateList.vue';

  export default defineComponent({
    name: 'home',
    components: {
      TemplateList
    },
    setup() {
      const store = useStore<GlobalDataProps>()
      // computed 才会跟踪变化
      const list = computed(() => store.state.templates)

      return {
        list
      }
    }
  })
</script>