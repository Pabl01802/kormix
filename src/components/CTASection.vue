<template>
  <section class="cta">
    <a href="tel:+48503820458">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg>
      Zadzwoń
    </a>
  </section>
</template>

<script>
export default {
  name: 'CTASection'
}
</script>

<style scoped>
  @media(min-width: 769px){
    .cta{
      display: none;
    }
  }
  @media(max-width: 768px){
    section{
      display: flex;
      background: var(--medium-green);
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      justify-content: center;
      align-items: center;
    }
    a{
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
      font-size: 20px;
    }
    a, a:link, a:visited{
      text-decoration: none;
      color: white;
    }
    svg{
      fill: white;
    }
  }
</style>