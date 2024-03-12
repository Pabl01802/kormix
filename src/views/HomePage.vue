<template>
  <NavBar />
  <main>
    <HeroSection />
    <AttributesSection />
    <AboutUsHome />
  </main>
  <FooterSection />
  <CTASection />
</template>

<script>
import { useHead } from '@vueuse/head'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import CTASection from '@/components/CTASection.vue'
import AttributesSection from '@/components/AttributesSection.vue'
import AboutUsHome from "@/components/AboutUsHome.vue";
import FooterSection from '@/components/FooterSection.vue'

export default ({
  setup(){
    useHead({
      title: 'KORMIX - Zapewniamy konkurencyjne ceny',
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
    HeroSection,
    CTASection,
    AttributesSection,
    AboutUsHome,
    FooterSection
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
