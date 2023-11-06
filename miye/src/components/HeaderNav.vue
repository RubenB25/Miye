<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="logo">
        <router-link :to="{ name:'HomeView'}"><img src="@/assets/logo-miye.png" alt="Logo" /></router-link>
      </div>

      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'HomeView' }">Nosotros</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'ServicesView' }">Servicios</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'ContactView' }">Contacto</router-link>
        </li>
      </ul>



      <button class="btn btn-primary d-md-none" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
        <div class="icon"><i class="fa-solid fa-bars"></i></div>
      </button>

      <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" data-bs-scroll="true"
        aria-labelledby="offcanvasResponsiveLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
            <ul class="dropdown-nav">

              <li>
                <router-link class="link" :to="{ name: 'HomeView' }">Nosotros</router-link>
              </li>
              <li>
                <router-link class="link" :to="{ name: 'ServicesView' }">Servicios</router-link>
              </li>
              <li>
                <router-link class="link" :to="{ name: 'ContactView' }">Contacto</router-link>
              </li>
            </ul>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

        </div>
      </div>



    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();

  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
      return;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 767) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  font-family: 'Inter', sans-serif;
}
header {
  z-index: 999;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: white;
  border-bottom: 1px solid rgb(229, 229, 229);
  transition: 0.5s ease all;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    transition: 0.5s ease all;
    justify-content: space-around;
    list-style: none;

    .icon {
      display: flex;
      align-items: center;
      top: 100;
      right: 44px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 30px;
        transition: 0.75s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    width: 20%;
  }

  .logo img {
    width: 110px;
    cursor: pointer;
    transition: 0.3s ease all;
  }

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 700px;
    list-style: none;
  }

  .link {
    padding: 15px 25px;
    border: 1px solid rgb(196, 196, 196);
    background-color: rgb(74, 151, 240);
    cursor: pointer;
    color: white;
    border-radius: 5px;
    transition: 0.5s ease all;
    text-decoration: none;
  }

  #offcanvasResponsiveLabel{
    display: flex;
    justify-content: center;  
    align-items: flex-start;
    width: 100%;
  }
  #offcanvasResponsive{
    z-index: 9999;
  }
  .dropdown-nav {
    display: flex;
    justify-content: space-around;
    position: fixed;
    max-width: 250px;
    flex-direction: column;
    height: 45%;

    list-style: none;
  }
  
}

.scrolled-nav {
  height: 95px;
  box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6);

  nav {
    .logo {
      img {
        width: 95px;
        transition: 0.6s;
        box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 1);
      }
    }

    @media(min-width:760px) {
      .link {
        padding: 13px 23px;
        transition: 0.5s ease all;
      }
    }

  }
}
</style>