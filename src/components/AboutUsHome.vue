<template>
  <section>
    <div>
      <img width="570" src="@/assets/img2.jpg" alt="zdjęcie ciężarówek">
      <div>
        <span>O nas</span>
        <h3>Jesteśmy z firmą z wieloletnim doświadczeniem!</h3>
        <p>Działamy nieprzerwanie od 1998 roku. Naszym atutem jest odpowiednia flota samochodowa i wykwalifikowani pracownicy.</p>
        <button>Zobacz więcej</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutUsHome'
  }
</script>

<style scoped>
  section{
    background: rgba(112, 184, 134, .15);
    padding: 80px;
  }
  section > div{
    display: flex;
    justify-content: space-around;
    gap: 40px;
    align-items: center;
  }
  span{
    text-transform: uppercase;
    color: var(--dark-green);
  }
  h3{
    font-size: 34px;
    font-weight: 400;
    margin: 0;
  }
  div > div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
  }
  p{
    color: var(--text-light);
    margin: 0;
  }
  button{
    background: var(--dark-green);
    width: 200px;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: 20px 25px;
    border-radius: 5px;
    transition: .2s;
  }
  button:hover{
    cursor: pointer;
    scale: 1.01;
  }
  img{
    animation: imageBreathe 2s;
    animation-iteration-count: infinite;
  }

  @media(max-width: 1336px){
    img{
      width: 500px;
    }
    div > div{
      height: 350px;
    }
  }

  @media(max-width: 992px){
    section{
      padding: 30px;
    }
    img{
      width: 400px;
    }
    h3{
      font-size: 24px;
    }
    p{
      font-size: 14px;
    }
    div > div{
      height: 300px;
    }
    button{
      width: 120px;
      padding: 10px 15px;
      font-size: 10px;
    }
  }

  @media(max-width: 768px){
    img{
      width: 450px;
    }
    div{
      flex-direction: column-reverse;
      gap: 10px;
    }
    div > div{
      height: 220px;
    }
  }

  @media(max-width: 460px){
    img{
      width: 300px;
    }
  }

  @keyframes imageBreathe {
    33%{
      scale: 1;
    }
    66%{
      scale: 1.02;
    }
    100%{
      scale: 1;
    }
  }
</style>