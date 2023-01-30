<template>
  <div> detail {{ id }} </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'template-detail',
    setup() {
      const { params: { id } } = useRoute()
      return {
        id
      }
    }
  })
</script>