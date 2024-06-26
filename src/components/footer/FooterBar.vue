<script setup lang="ts">
//import component
//import function/data
//props & emits
//properties
let currentYear = new Date().getFullYear()

//computed properties
//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <footer>
    <p id="slogan" class="bold">Building Strong Connections</p>
    <div>
      <p class="bold">©Fatzer AG</p>
      <p id="createsText" class="bold">Created by symas gmbh {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
/************* Desktop style *************/
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  margin-left: 250px;
  background-color: var(--color-primary);
  color: var(--vt-c-white);
}

#slogan {
  font-size: 24px;
}

#createsText {
  font-size: 8px;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  footer {
    margin-left: unset;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
  footer {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #slogan {
    font-size: 16px;
  }
}
</style>
