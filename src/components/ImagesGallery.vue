<script>
import {uuid} from "vue-uuid";

export default {
  name: "ImagesGallery",
  data(){
    return {
      publicPath: process.env.BASE_URL,
      current: '',
      images: [
        {
          id: uuid.v1(),
          src: 'img1.jpeg',
          alt: 'Zdjęcie ciężarówek'
        },
        {
          id: uuid.v1(),
          src: 'img5.jpg',
          alt: 'Zdjęcie traktora'
        },
        {
          id: uuid.v1(),
          src: 'img6.jpeg',
          alt: 'Zdjęcie ciężarówki'
        },
        {
          id: uuid.v1(),
          src: 'img7.jpg',
          alt: 'Zdjęcie ciężarówki'
        },
        {
          id: uuid.v1(),
          src: 'img8.jpeg',
          alt: 'Zdjęcie ciężarówki'
        },
        {
          id: uuid.v1(),
          src: 'img9.jpg',
          alt: 'Zdjęcie traktora'
        },
      ]
    }
  },
  methods: {
    handlePhotoChange(e){
      if(e.key === 'ArrowLeft') this.changeImage('left')
      else if(e.key === 'ArrowRight') this.changeImage('right')
    },
    previewImage(src){
      this.current = src
      this.scroll = window.scrollY
      window.onscroll = () => window.scrollTo(null, this.scroll)
      window.addEventListener('keydown', this.handlePhotoChange)
    },
    changeImage(direction){
      let currentImage = this.images.findIndex(img => img.src === this.current)
      if(direction === 'right'){
        this.current = currentImage === this.images.length - 1 ? this.images[0].src : this.images[currentImage+1].src
      }else{
        this.current = currentImage === 0 ? this.images[this.images.length-1].src : this.images[currentImage-1].src
      }
    },
    closePreview(e){
      if(e.target.localName !== 'img'){
        window.onscroll = null
        this.current = ''
      }
    },
    getImageAlt(src){
      return this.images.find(img => img.src === src).alt
    }
  }
}
</script>

<template>
  <div>
    <h5>Galeria</h5>
    <div>
      <img class="gallery-image" v-for="image in images" :key="image.id" v-bind:src="`${publicPath}${image.src}`" @click="this.previewImage(image.src)" v-bind:alt="image.alt" />
    </div>
    <div v-if="current" class="image-preview" @click="this.closePreview">
      <svg @click="this.closePreview" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
      <img src="@/assets/arrowLeftGallery.svg" class="arrow" @click="changeImage('left')" />
      <img class="preview-image" v-bind:src="`${publicPath}${current}`" v-bind:alt="this.getImageAlt(current)" />
      <img src="@/assets/arrowRightGallery.svg" class="arrow" @click="changeImage('right')" />
    </div>
  </div>
</template>

<style scoped>
  div{
    margin: 20px 0 30px 0;
  }
  h5{
    text-align: center;
    margin: 0;
    padding: 20px;
    font-size: 36px;
  }
  div > div{
    display: grid;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(3, 366.5px);
  }
  .gallery-image{
    width: 100%;
    position: relative;
  }
  .gallery-image:hover{
    cursor: pointer;
  }
  .image-preview{
    background: rgba(0, 0, 0,.8);
    height: 100dvh;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 10;
  }
  .preview-image{
    width: 70vw;
  }
  svg{
    position: absolute;
    right: 20px;
    top: 0;
    height: 90px;
  }
  svg:hover, .arrow:hover{
    cursor: pointer;
  }
  .arrow{
    width: 80px;
  }
  @media(max-width: 1275px){
    div > div{
      grid-template-columns: repeat(3, 267px);
    }
  }
  @media(max-width: 865px){
    div > div{
      grid-template-columns: repeat(3, 167px);
    }
  }
  @media(max-width: 555px){
    div{
      margin: 10px 0 20px 0;
    }
    div > div{
      grid-template-columns: repeat(2, 150px);
    }
    svg{
      width: 50px;
    }
  }
</style>