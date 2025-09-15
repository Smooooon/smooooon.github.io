<script setup lang="ts">
//import component
import IconItem from '../icons/IconItem.vue'

//import function/data
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiChevronUp } from '@mdi/js'

//props & emits
//properties
const { locale } = useI18n()

//computed properties
const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' }
]

const open = ref(false)
const selectedLanguageCode = ref(languages.find((l) => l.code === locale.value))

const selectableLanguage = ref(languages.filter((l) => l.code != selectedLanguageCode.value?.code))

//methods
function handleLanguageClickOutside(event: MouseEvent) {
  const dropdown = document.getElementById('lang-dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    open.value = false
  }
}
function selectLanguage(lang: { code: string; label: string }) {
  selectedLanguageCode.value = lang
  locale.value = lang.code
  // localStorage.setItem('language', lang.code)
  open.value = false
}

//watch functions
watch(selectedLanguageCode, async () => {
  selectableLanguage.value = languages.filter((l) => l.code != selectedLanguageCode.value?.code)
})

//lifecycle hooks
onMounted(() => document.addEventListener('click', handleLanguageClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleLanguageClickOutside))
</script>

<template>
  <div id="lang-dropdown" class="dropdown">
    <!-- Button -->
    <button @click="open = !open" class="dropdown-btn">
      <span class="selected">
        <span class="label">{{ selectedLanguageCode?.label }}</span>
      </span>
      <IconItem :path="mdiChevronUp" size="25" class="arrow" :class="{ open: open }" />
    </button>

    <!-- Dropdown -->
    <ul v-if="open" class="dropdown-list">
      <li
        v-for="lang in selectableLanguage"
        :key="lang.code"
        @click="selectLanguage(lang)"
        class="dropdown-item"
      >
        <span>{{ lang.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/************* Desktop style *************/
.dropdown {
  position: relative;
}

.dropdown-btn {
  width: 100%;
  padding: 10px 14px;
  border: none;
  color: var(--color-text);
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
}

.selected {
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow {
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-list {
  position: absolute;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  list-style: none;
  margin: 0;
  padding: 4px 0;
  z-index: 100;
}

.dropdown-item {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 15px;
}

.dropdown-item:hover > span {
  font-weight: bold;
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
}

/*  Handy */
@media screen and (max-width: 39em) {
}
</style>
