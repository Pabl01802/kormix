<template>
  <NavBar />
  <router-view>
  </router-view>
  <CTASection />
  <FooterSection />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import CTASection from "@/components/CTASection.vue";
export default {
  name: 'App',
  components: {CTASection, NavBar, FooterSection }
}
</script>
<style>
  :root{
    --dark-green: #02641E;
    --medium-green: #299B4D;
    --light-green: rgba(112, 184, 134, 0.22);
    --text-gray: #fff;
    --text-light: #515151;
    --test: #132F3F;
  }
</style>