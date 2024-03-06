<template>
  <NavBar />
  <main>
    <HeroSection />
  </main>
</template>

<script>
import { useHead } from '@vueuse/head'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'

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
  components: {
    NavBar,
    HeroSection
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
