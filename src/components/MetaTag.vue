<template>
    <teleport to="head">
        <title>{{title}}</title>
        <meta name="description" :content="description">
        <meta name="keywords" :content="keywords">
    </teleport>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getMetaData: 'getMetaData'
    }),
    title() {
      return this.getMetaData.title
    },
    description() {
      return this.getMetaData.description
    },
    keywords() {
      return this.getMetaData.keywords
    },
  }
}
</script>