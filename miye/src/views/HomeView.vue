<template>
  <div>
    <div class="content-container">
      <section class="section-1">
        <div class="text-container">
          <h1 id="title"><strong>Tu condominio en buenas manos.</strong></h1>
          <h2>
            En Miye, cuidamos tu edificio como se merece.
          </h2>
          <h2> Aquí, no aceptamos
            excusas.</h2>
          <h3>
            Tú continúa con lo tuyo mientras nosotros nos ocupamos de mantener
            tu comunidad en perfecto estado
          </h3>
        </div>
        <div id="img-container">
          <img src="../assets/logo-miye-1.png" alt="" />
        </div>

      </section>
      <section class="section-2">

        <article id="box-container">
          <div id="box">
            <div id="box-text">
              <i class="fa-solid fa-chart-pie fa-3x"></i>
              <h2>Eficiencia y gestión de costos</h2>
              <p>Nos comprometemos a optimizar procesos para ahorrar tiempo y dinero, brindando una gestión rentable y
                efectiva.</p>
            </div>

          </div>
          <div id="box">
           
            <div id="box-text">
              <i class="fa-solid fa-scale-balanced fa-3x" ></i>
              <h2>Ética e Integridad</h2>
              <p>Seguimos rigurosos estándares éticos en cada aspecto de la gestión de condominios, trabajando
                incansablemente para el bienestar de toda la comunidad.</p>
            </div>
          </div>

          <div id="box">

            
            <div id="box-text">
              <i class="fa-solid fa-building-shield fa-3x"></i>
              <h2>Servicio Personalizado</h2>
              <p>
                Diseñamos estrategias a medida para satisfacer las necesidades únicas de tu comunidad, garantizando tu
                satisfacción.
              </p>
            </div>
          </div>
          <div id="box">
            <div id="box-text">
              <i class="fa-sharp fa-solid fa-comments-dollar fa-3x"></i>
            <h2>Transparencia Total</h2>
            <p>En Tú Comunidad, valoramos la comunicación abierta y honesta. Obtendrás acceso en tiempo real a toda la
              información de tu comunidad.</p>
          </div>
        </div>
    </article>
    </section>
    <section class="section-3">
      <h1><strong>¿Qué puede esperar de nosostros?</strong></h1>
      <div class="accordion" id="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Atención al Cliente Personalizada
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordion">
            <div class="accordion-body">
              Tu satisfacción es nuestra prioridad. Estamos disponibles para responder a tus preguntas y proporcionarte
              soluciones personalizadas de manera rápida y amigable.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Comprometidos con la Excelencia
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
              Buscamos la excelencia en la administración de condominios, manteniendo los más altos estándares de
              calidad en todos nuestros servicios.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Transparencia Económica
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
              Garantizamos acceso a información clara y detallada sobre las finanzas de tu condominio, proporcionando
              informes financieros precisos y actualizados.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Transparencia Operacional
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
              Mantenemos informados a los residentes sobre todas las acciones y decisiones que afectan al condominio,
              promoviendo la confianza y la comprensión de nuestras operaciones.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div></template>
<script>
export default {
  name: "ContactView",

};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Inter', sans-serif;
}

#all {

  display: flex;
  justify-content: center;

}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  width: 100%;

  .section-1 {

    width: 70%;
    padding-bottom: 20px;
    height: 700px;
    display: flex;
    flex-direction: row;

    @media(max-width:768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #img-container {
      object-position: start;
      width: 60%;

      @media (max-width: 768px) {
        height: 70%;
        width: 70%;
      }
    }

    .text-container {
      margin-top: 50px;
      position: relative;
      text-align: start;
      width: 70%;
      height: 30%;
      z-index: 997;

      @media (max-width: 768px) {
        width: 90%;
        text-align: center;
      }

      #title {

        color: rgb(54, 131, 198);
        font-size: 4em;

        @media (max-width: 768px) {
          font-size: 2.5em;
        }
      }

      h2 {
        font-size: x-large;
        margin: 0;

        @media (max-width: 768px) {
          font-size: 1.2em;
        }
      }

      h3 {
        margin-top: 50px;
        font-size: larger;
        width: 90%;

        @media (max-width: 760px) {
          font-size: medium;
          margin-top: 10px;
        }
      }
    }

    img {

      object-fit: contain;
      width: 100%;
      height: 100%;
      right: 5%;
      top: 5%;
      z-index: 0;

    }
  }

  .section-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom, rgba(144, 144, 145, 0.421), rgba(64, 65, 66, 0.375)),
      url("../assets/Miye-section-2-bg-v2.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .about-container {
      width: 100%;
      display: flex;

    }

    #box-container {

      margin: 20px;
      display: grid;
      grid-gap: 20px;
      width: 50%;
      height: 600px;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      text-align: start;
    }

    #box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(40, 138, 242, 0.732),rgba(70, 88, 228, 0.64));
      backdrop-filter: blur(15px);
      z-index: 995;
      box-shadow: 2px 5px 5px 5px rgba(16, 145, 192, 0.307);
      border-radius: 10px;

      #box-text{
        color: rgb(255, 255, 255);
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: start;
        padding: 20px;
        #box-icon{
          width: 60px;
          height: 60px;
        }
      }
    }

    h2 {
      text-align: center;
      width: 80%;
    }


  }

  .section-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 700px;

    h1 {
      margin-bottom: 30px;
    }

    .accordion {
      width: 720px;
    }

    @media(max-width: 768px) {
      .accordion {
        width: 400px;
      }
    }
  }
}</style>