<template>
  <div class="login">
    <h1>This is an login</h1>
  </div>
</template>
<script>
import metatag from '@/mixins/metatag'
export default {
  mixins: [metatag],
  mounted(){
    this.setMetaTag('login')
  }
}
</script>