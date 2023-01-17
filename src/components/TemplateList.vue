<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col :span="6" v-for="item in list" :key="item.key" >
        <a-card hoverable>
          <template v-slot: cover>
            <span>{{item.title}}</span>
            <!-- <img src="http://"  /> -->
            <div class="hover-item">
              <a-button size="large" type="primary">primary</a-button>
            </div>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
  interface TemplateProps {
    key: string;
    coverImg?: string;
  }

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'template-list',
    props: {
      list: {
        type: Array,
        required: true
      },
      type: {
        type: String,
        default: 'work'
      }
    }
  })
</script>