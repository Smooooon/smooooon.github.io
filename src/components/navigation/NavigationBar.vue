<script setup lang="ts">
//import component
import IconItem from '../icons/IconItem.vue'

//import function/data
import { onMounted } from 'vue'
import { mdiClose } from '@mdi/js'

//props
defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  toggleNavigationBar: {
    type: Function,
    required: true
  }
})

//properties
//computed properties
//methods
const menuClick = (event: any, item: any) => {
  /*TODo*/
}

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

function CollapseMenuSectionWithActiveElement() {
  let activeElemet = document.querySelector('#navigationBar .router-link-active')

  if (activeElemet) {
    let subItemWithActiveElement = activeElemet.closest('.subItem')
    subItemWithActiveElement?.classList.remove('hidden')
  }
}

//watch functions
//lifecycle hooks
onMounted(() => {
  // Usage!
  sleep(500).then(() => {
    CollapseMenuSectionWithActiveElement()
  })
})
</script>

<template>
  <nav id="navigationBar" :class="{ active: isActive }">
    <div class="navigationHeaderContainer">
      <RouterLink to="/" @click="toggleNavigationBar(true)">
        <img src="../../assets/logo.svg" alt="Logo" />
      </RouterLink>
      <IconItem
        :path="mdiClose"
        class="navigationBarCloseButton cursor-pointer"
        @click="toggleNavigationBar()"
        size="35"
      />
    </div>
    <div class="navigationBodyContainer">
      <p>Seischieber</p>
      <ul>
        <li>
          <RouterLink :to="{ name: 'litzenseile' }" @click="toggleNavigationBar(true)"
            >LITZENSEILE</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'vv-seile' }" @click="toggleNavigationBar(true)"
            >VV-SEILE</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="overlay" :class="{ active: isActive }" @click="toggleNavigationBar()"></div>
</template>

<style>
/************* Desktop style *************/
#navigationBar {
  width: 250px;
  padding: 60px 0 15px 15px;
  min-height: 100vh;
  position: fixed;
  background-color: var(--color-gray);
  transition: left 0.5s ease;
  z-index: 1;
}

#navigationBar.active {
  left: 0;
}

.overlay {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background-color: rgba(34, 41, 47, 0.5);
  z-index: 10;
  transition: all 0.5s ease;
}

.navigationHeaderContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.navigationHeaderContainer img {
  width: 125px;
}

.navigationHeaderContainer > .navigationBarCloseButton {
  display: none !important;
  cursor: pointer;
}

.navigationBodyContainer {
  overflow: auto;
}

/* scrollbar start */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* scrollbar end */

#navigationBar p {
  margin-bottom: 40px;
  text-align: center;
  font-size: 24px;
}

#navigationBar ul {
  margin-bottom: 20px;
}

#navigationBar li {
  line-height: 1.5rem;
}

#navigationBar > .navigationBodyContainer a {
  display: flex;
  justify-content: center;
  padding: 10px 15px 10px 15px;
  transition: padding-left 0.2s ease;
  font-size: 1.1rem;
}

#navigationBar > .navigationBodyContainer a > .navigationItemIcon {
  margin-right: 1.1rem;
}

#navigationBar > .navigationBodyContainer a > .dropdownIcon {
  margin-left: auto;
}

#navigationBar > .navigationBodyContainer a:hover {
  padding-left: 20px;
  transition: padding-left 0.2s ease;
}

.router-link-exact-active {
  font-weight: 700;
  color: black;
}

#navigationBar ul.hidden {
  display: none;
}

#navigationBar ul.subItem .navigationItemIcon > svg {
  width: 11px;
  margin-left: 13px;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme */
@media screen and (max-width: 1120px) {
  #navigationBar {
    left: 0;
  }
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  #navigationBar {
    left: -250px;
    z-index: 50;
    padding-top: 30px;
    padding-right: 10px;
  }

  .navigationHeaderContainer img {
    width: 125px;
  }

  .navigationHeaderContainer > .navigationBarCloseButton {
    /*display: block!important;*/
    float: right;
    margin-right: 10px;
  }

  .active + .overlay {
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
}
</style>
