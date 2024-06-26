<script setup lang="ts">
import { computed } from 'vue'

//import component
//import function/data
//props & emits
const props = defineProps({
  image: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  }
})

//properties
//computed properties
//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <section id="headerSection">
    <div v-if="image" class="imageBackgroundCircle">
      <img :src="image" />
    </div>
    <h1>{{ title }}</h1>
  </section>
</template>

<style scoped>
/************* Desktop style *************/
#headerSection {
  text-align: center;
}

.imageBackgroundCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 325px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border-radius: 50%;
  background-color: var(--color-gray);
}

img {
  width: 80%;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
  .imageBackgroundCircle {
    width: 200px;
    height: 200px;
  }
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  #headerSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    text-align: unset;
  }

  .imageBackgroundCircle {
    display: contents;
    background-color: transparent;
  }

  img {
    width: 30%;
  }

  h1 {
    margin-bottom: unset;
    margin-left: 30px;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
}
</style>
