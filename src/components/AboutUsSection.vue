<script>
import {uuid} from "vue-uuid";

export default {
  name: "AboutUsSection",
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
  <section>
    <div v-for="text in data" v-bind:key="text.id">
      <div class="text">
        <h3 class="title">{{ text.title }}</h3>
        <p class="content">{{ text.content }}</p>
      </div>
      <img v-bind:src="`${publicPath}${text.img}`" :alt="text.title">
    </div>
  </section>
</template>

<style scoped>
  h3, p{
    margin: 0;
    padding: 0;
  }
  section{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 110px;
  }
  section > div{
    background: var(--light-green);
    padding: 10px 20px;
    width: 1100px;
    display: flex;
    gap: 20px;
    transition: .2s;
  }
  section > div:hover{
    transform: translateY(-5px);
  }
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .title{
    font-size: 48px;
    text-align: center;
    color: var(--test);
    font-weight: 600;
  }
  .content{
    color: var(--text-light);
    text-align: center;
    font-size: 18px;
  }
  div > img{
    width: 460px;
    border-radius: 20px;
  }
  img:first-of-type{
    background: var(--dark-green);
  }
  @media(max-width: 1275px){
    section > div{
      width: 800px;
    }
    div > img{
      width: 300px;
    }
    .title{
      font-size: 32px;
    }
    .content{
      font-size: 14px;
    }
  }
  @media(max-width: 865px){
    section > div{
      width: 500px;
    }
    div > img{
      width: 200px;
    }
  }
  @media(max-width: 555px){
    section > div{
      width: 300px;
      flex-direction: column;
      align-items: center;
    }
  }
</style>