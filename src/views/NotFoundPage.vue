<template>
  <main class="not-found-container">
    <section>
      <h1>Nie znaleziono strony.</h1>
      <div>
        <button @click="$router.replace('/')">Strona główna</button>
      </div>
    </section>
  </main>
</template>

<script setup>

</script>

<style scoped>
  .not-found-container{
    height: 100dvh;
    display: grid;
    place-items: center;
  }
  section{
    display: grid;
    gap: 20px;
  }
  h1{
    margin: 0;
    font-size: 40px;
  }
  div{
    text-align: center;
  }
  button{
    padding: 10px;
    background: var(--dark-green);
    border: none;
    color: white;
    transition: .2s;
  }
  button:hover{
    scale: 1.02;
  }

  @media(max-width: 768px){
    h1{
      font-size: 28px;
    }
  }
</style>