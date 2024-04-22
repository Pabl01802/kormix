<script>
import { uuid } from "vue-uuid";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ref } from 'vue'

export default {
  name: "CarouselGallery",
  mounted(){
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin)
    window.addEventListener('resize', () => {
      this.scrollToElement(this.current)
    })
  },
  unmounted() {
    window.clearInterval(this.sliderInterval)
  },
  setup(){
    const imgRef = ref()
    const carouselRef = ref()

    return { imgRef, carouselRef }
  },
  data(){
    let current = 0
    const sliderInterval = setInterval(() => {
      this.changeImg('next')
    }, 5000)
    const areas = [
      {
        id: uuid.v1(),
        title: 'GMINA KÓRNIK',
        src: 'https://kormix.pl/wp-content/uploads/2024/02/gminaKorniknastroneofficial-700x800.png'
      },
      {
        id: uuid.v1(),
        title: 'GMINA MOSINA',
        src: 'https://kormix.pl/wp-content/uploads/2024/02/mosinanastrone-706x706.png'
      },
      {
        id: uuid.v1(),
        title: 'GMINA BRODNICA',
        src: 'https://kormix.pl/wp-content/uploads/2024/02/brodnicanastrone-722x722.png'
      },
      {
        id: uuid.v1(),
        title: 'MIASTO POZNAŃ',
        src: 'https://kormix.pl/wp-content/uploads/2024/02/poznannastrone1-722x722.png'
      },
      {
        id: uuid.v1(),
        title: 'MIASTO PUSZCZYKOWO',
        src: 'https://kormix.pl/wp-content/uploads/2024/02/puszczykowonastrone-718x718.png'
      }
    ]
    return { areas, current, sliderInterval }
  },
  methods: {
    scrollToElement(index){
      gsap.to(this.carouselRef, {
        scrollTo: {
          x: this.imgRef[index]
        },
        duration: 1,
      })
    },
    changeImg(direction){
      if(this.current === 0 && direction === 'prev'){
        this.current = this.areas.length - 1
        this.scrollToElement(this.areas.length - 1)
      }else if(this.current === this.areas.length - 1 && direction === 'next'){
        this.current = 0
        this.scrollToElement(0)
      }else{
        if(direction === 'next'){
          this.current++
          this.scrollToElement(this.current)
        }
        else if(direction === 'prev'){
          this.current--
          this.scrollToElement(this.current)
        }
        else{
          this.current = direction
          this.scrollToElement(direction)
        }
      }
    }
  },
}
</script>

<template>
  <div class="container">
    <div ref="carouselRef" class="images-wrapper">
      <div class="change-img" @click="changeImg('prev')">
        <img alt="left-arrow" src="@/assets/arrowLeft.svg" />
      </div>
      <div ref="imgRef" :class="'area-' + index" v-for="(area, index) in areas" v-bind:key="area.id">
        <h4>{{ area.title }}</h4>
        <img :alt="area.title" :src="area.src">
      </div>
      <div class="change-img" @click="changeImg('next')">
        <img alt="right-arrow" src="@/assets/arrowRight.svg" />
      </div>
    </div>
    <div class="carousel-current">
      <div class="circle" :class="[index === this.current && 'active']" @click="changeImg(index)" v-for="(item, index) in areas.length" v-bind:key="index" />
    </div>
  </div>
</template>

<style scoped>
  .container{
    position: relative;
    width: 90%;
  }
  .images-wrapper{
    width: 100%;
    overflow: hidden;
    display: flex;
  }
  div[class^='area']{
    min-width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
    align-items: center;
  }
  div[class^='area']:nth-child(odd){
    flex-direction: row-reverse;
  }
  img{
    width: 500px;
  }
  .change-img img{
    width: 50px;
  }
  h4{
    margin: 0;
    font-weight: 400;
    width: 200px;
    text-align: left;
    font-size: 48px;
  }
  .carousel-current{
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .circle{
    width: 10px;
    height: 10px;
    background: var(--text-light);
    border-radius: 50%;
    cursor: pointer;
  }
  .active{
    background: black;
  }
  .change-img{
    top: 50%;
    transform: translateY(-50%);
  }
  .change-img:hover{
    cursor: pointer;
  }
  .change-img:first-child{
    position: absolute;
    left: 0;
  }
  .change-img:last-child{
    position: absolute;
    right: 0;
  }
  @media(max-width: 1275px){
    img{
      width: 350px;
    }
    h4{
      font-size: 36px;
    }
    .container{
      width: 100%;
    }
  }
  @media(max-width: 992px){
    div[class^='area']{
      justify-content: center;
      gap: 10px;
    }
    img{
      width: 300px;
    }
    h4{
      font-size: 32px;
    }
  }
  @media(max-width: 768px){
    .change-img img{
      width: 30px;
    }
    h4{
      text-align: center;
    }
    div[class^='area']{
      flex-direction: column !important;
    }
  }
</style>