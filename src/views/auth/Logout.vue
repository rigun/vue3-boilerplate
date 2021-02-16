<template>
  <div class="logout">
    <h1>This is an Logout</h1>
  </div>
</template>
<script>
import metatag from '@/mixins/metatag'
export default {
  mixins: [metatag],
  mounted(){
    this.setMetaTag()
  }
}
</script>