<script setup lang="ts">
//import component
import HeaderBar from './components/header/HeaderBar.vue'
import NavigationBar from './components/navigation/NavigationBar.vue'
import FooterBar from './components/footer/FooterBar.vue'

//import function/data
import { ref } from 'vue'

//props & emits
//properties
const isNavigationBarActive = ref(false)

//computed properties
//methods
const ToggleNavigationBar = (close?: boolean, open?: boolean) => {
  if (open) {
    isNavigationBarActive.value = true
  } else if (close) {
    isNavigationBarActive.value = false
  } else {
    isNavigationBarActive.value = !isNavigationBarActive.value
  }
}

//watch functions
//lifecycle hooks
</script>

<template>
  <HeaderBar :toggleNavigationBar="ToggleNavigationBar" :isActive="isNavigationBarActive" />
  <NavigationBar :toggleNavigationBar="ToggleNavigationBar" :isActive="isNavigationBarActive" />
  <main>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <transition name="mainAnimation" mode="out-in">
          <Suspense>
            <!-- main content -->
            <template #default>
              <component :is="Component" />
            </template>

            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </transition>
      </template>
    </router-view>
  </main>
  <FooterBar />
</template>

<style>
/************* Desktop style *************/
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 400;
}

html {
  height: 100%;
  min-width: 375px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

body {
  height: 100%;
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: relative;
  height: 100%;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
}

main {
  position: relative;
  padding: 60px 2rem 0;
  margin-left: 250px;
  min-height: calc(100% - 64px);
  background-color: var(--vt-c-white);
  background-image: linear-gradient(to bottom, rgb(255 255 255 / 80%), rgb(255 255 255 / 80%)),
    url('./assets/images/01J_0418-background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.bold {
  font-weight: bold;
}

span {
  font-weight: 300;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

select {
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

/************* Animation Content change *************/
.mainAnimation-enter-active,
.mainAnimation-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoomIn;
}

.mainAnimation-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoomOut;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 0.9);
  }

  100% {
    opacity: 1;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}
/************* Animation Content change Ende*************/
/************* Table design*************/
.table td > span {
  color: var(--color-text) !important;
  font-weight: normal !important;
}

/************* Table design Ende*************/

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme main Bereich + 2x 35px margin */
@media screen and (max-width: 1234px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  body {
    font-size: 17px;
  }

  main {
    margin-left: unset;
    padding-top: 120px;
    background-image: unset;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
  main {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
