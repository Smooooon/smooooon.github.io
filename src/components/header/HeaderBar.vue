<script setup lang="ts">
//import component
import IconItem from '../icons/IconItem.vue'

//import function/data
import { mdiMenu, mdiClose } from '@mdi/js'
import LanguageSwitch from '../navigation/LanguageSwitch.vue'

//props
const props = defineProps({
  isActive: { type: Boolean, default: false },
  toggleNavigationBar: { type: Function, required: true }
})

//properties
//computed properties
//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <header>
    <RouterLink to="/">
      <p class="bold">{{ $t('title') }}</p>
    </RouterLink>
    <div id="headerOptions">
      <LanguageSwitch />
      <div @click="toggleNavigationBar()" class="menuIcon">
        <IconItem v-if="!isActive" :path="mdiMenu" size="40" />
        <IconItem v-else :path="mdiClose" size="40" />
      </div>
    </div>
  </header>
</template>

<style scoped>
/************* Desktop style *************/
header {
  position: fixed;
  right: 0;
  display: none;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 250px);
  height: 70px;
  padding: 0.8rem 1rem;
  background-color: var(--color-gray);
  z-index: 2;
  transition: all 0.2s ease;
}

p {
  color: var(--color-primary);
  font-size: 24px;
  text-transform: uppercase;
}

#headerOptions {
  display: flex;
}

.menuIcon {
  display: none;
  cursor: pointer;
}

/************* MediaQueries *************/
/* grosse Bildschirme */
@media screen and (max-width: 1920px) {
}

/* Bildschirme */
@media screen and (max-width: 1120px) {
}

/* Tabletversion */
@media screen and (max-width: 63em) {
  header {
    display: flex;
    right: unset;
    width: 100%;
    height: 90px;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .menuIcon {
    display: block;
  }
}

/*  Handy */
@media screen and (max-width: 39em) {
  header {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
