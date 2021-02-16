<template>
  <div class="about">
    <h1>{{$t("text.welcome")}}</h1>
  </div>
</template>
<script>
import metatag from '@/mixins/metatag'
export default {
  mixins: [metatag],
  mounted(){
    this.setMetaTag() //default
  }
}
</script>

