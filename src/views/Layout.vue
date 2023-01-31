<template>
  <a-layout style="height:100%">
    <a-layout-header id="header">
      <router-link to="/">Sunny 搭建</router-link>
      <span class="rightbtn">
        <a-button v-if="user.isLogin" @click="logout">{{ user.name }}</a-button>
        <a-button v-else @click="login">登录</a-button>
      </span>     
    </a-layout-header>
    <a-layout-content id="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer id="footer" v-if="!noFooter">@sunny 备案 xxx 号</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
  import { useRoute } from 'vue-router';
  import { computed, defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { GlobalDataProps } from '@/store';

  export default defineComponent({
    name: 'layout',
    setup() {
      const { meta } = useRoute()
      const store = useStore<GlobalDataProps>()
      const user = computed(() => store.state.user)

      const login = () => {
        store.commit('login')
      }

      const logout = () => {
        store.commit('logout')
      }

      return {
        user,
        noFooter: meta?.noFooter,
        login,
        logout
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
  #header .rightbtn {
    float: right;
    right: 20px;
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