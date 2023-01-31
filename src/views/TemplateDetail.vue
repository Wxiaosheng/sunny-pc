<template>
  <div> detail {{ template?.key }} {{ template?.title }} </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { GlobalDataProps } from '@/store';

  export default defineComponent({
    name: 'template-detail',
    setup() {
      const { params: { id } } = useRoute()
      const store = useStore<GlobalDataProps>()
      const template = computed(() => store.state.templates.find(temp => temp.key === id))

      return {
        template
      }
    }
  })
</script>