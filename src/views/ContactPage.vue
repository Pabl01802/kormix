<template>
  <CompanyMap />
  <ContactSection />
</template>

<script>
import ContactSection from "@/components/ContactSection.vue";
import CompanyMap from "@/components/CompanyMap.vue";

export default {
  name: "ContactPage",
  components: {CompanyMap, ContactSection }
}
</script>

<style scoped>

</style>