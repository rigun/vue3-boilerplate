<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calendar > 
      <template #h1>
        <h1>Slot data</h1>
      </template>
      <template #h2>
        <h2>Slot data</h2>
      </template>
    </Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Home',
  components: {
    Calendar
  }
}
</script>
