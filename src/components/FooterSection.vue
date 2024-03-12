<template>
  <footer>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <h3>{{ item.title }}:</h3>
        <p v-for="(text, index) in item.content" v-bind:key="`${item.id}-text-${index}`">
          {{ text }}
        </p>
      </li>
    </ul>
  </footer>
</template>

<script>
import {uuid} from "vue-uuid";

export default {
  name: 'FooterSection',
  data(){
    return {
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
  footer{
    background: var(--dark-green);
    display: flex;
    justify-content: center;
    padding: 50px;
  }
  p, ul{
    margin: 0;
    padding: 0;
  }
  p{
    margin-top: 10px;
  }
  ul{
    display: flex;
    justify-content: center;
    list-style: none;
    color: #fff;
    gap: 100px;
  }
  h3{
    font-size: 23px;
    text-align: center;
  }
  @media(max-width: 768px){
    footer{
      margin-bottom: 60px;
      padding: 20px;
    }
    ul{
      gap: 10px;
      flex-direction: column;
    }
    p{
      text-align: center;
    }
  }
</style>