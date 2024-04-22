<template>
  <section class="menu">
    <svg @click="closeMenu" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
    <ul>
      <li>
        <a>Strona główna</a>
      </li>
      <li>
        <a>O nas</a>
      </li>
      <li>
        <a>Kontakt</a>
      </li>
    </ul>
  </section>
</template>

<script>
  import { gsap } from 'gsap'
  export default{
    props: ['isShown'],
    methods: {
      closeMenu(){
        gsap.to('.menu', {
          opacity: 0,
          duration: .3,
          onComplete: () => this.$emit('close')
        })
      }
    },
    mounted() {
      gsap.fromTo('.menu', {
        opacity: 0
      }, {
        opacity: 1,
        duration: .3
      })
    }
  }
</script>

<style scoped>
  section{
    position: absolute;
    z-index: 9;
    background: var(--medium-green);
    background: rgba(41, 155, 77,.7);
    backdrop-filter: blur(10px);
    height: 100dvh;
    width: 50%;
    padding: 5px;
  }
  ul{
    margin: 0;
    list-style: none;
    padding: 0;
    color: white;
    font-weight: bold;
  }
  li{
    margin-top: 10px;
  }
  li:first-child{
    margin: 0;
  }
  svg{
    float: right;
    height: 30px;
    fill: white;
  }
  svg:hover{
    cursor: pointer;
  }
</style>