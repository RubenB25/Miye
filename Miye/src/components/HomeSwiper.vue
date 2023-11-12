<template>
    <swiper-container
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide><div id="box">
            <div id="box-text">
              <div id="box-header">
                <i class="fa-solid fa-chart-pie fa-3x"></i>
                <h2>Eficiencia y gestión de costos</h2>
              </div>

              <p id="box-p">Nos comprometemos a optimizar procesos para ahorrar tiempo y dinero, brindando una gestión rentable y
                efectiva.</p>
            </div>

          </div></swiper-slide>
      <swiper-slide><div id="box">

<div id="box-text">
  <div id="box-header">
    <i class="fa-solid fa-scale-balanced fa-3x"></i>
    <h2>Ética e Integridad</h2>
  </div>

  <p id="box-p">Seguimos rigurosos estándares éticos en cada aspecto de la gestión de condominios, trabajando
    incansablemente para el bienestar de toda la comunidad.</p>
</div>
</div></swiper-slide>
      <swiper-slide><div id="box">


<div id="box-text">
  <div id="box-header">
    <i class="fa-solid fa-building-shield fa-3x"></i>
    <h2>Servicio Personalizado</h2>
  </div>

  <p id="box-p">
    Diseñamos estrategias a medida para satisfacer las necesidades únicas de tu comunidad, garantizando tu
    satisfacción.
  </p>
</div>
</div></swiper-slide>
      <swiper-slide><div id="box">
            <div id="box-text">
              <div id="box-header">
                <i class="fa-sharp fa-solid fa-comments-dollar fa-3x"></i>
                <h2>Transparencia Total</h2>
              </div>

              <p id="box-p">En Tú Comunidad, valoramos la comunicación abierta y honesta. Obtendrás acceso en tiempo real a toda la
                información de tu comunidad.</p>
            </div>
          </div></swiper-slide>
    </swiper-container>
  </template>
  
  <script>
    import { register } from 'swiper/element/bundle';
  
    register();
    export default {
      setup(){
        const spaceBetween = 10;
        const onProgress = (e) => {
          const [swiper, progress] = e.detail;
          console.log(progress);
        };
  
        const onSlideChange = (e) => {
          console.log('slide changed')
        }
  
        return {
          spaceBetween,
          onProgress,
          onSlideChange,
        };
      }
    }
  </script>