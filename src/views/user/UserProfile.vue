<template>
  <div class="notfound">
    <h1>This is an Not Found</h1>
  </div>
</template>
<script>
import metatag from '@/mixins/metatag'
export default {
  mixins: [metatag],
  mounted(){
    this.setMetaTag('user')
  }
}
</script>