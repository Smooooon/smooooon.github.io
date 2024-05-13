<script setup lang="ts">
//import component
import HeaderSection from '../components/HeaderSection.vue'
import DataSection from '../components/DataSection.vue'

//import function/data
import { ref } from 'vue'
import vvSeile from '../assets/data/vvSeile.json'
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
    <HeaderSection
      imageName="FATZER_Integra_vollverschlossen_Web.png"
      title="Vollverschlossene Seile"
    />
    <DataSection v-model="selectedDiameterId" :diameterOptions="vvSeile.data">
      <template #tooltip>
        <p>kg/m: &nbsp; Seilmasse</p>
        <p>
          MBK: &nbsp;&nbsp; Mindestbruchkraft in kN bei
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Drahtnennfestigkeit
          <span class="bold"
            >1960 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            N/mm2</span
          >
        </p>
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
