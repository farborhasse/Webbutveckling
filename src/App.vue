<script>
  import cryptoList from './components/cryptoList.vue'

  export default {
    components: {
      cryptoList
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/counter">Räknare</RouterLink>
      </li>
    </ul>
  </nav>

  <cryptoList />

  <main>
    <RouterView />
  </main>
</template>
