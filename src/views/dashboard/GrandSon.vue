<template>
  <div>
    <!-- {{ injectValue }} -->
    I'm {{ title }}, I extends value : "{{ computedInjectValue }}" from Parent.
  </div>
</template>

<script>
export default {
  name: 'GrandSon',
  inject: ['injectValue'], // 在inject内接收
  data() {
    return {
      injectData: null,
      title: 'GrandSon'
    }
  },
  computed: {
    computedInjectValue() {
      return this.injectValue()
    }
  }
}
</script>
