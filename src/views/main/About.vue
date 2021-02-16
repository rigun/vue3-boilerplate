<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import metatag from '@/mixins/metatag'
export default {
  mixins: [metatag],
  mounted(){
    this.setMetaTag('about')
  }
}
</script>