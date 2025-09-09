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

//props & emits
//properties
const selectedDiameterId = ref<number>()
const columns = ref([
  {
    label: 'Produkt',
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
    <HeaderSection :image="image" title="Vollverschlossene Seile" />
    <DataSection v-model="selectedDiameterId" :diameterOptions="vvSeile.data">
      <template #tooltip>
        <TooltipItem>
          <template #content>
            <div>
              <p>kg/m:</p>
              <p>Seilmasse</p>
            </div>
            <div>
              <p>MBK:</p>
              <p>
                Mindestbruchkraft in kN bei Drahtnennfestigkeit <br />
                <span class="bold">1960 N/mm2</span>
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
          <template #emptystate>Keinen Durchmesser gewählt oder keine Daten vorhanden</template>
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
