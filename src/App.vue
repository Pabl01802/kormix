<template>
  <NavBar />
</template>

<script>
import { useHead } from '@vueuse/head'
import NavBar from './components/NavBar.vue'

export default ({
  setup(){
    useHead({
      meta: [
        {
          name: 'description',
          content: 'Kormix - firma zajmująca się wywozem nieczystości płynnych'
        },
        {
          name: 'keywords',
          content: 'Kormix, kormix, wywóz, wywóz nieczystości, wywóz nieczystości płynnych'
        }
      ]
    })
  },
  name: 'KORMIX - zapewniamy konkurencyjne ceny',
  components: {
    NavBar
  }
})
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
