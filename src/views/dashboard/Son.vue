<template>
  <div>
    I'm {{ title }}, I still have a son.
    <grand-son />
  </div>
</template>

<script>
import grandSon from './GrandSon'
export default {
  name: 'Son',
  components: { grandSon },
  data() {
    return {
      title: 'Son'
    }
  }
}
</script>
