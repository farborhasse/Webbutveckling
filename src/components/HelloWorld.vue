<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
      // msg: String,
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>
