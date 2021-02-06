<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view/>
</template>
<script>
// import { mapGetters, mapActions} from 'vuex'

// export default {
//   computed: {
//     ...mapGetters({
//       categoryStatus: 'category/getStatus',
//       categoryData: 'category/getList'
//     })
//   },
//   data: () => ({
//     category: 'TestCategory',
//   }),
//   mounted(){
//     this.category = this.$store.getters['category/getStatus']
//     this.getData()
//   },
//   methods: {
//     ...mapActions({
//       getCategory: 'category/getData',
//       resetCategory: 'category/resetState',
//     }),
//     async getData(){
//       this.resetCategory()
//       if(this.categoryData.length == 0 ) this.getCategory()
//     }
//   }
// }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
