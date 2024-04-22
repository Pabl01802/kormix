<template>
  <nav>
    <MobileMenu v-if="showMenu" :isShown="showMenu" @close="handleShowMenu" />
    <div class="nav-top">
      <div class="hamburger" @click="handleShowMenu">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
      </div>
      <ul class="navigation">
        <li>
          <router-link to="/">Strona główna</router-link>
        </li>
        <li>
          <router-link to="/about">O nas</router-link>
        </li>
        <li>
          <router-link to="/contact">Kontakt</router-link>
        </li>
      </ul>
      <router-link to="/">
        <img class="logo" alt="Kormix logo" src='../assets/logoDark.png'>
      </router-link>
    </div>
    <h4 class="nav-header">wywóz nieczystości płynnych</h4>
  </nav>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
export default{
  name: 'NavBar',
  components: {
    MobileMenu
  },
  data(){
    return {
      showMenu: false
    }
  },
  methods: {
    handleShowMenu(){
      this.showMenu = !this.showMenu
    }
  }
}

</script>

<style scoped>
  .hamburger{
    display: none;
  }
  .hamburger:hover{
    cursor: pointer;
  }
  nav{
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 9;
  }
  .nav-top{
    height: 80px;
    position: relative;
    display: flex;
  }
  .navigation{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  li{
    padding: 15px;
    display: grid;
    place-items: center;
  }
  .logo{
    width: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .nav-header{
    text-align: center;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
  }
  a:link{
    text-decoration: none;
  }
  a, a:visited{
    color: black;
  }

  @media(max-width: 768px){
    .navigation{
      display: none;
    }
    .nav-top{
      align-items: center;
      padding-left: 20px;
    }
    .hamburger{
      display: flex;
      height: max-content;
    }
    svg{
      width: 40px;
    }
  }
</style>