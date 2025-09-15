<script setup lang="ts">
//import component
import HeaderSection from '../components/HeaderSection.vue'
import DataSection from '../components/DataSection.vue'
import TooltipItem from '../components/tooltip/TooltipItem.vue'

//import function/data
import { ref } from 'vue'
import vvSeile from '../assets/data/vvSeile.json'
import image from '../assets/images/FATZER_Integra_vollverschlossen_Web.png'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { useI18n } from 'vue-i18n'

//props & emits
//properties
const { t } = useI18n()
const selectedDiameterId = ref<number>()
const columns = ref([
  {
    label: t('product'),
    field: 'product'
  },
  {
    label: 'kg/m',
    field: 'kg/m'
  },
  {
    label: 'MBK',
    field: 'mbk'
  }
])

//computed properties
//methods
//watch functions
//lifecycle hooks
</script>

<template>
  <div>
    <HeaderSection :image="image" :title="$t('flc')" />
    <DataSection v-model="selectedDiameterId" :diameterOptions="vvSeile.data">
      <template #tooltip>
        <TooltipItem>
          <template #content>
            <div>
              <p>kg/m:</p>
              <p>{{ $t('kg/mDescription') }}</p>
            </div>
            <div>
              <p>MBK:</p>
              <p>
                {{ $t('mBKDescription') }} <br />
                <span class="bold">{{ $t('mBKDescriptionBold') }}</span>
              </p>
            </div>
          </template>
        </TooltipItem>
      </template>
      <template #table>
        <vue-good-table
          id="vvseileTable"
          :columns="columns"
          :rows="vvSeile.data.find((d) => d.id == selectedDiameterId)?.data ?? []"
          :sort-options="{
            enabled: true
          }"
        >
          <template #emptystate>{{ $t('tableEmptyMessage') }}</template>
        </vue-good-table>
      </template>
    </DataSection>
  </div>
</template>

<style scoped>
/************* Desktop style *************/

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
