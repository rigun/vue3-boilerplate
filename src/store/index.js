import modules from './modules'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import { createStore } from 'vuex'

localForage.config({
  name        : 'myApp',
  version     : 1.0,
  storeName   : 'boilerplate', // Should be alphanumeric, with underscores.
});

const masterStorage1 = new VuexPersistence({
  key: 'locale',
  storage: localForage,
  reducer: state => ({ locale: state.locale }),
  asyncStorage: true
})

export default createStore({
  state: {
    isLoggedIn: false,
    metaData: {
        title: '',
        description: '',
        keywords: ''
    },
  },
  getters: {
    getMetaData: state => state.metaData,
  },
  actions: {
    setMetaTag({state}, {
        title = null, 
        description = null, 
        keywords = null
      }){
        if(title) state.metaData.title = title 

        if(description) state.metaData.description = description

        if(keywords) state.metaData.keywords = keywords
    },
    async logoutStorage({commit,state}){
      localStorage.clear();
      state.isLoggedIn = false
      const initial = modules
      Object.keys(initial).forEach(key =>  commit(`${key}/resetState`))
    }
  },
  mutations: {
  },
  modules,
  plugins: [masterStorage1.plugin]

})