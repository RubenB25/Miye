<template>
  <div>
    <div class="content-container">
      <section class="section-1">
      
      </section>
   
      
      <section class="section-1"></section>
      <section class="section-1"></section>
    </div>
  </div>
</template>
<script>

export default {
  name: "ContactView",
};
</script>

<style lang="scss" scoped>
.content-container {
  padding-top: 120px;
  .section-1 {
    display: flex;
    flex-direction: row;
    height: 500px;
    background-color: antiquewhite;
    img {
      width: 50%;
      height: 100%;
    }
    .text-container {
      text-align: start;
      width: 50%;
      h1 {
        
      }
    }
  }
}
</style>