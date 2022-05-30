<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      onClick() {
        this.counter++
      }
    }
  }
</script>

<style></style>

<template>
  <input @click="onClick" :value="counter" type="button" />
</template>
