<script>
import {uuid} from "vue-uuid";
import CTASection from "@/components/CTASection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
import ImagesGallery from "@/components/ImagesGallery.vue";

export default {
  name: "AboutUsPage",
  components: {ImagesGallery, AboutUsSection, CTASection},
  data(){
    return{
      publicPath: process.env.BASE_URL,
      data: [
        {
          id: uuid.v1(),
          img: 'logoLight.png',
          title: 'Jesteśmy dla Was od 1998r !',
          content: 'Świadczymy usługi dla firm jak i klientów indywidualnych. Zajmujemy się opróżnianiem zbiorników ' +
              'bezodpływowych oraz oczyszczaniem przydomowych oczyszczalni. Obsługujemy również Rodzinne Ogródki Działkowe „ROD”.'
        },
        {
          id: uuid.v1(),
          img: 'img1.jpeg',
          title: 'Szeroka flota',
          content: 'Dysponujemy nowoczesną i specjalistyczną flotą samochodów asenizacyjnych o pojemnościach 17m3, 16m3 i 11m3. ' +
              'Posiadamy również zestaw ciągnik z beczkowozem o pojemności 5m3, który umożliwia nam opróżnianie zbiorników ' +
              'usytuowanych w wyjątkowo niekorzystnych miejscach.'
        },
        {
          id: uuid.v1(),
          img: 'img3.jpeg',
          title: 'Wykwalifikowana załoga',
          content: 'Naszą kadrę tworzą doświadczeni fachowcy, którzy w branży funkcjonują od ponad 20 lat.'
        },
        {
          id: uuid.v1(),
          img: 'img4.jpg',
          title: 'Wysoki poziom',
          content: 'Ukierunkowani na potrzeby klienta zapewniamy wysoką jakość świadczonych usług, ' +
              'korzystne ceny oraz działania zgodne z ochroną środowiska naturalnego – w tym celu posiadamy niezbędne umowy i zezwolenia.'
        },
      ]
    }
  }
}
</script>

<template>
  <main>
    <AboutUsSection />
    <ImagesGallery />
  </main>
  <CTASection />
</template>

<style scoped>
  main{
    padding: 20px 0;
  }
</style>