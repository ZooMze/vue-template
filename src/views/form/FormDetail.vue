<template>
  <div>
    <el-button type="" @click="goToPage('Form')">回到Form</el-button>
    <p>1</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 1
    }
  },
  methods: {
    goToPage(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>
