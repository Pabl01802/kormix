<script>
import CarouselGallery from "@/components/CarouselGallery.vue";

export default {
  name: "WorkAreasSection",
  components: { CarouselGallery }
}
</script>

<template>
  <section>
    <div>
      <div>
        <h3>Gdzie działamy?</h3>
        <p>
          Działamy na obszarze gminy Brodnica, gminy Kórnik, gminy Mosina, miasta Poznania oraz miasta Puszczykowo.
        </p>
      </div>
      <CarouselGallery />
    </div>
  </section>
</template>

<style scoped>
  section{
    display: flex;
    justify-content: center;
  }
  section > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
  }
  h3, p{
    margin: 0;
  }
  h3{
    font-size: 36px;
    font-weight: 400;
  }
  div div{
    text-align: center;
    padding: 30px 0 30px 0;
    box-sizing: border-box;
  }
  p{
    color: var(--text-light)
  }
  @media(max-width: 992px){
    div > div{
      padding: 20px 0 20px 0;
    }
  }
  @media(max-width: 500px){
    section > div{
      width: 100%;
    }
  }
</style>