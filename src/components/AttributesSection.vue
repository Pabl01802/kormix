<template>
  <section>
    <div>
      <h2>Zapewniamy konkurencyjne ceny</h2>
      <h3>Dlaczego warto nas wybrać?</h3>
      <ul>
        <li v-for="text in attributes" v-bind:key="text.id">
          <p>
            <strong>{{ text.title }}: </strong>
            {{ text.description }}
          </p>
        </li>
      </ul>
      <strong class="contact-us-text">
        Skontaktuj się z nami już dziś i przekonaj się, dlaczego od ponad dwóch dekad jesteśmy pierwszym wyborem w branży wywozu nieczystości płynnych w twoich okolicach!
      </strong>
      <img alt="Zdjęcie samochodów" src="@/assets/img1.jpeg">
    </div>
  </section>
</template>

<script>
  import { uuid } from 'vue-uuid'
  export default {
    name: 'AttributeSection',
    data(){
      return {
        attributes: [
          {
            id: uuid.v1(),
            title: 'Doświadczenie',
            description: 'Z ponad dwudziestoletnim stażem w branży, posiadamy bogate doświadczenie, które pozwala nam skutecznie obsługiwać nawet najbardziej wymagające projekty.'
          },
          {
            id: uuid.v1(),
            title: 'Profesjonalizm',
            description: 'Nasz zespół składa się z wyszkolonych i kompetentnych osób, które wykonują swoje obowiązki z pełnym zaangażowaniem i profesjonalizmem.'
          },
          {
            id: uuid.v1(),
            title: 'Sprzęt najwyższej jakości',
            description: 'Dysponujemy nowoczesnym sprzętem i pojazdami dostosowanymi do transportu różnego rodzaju nieczystości płynnych, co gwarantuje szybką i bezpieczną realizację usług.'
          },
          {
            id: uuid.v1(),
            title: 'Elastyczność',
            description: 'Jesteśmy gotowi dostosować nasze usługi do indywidualnych potrzeb i wymagań każdego klienta, zapewniając kompleksową obsługę na najwyższym poziomie.'
          },
          {
            id: uuid.v1(),
            title: 'Zgodność z normami',
            description: 'Działamy zgodnie z obowiązującymi przepisami, normami dotyczącymi ochrony środowiska i posiadamy stosowne zezwolenia i umowy.'
          },
        ]
      }
    }
  }
</script>


<style scoped>
  section{
    display: flex;
    justify-content: center;
  }
  div{
    width: 1000px;
    text-align: center;
    color: var(--text-light);
    box-sizing: border-box;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3, h2{
    margin: 0;
  }
  h2{
    font-weight: 400;
    position: relative;
    font-size: 20px;
  }
  h3{
    margin-top: 20px;
    color: var(--test);
    font-size: 28px;
  }
  h2::after{
    background: var(--text-light);
    content: ' ';
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  ul{
    list-style: none;
    width: 80%;
    padding: 0;
    margin: 0;
  }
  .contact-us-text{
    width: 60%;
  }
  img{
    margin-top: 20px;
    width: 100%;
    border-radius: 100px;
  }
  @media(max-width: 992px){
    div, .contact-us-text, ul{
      width: 100%;
    }
  }
  @media(max-width: 768px){
    img{
      min-width: 350px;
    }
  }
  @media(max-width: 360px){
    img{
      min-width: 300px;
    }
  }
</style>