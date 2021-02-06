import modules from './modules'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import { createStore } from 'vuex'

const masterStorage1 = new VuexPersistence({
  key: 'storage',
  storage: localForage,
  reducer: state => ({ isLoggedIn: state.isLoggedIn }),
  asyncStorage: true
})

export default createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
  },
  actions: {
    async logoutStorage({commit,state}){
      localStorage.clear();
      state.isLoggedIn = false
      const initial = modules
      Object.keys(initial).forEach(key =>  commit(`${key}/resetState`))
    }
  },
  modules,
  plugins: [masterStorage1.plugin]

})