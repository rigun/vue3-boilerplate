<template>
  <MetaTag />
  <div class="r-center-flex r-isExpand r-p-16">
    <router-link class="r-mlr-10" :to="{name: 'Home'}">
      Home
    </router-link>
    <router-link class="r-mlr-10" :to="{name: 'About'}">
      About
    </router-link>
    <router-link class="r-mlr-10" :to="{name: 'Login'}">
      Login
    </router-link>
    <div class="r-mlr-10" @click="gotoRoute('UserProfile')">
      User Profile
    </div>
  </div>
  <select name="locale" id="locale" :value="currentLocale">
    <option v-for="(locale, index) in locales" :key="`locale-${index}`" :value="locale.code" @click="switchLocale(locale.code)">{{locale.label}}</option>
  </select>
  <router-view/>
</template>
<script>
import MetaTag from '@/components/MetaTag'
import { Trans } from '@/helpers/translation'

export default {
  components: {
    MetaTag
  },
  computed: {
    currentLocale(){
      return Trans.currentLocale
    }
  },
  data: () => ({
    locales: [
        {
            code: 'id',
            label: 'Indonesia'
        },
        {
            code: 'en',
            label: 'English'
        },
    ]
  }),
  methods: {
    switchLocale(locale){
      if(this.currentLocale != locale){
          return Trans.changeLocale(locale)
      }
    },
    async gotoRoute(name){
      try{
        await this.$router.push({name})
      }catch(_){
        await this.$router.push({name: '404', })
      }
    }
  }
}
</script>