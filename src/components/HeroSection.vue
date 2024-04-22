<template>
  <section>
    <img alt="Kormix logo" src="@/assets/logoLight.png">
    <div>
      <h1>Usługi asenizacyjne</h1>
      <p>
        Zajmujemy się usługami asenizacyjnymi od 1998 roku.
        Realizujemy wywozy nieczystości płynnych z terenu gmin Mosina, Kórnik, Brodnica,
        miasta Puszczykowa oraz miasta Poznania. Zajmujemy się opróżnianiem zbiorników bezodpływowych
        oraz oczyszczaniem przydomowych oczyszczalni. Obsługujemy również Rodzinne Ogródki Działkowe „ROD”.
      </p>
      <router-link to="/contact" class="contact-link">
        Kontakt
      </router-link>
    </div>
  </section>
</template>

<style scoped>
  section{
    background: var(--dark-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }
  h1{
    margin: 0;
    font-size: 42px;
    color: white;
  }
  div{
    text-align: center;
    width: 45%;
    line-height: 30px;
    font-weight: bold;
  }
  p{
    color: var(--text-gray);
  }
  img{
    width: 860px;
  }
  .contact-link{
    padding: 20px;
    text-decoration: none;
    font-weight: normal;
    text-transform: uppercase;
    background: var(--light-green);
    border: none;
    border-radius: 5px;
    color: black;
    transition: .2s;
  }
  button:hover{
    scale: 1.02;
    cursor: pointer;
  }

  @media(max-width: 992px){
    img{
      width: 500px;
    }
    h1{
      font-size: 32px;
    }
    p{
      font-size: 14px;
    }
    div{
      width: 70%;
    }
  }

  @media(max-width: 768px){
    img{
      width: 300px;
    }
    div{
      width: 100%;
    }
  }
</style>