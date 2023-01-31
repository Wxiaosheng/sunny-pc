import { createStore } from "vuex";

export interface UserProps {
  isLogin: boolean;
  name?: string;
}

export interface TemplateProps {
  key: string;
  title: string;
  coverImg?: string;
}

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    templates: [
      { key: '1', title: 'xxx111' },
      { key: '2', title: 'xxx222' }
    ]
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'sunny' }
    },
    logout(state) {
      state.user = { isLogin: false }
    }
  }
})

export default store