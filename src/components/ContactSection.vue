<template>
  <section>
    <div>
      <h1>Kontakt</h1>
      <ul>
        <li v-for="day in workDays" v-bind:key="day.id">
          <p>{{ day.title }}: {{ day.hours }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <h3>{{ item.title }}:</h3>
          <p v-for="(text, index) in item.content" v-bind:key="`${item.id}-text-${index}`">
            {{ text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import {uuid} from "vue-uuid";

export default {
  name: "ContactSection",
  data(){
    return{
      workDays: [
        {
          id: uuid.v1(),
          title: 'Poniedziałek',
          hours: '7-20'
        },
        {
          id: uuid.v1(),
          title: 'Wtorek',
          hours: '7-20'
        },
        {
          id: uuid.v1(),
          title: 'Środa',
          hours: '7-20'
        },
        {
          id: uuid.v1(),
          title: 'Czwartek',
          hours: '7-20'
        },
        {
          id: uuid.v1(),
          title: 'Piątek',
          hours: '7-20'
        },
        {
          id: uuid.v1(),
          title: 'Sobota',
          hours: '7-14'
        },
        {
          id: uuid.v1(),
          title: 'Niedziela',
          hours: 'Zamknięte.'
        },
      ],
      items: [
        {
          id: uuid.v1(),
          title: 'Adres',
          content: ['Daszewice ul.Poznańska 5']
        },
        {
          id: uuid.v1(),
          title: 'Telefon',
          content: ['503 820 458', '61 893 97 56']
        },
        {
          id: uuid.v1(),
          title: 'Email',
          content: ['kontakt@kormix.pl']
        }
      ]
    }
  }
}
</script>

<style scoped>
  section{
    display: grid;
    grid-template-columns: 400px 400px;
    gap: 50px;
    justify-content: center;
    padding: 50px;
  }
  section > div:first-of-type{
    text-align: center;
  }
  ul, li, h1, h3{
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  h1, h3{
    color: var(--test);
  }
  h1{
    font-size: 48px;
  }
  h3{
    font-size: 28px;
  }
  p{
    color: var(--text-light);
    font-size: 18px;
  }
  @media(max-width: 900px){
    h1{
      font-size: 36px;
    }
    h3{
      font-size: 24px;
    }
    p{
      font-size: 16px;
    }
    section{
      grid-template-columns: 1fr;
      gap: 30px;
    }
    section > div:last-of-type{
      text-align: center;
    }
  }
</style>