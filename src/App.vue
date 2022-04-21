<script>
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import CounterButton from './components/CounterButton.vue'

  export default {
    components: {
      CitiesList,
      HelloWorld,
      CounterButton
    }
  }
</script>

<template>
  {{ $store.state.counter }}
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>

  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton />

  <main>
    <RouterView />
  </main>
</template>
