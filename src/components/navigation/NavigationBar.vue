<script setup lang="ts">
//import component
import IconItem from '../icons/IconItem.vue'

//import function/data
import { onMounted } from 'vue'
import { mdiClose, mdiWeb } from '@mdi/js'
import { useI18n } from 'vue-i18n'

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
const { locale } = useI18n()

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

function switchLanguage(lang: string) {
  locale.value = lang
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
      <a href="https://www.fatzer.com" target="_blank">
        <img src="../../assets/logo.svg" alt="Logo" />
      </a>
      <IconItem
        :path="mdiClose"
        class="navigationBarCloseButton cursor-pointer"
        @click="toggleNavigationBar()"
        size="35"
      />
    </div>
    <div class="navigationBodyContainer">
      <div>
        <RouterLink to="/" @click="toggleNavigationBar(true)">
          <p>{{ $t('title') }}</p>
        </RouterLink>
      </div>
      <ul>
        <li>
          <RouterLink
            :to="{ name: 'litzenseile' }"
            @click="toggleNavigationBar(true)"
            class="navItem"
            >{{ $t('ossShort') }}</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'vv-seile' }"
            @click="toggleNavigationBar(true)"
            class="navItem"
            >{{ $t('flcShort') }}</RouterLink
          >
        </li>
      </ul>
      <div id="languageSelector">
        <IconItem :path="mdiWeb" size="25" />
        <p @click="switchLanguage('de')" :class="{ currentLangauge: locale == 'de' }">DE</p>
        <p @click="switchLanguage('en')" :class="{ currentLangauge: locale == 'en' }">EN</p>
      </div>
    </div>
  </nav>
  <div class="overlay" :class="{ active: isActive }" @click="toggleNavigationBar()"></div>
</template>

<style>
/************* Desktop style *************/
#navigationBar {
  width: 250px;
  padding: 60px 0 15px 0;
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

.navigationBodyContainer > div {
  padding-bottom: 40px;
}

.navItem {
  text-transform: uppercase;
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

#languageSelector {
  position: absolute;
  bottom: 0;
  display: flex;
  column-gap: 10px;
  margin-left: 10px;
  padding-bottom: 10px;
}

#languageSelector > p {
  font-size: 17px;
  cursor: pointer;
}

#languageSelector > p.currentLangauge {
  text-decoration: underline;
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
