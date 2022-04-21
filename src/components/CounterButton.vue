<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
      this.counter += 2;
    },
  },
};
</script>

<style></style>

<template>
  <p>test2</p>
  <input @click="onClick" :value="counter" type="button" />
</template>
