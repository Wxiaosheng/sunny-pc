<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col :span="6" v-for="item in list" :key="item.key" >
        <a-card hoverable>
          <template v-slot: cover>
            <span>{{item.title}}</span>
            <!-- <img src="http://"  /> -->
            <div class="hover-item">
              <a-button size="large" type="primary" @click="handleClick(item.key)">进入详情</a-button>
              <a-button size="large" type="primary" @click="handleEditor(item.key)">编辑</a-button>
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
    title: string;
    coverImg?: string;
  }

  import { useRouter } from 'vue-router';
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'template-list',
    props: {
      list: {
        type: Array as PropType<TemplateProps[]>,
        required: true
      },
      type: {
        type: String,
        default: 'work'
      }
    },
    setup() {
      const router = useRouter()

      const handleClick = (id: string) => {
        router.push(`/detail/${id}`)
      }

      const handleEditor = (id: string) => {
        router.push(`/editor/${id}`)
      }

      return {
        handleClick,
        handleEditor
      }
    }
  })
</script>