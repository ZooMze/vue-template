<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({ getName: 'app/getZoomze' })
  },
  mounted() {
    window.z = this
  },
  methods: {
    ...mapMutations(['app/TOGGLE_DEVICE'])
  }
}
</script>
